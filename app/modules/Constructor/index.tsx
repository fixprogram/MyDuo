import { createContext, useContext, useEffect } from "react";
import TopicInfo from "./components/TopicInfo";
import { initialContext, useConstructorReducer } from "./Levels/reducer";
import {
  ConstructorForm,
  ConstructorFormInner,
  ConstructorSidebar,
} from "./components/lib";
import Levels from "./Levels";
import Sidebar from "./Levels/components/Sidebar";
import { ActionData } from "~/routes/$language/constructor/new";
import { ConstructorData } from "./Levels/types";

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
  lastAddedTopics,
}: {
  lastAddedTopics?: any;
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
    if (actionData?.errors?.title && currentScreen !== "Topic") {
      changeCurrentScreen("Topic");
    }
  }, [actionData]);

  return (
    <ConstructorContext.Provider value={state}>
      <ConstructorForm method="post" autoComplete="off">
        <ConstructorFormInner>
          <TopicInfo
            title={data?.title}
            actionData={actionData}
            lastAddedTopics={lastAddedTopics}
          />
          <Levels />
        </ConstructorFormInner>
        <ConstructorSidebar>
          <Sidebar />
        </ConstructorSidebar>
      </ConstructorForm>
    </ConstructorContext.Provider>
  );
}
