import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Form, useTransition } from "remix";
import { FormButton } from "~/components/lib";
import TopicInfo from "./components/TopicInfo";
import { basicState, useConstructorReducer } from "./Levels/reducer";
import actionCreator from "./Levels/actions";
import {
  ConstructorForm,
  ConstructorFormInner,
  ConstructorSidebar,
} from "./components/lib";
import Levels from "./Levels";
import Sidebar from "./Levels/components/Sidebar";
import { ActionData } from "~/routes/$language/constructor/new";
import { ConstructorData, Step } from "./Levels/types";

const ConstructorContext = createContext();
ConstructorContext.displayName = "ConstructorContext";

// const ConstructorProvider: React.FC = ({ children }) => {
// const { state } = useConstructorReducer();

//   return (
//     <ConstructorContext.Provider value={state}>
//       {children}
//     </ConstructorContext.Provider>
//   );
// };

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
  // const { currentScreen, setData, changeCurrentScreen } = useConstructor();

  const state = useConstructorReducer();
  const { currentScreen, setData, changeCurrentScreen } = state;

  useEffect(() => {
    if (data) {
      setData(data.steps);
    }
  }, [data]);

  useEffect(() => {
    if (actionData?.errors?.title && currentScreen !== "Topic") {
      changeCurrentScreen("Topic");
    }
  }, [actionData]);

  return (
    // <ConstructorProvider>
    <ConstructorContext.Provider value={state}>
      <ConstructorForm method="post">
        <ConstructorFormInner>
          <TopicInfo
            title={data?.title}
            // setReady={(val: boolean) => setTopicInfoReady(val)}
            // screen={currentScreen}
            actionData={actionData}
            lastAddedTopics={lastAddedTopics}
          />

          <Levels
          // steps={steps}
          // setReady={(val: boolean) => setStepsReady(val)}
          // screen={currentScreen}
          // dispatch={dispatch}
          />
        </ConstructorFormInner>
        <ConstructorSidebar>
          <Sidebar
          // chapters={chapters}
          // steps={steps}
          // currentScreen={currentScreen}
          // dispatch={dispatch}
          >
            {/* <FormButton
            type="submit"
            active={isSubmitActive}
            disabled={isSubmitDisabled}
          >
            {submitText}
          </FormButton> */}
          </Sidebar>
        </ConstructorSidebar>
      </ConstructorForm>
    </ConstructorContext.Provider>
    // </ConstructorProvider>
  );
}
