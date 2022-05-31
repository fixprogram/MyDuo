import { useEffect, useReducer, useState } from "react";
import { Form, useTransition } from "remix";
import { FormButton } from "~/components/lib";
import TopicInfo from "./components/TopicInfo";
import { basicState, reducer } from "./Levels/reducer";
import actionCreator from "./Levels/actions";
import { ConstructorSidebar } from "./components/lib";
import Levels from "./Levels";
import Sidebar from "./Levels/components/Sidebar";
import { ActionData } from "~/routes/$language/constructor/new";
import { Step } from "./Levels/types";

export type ConstructorData = {
  title: string;
  steps: Step[];
};

export default function Constructor({
  data,
  actionData,
  lastAddedTopic,
}: {
  lastAddedTopic?: any;
  data?: ConstructorData;
  actionData: ActionData;
}) {
  const [basicInfoReady, setTopicInfoReady] = useState(false);
  const [stepsReady, setStepsReady] = useState(false);
  const [{ steps, chapters, currentScreen }, dispatch] = useReducer(
    reducer,
    basicState
  );

  const { setData, changeCurrentScreen } = actionCreator(dispatch);

  const transition = useTransition();
  const submitText = transition.state === "submitting" ? "Saving" : "Save";

  const isSubmitActive = stepsReady === true && basicInfoReady === true;
  const isSubmitDisabled =
    stepsReady === false || basicInfoReady === false || submitText !== "Save";

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
    <Form
      method="post"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          position: "relative",
          paddingLeft: 30,
        }}
      >
        <TopicInfo
          title={data?.title}
          setReady={(val: boolean) => setTopicInfoReady(val)}
          screen={currentScreen}
          actionData={actionData}
          lastAddedTopic={lastAddedTopic}
        />

        <Levels
          steps={steps}
          setReady={(val: boolean) => setStepsReady(val)}
          screen={currentScreen}
          dispatch={dispatch}
        />
      </div>
      <ConstructorSidebar>
        <Sidebar
          chapters={chapters}
          steps={steps}
          currentScreen={currentScreen}
          dispatch={dispatch}
        >
          <FormButton
            type="submit"
            active={isSubmitActive}
            disabled={isSubmitDisabled}
          >
            {submitText}
          </FormButton>
        </Sidebar>
      </ConstructorSidebar>
    </Form>
  );
}
