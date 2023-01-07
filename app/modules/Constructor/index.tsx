import { createContext, Fragment, useContext, useEffect } from "react";
import SkillInfo from "./components/SkillInfo";
import { initialContext, useConstructorReducer } from "./Levels/reducer";
import { ConstructorForm, ConstructorFormInner } from "./components/lib";
import Levels from "./Levels";
import Sidebar from "./Levels/components/Sidebar";
import { ActionData } from "~/routes/$language/constructor/new";
import { ConstructorData } from "./Levels/types";
import { Skill } from "@prisma/client";
import { useFetcher } from "@remix-run/react";

const ConstructorContext = createContext(initialContext);
ConstructorContext.displayName = "ConstructorContext";

export const useConstructor = () => {
  const state = useContext(ConstructorContext);
  if (state === undefined) {
    throw new Error("useConstructor must be used within a <Constructor />");
  }
  return state;
};

export default function Constructor({
  data,
  actionData,
  lastAddedSkills,
}: {
  lastAddedSkills?: Skill[];
  data?: ConstructorData;
  actionData: ActionData;
}) {
  const state = useConstructorReducer();
  const {
    currentScreen,
    setup,
    changeCurrentScreen,
    steps,
    skillTitle,
    skillLineNumber,
  } = state;
  const fetcher = useFetcher();

  useEffect(() => {
    if (data) {
      setup(data.steps);
    }
  }, [data]);

  useEffect(() => {
    if (actionData?.errors?.title && currentScreen !== "Skill") {
      changeCurrentScreen("Skill");
    }
  }, [actionData]);

  function onHandleSubmit(e) {
    e.preventDefault();

    const formattedSteps = steps.map(
      ({ number, ready, id, options, ...rest }) => ({
        ...rest,
        options: JSON.stringify(options),
      })
    );

    fetcher.submit(
      {
        steps: JSON.stringify(formattedSteps),
        skillData: JSON.stringify({ skillTitle, skillLineNumber }),
      },
      { method: "post" }
    );
  }

  return (
    <ConstructorContext.Provider value={state}>
      <fetcher.Form
        method="post"
        autoComplete="off"
        onSubmit={(e) => onHandleSubmit(e)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          height: "calc(100vh - 95px)",
        }}
      >
        {/* <ConstructorForm method="post" autoComplete="off"> */}
        <ConstructorFormInner>
          <SkillInfo
            title={data?.title}
            actionData={actionData}
            lastAddedSkills={lastAddedSkills}
          />
          <Levels />
        </ConstructorFormInner>
        <Sidebar />
        {/* </ConstructorForm> */}
      </fetcher.Form>
    </ConstructorContext.Provider>
  );
}
