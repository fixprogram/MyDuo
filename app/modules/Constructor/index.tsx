import { createContext, useContext, useEffect } from "react";
import SkillInfo from "./components/SkillInfo";
import { initialContext, useConstructorReducer } from "./Levels/reducer";
import { ConstructorFormInner } from "./components/lib";
import Levels from "./Levels";
import Sidebar from "./Levels/components/Sidebar";
import { ConstructorData } from "./Levels/types";
import { useFetcher } from "@remix-run/react";
import {
  ConstructorContainer,
  ConstructorInner,
} from "./Levels/components/lib";
import { ActionData } from "~/routes/$language/new";

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
}: {
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
      setup(data);
    }
  }, [data]);

  useEffect(() => {
    if (actionData?.errors?.title && currentScreen !== "Skill") {
      changeCurrentScreen("Skill");
    }
  }, [actionData]);

  function onHandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formattedSteps = steps.map(
      ({ ready, id, options, answer, ...rest }) => ({
        ...rest,
        answer: typeof answer === "string" ? answer.trim() : answer,
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

  const submitText = fetcher.state === "submitting" ? "Saving..." : "Save";

  return (
    <ConstructorContext.Provider value={state}>
      <ConstructorContainer>
        <fetcher.Form
          method="post"
          autoComplete="off"
          onSubmit={(e) => onHandleSubmit(e)}
        >
          <ConstructorInner>
            <ConstructorFormInner>
              <SkillInfo
                isEditingSkill={Boolean(data)}
                actionData={actionData}
              />
              <Levels />
            </ConstructorFormInner>
            <Sidebar submitText={submitText} />
          </ConstructorInner>
        </fetcher.Form>
      </ConstructorContainer>
    </ConstructorContext.Provider>
  );
}
