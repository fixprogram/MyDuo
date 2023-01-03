import { createContext, useContext, useEffect } from "react";
import SkillInfo from "./components/SkillInfo";
import { initialContext, useConstructorReducer } from "./Levels/reducer";
import { ConstructorForm, ConstructorFormInner } from "./components/lib";
import Levels from "./Levels";
import Sidebar from "./Levels/components/Sidebar";
import { ActionData } from "~/routes/$language/constructor/new";
import { ConstructorData } from "./Levels/types";
import { Skill } from "@prisma/client";

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
  const { currentScreen, setup, changeCurrentScreen } = state;

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

  return (
    <ConstructorContext.Provider value={state}>
      <ConstructorForm method="post" autoComplete="off">
        <ConstructorFormInner>
          <SkillInfo
            title={data?.title}
            actionData={actionData}
            lastAddedSkills={lastAddedSkills}
          />
          <Levels />
        </ConstructorFormInner>
        <Sidebar />
      </ConstructorForm>
    </ConstructorContext.Provider>
  );
}
