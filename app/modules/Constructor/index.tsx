import { Dispatch, useEffect, useReducer, useState } from "react";
import { Form, useTransition } from "remix";
import { FormButton } from "~/components/lib";
import BasicInfo from "./components/BasicInfo";
import Steps from "./Steps";
import { basicState, reducer } from "./Steps/reducer";
import actionCreator from "./Steps/actions";
import { Lesson } from "@prisma/client";

export default function Constructor({ data }: { data?: Lesson }) {
  const [basicInfoReady, setBasicInfoReady] = useState(false);
  const [stepsReady, setStepsReady] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("Basic");
  const [activeStep, setActiveStep] = useState(-1);
  const [{ steps }, dispatch] = useReducer(reducer, basicState);

  const {
    addStep,
    removeStep,
    setAnswer,
    setKeywords,
    setStepType,
    setStepReady,
    removeStepType,
    setData,
    setQuestion,
  } = actionCreator(dispatch);

  const transition = useTransition();
  const submitText = transition.state === "submitting" ? "Saving" : "Save";

  useEffect(() => {
    if (data) {
      setData(data.steps);
    }
  }, [data]);

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
        }}
      >
        <BasicInfo
          title={data?.title}
          setReady={(val: boolean) => setBasicInfoReady(val)}
          screen={currentScreen}
        />

        <Steps
          steps={steps}
          activeStep={activeStep}
          setReady={(val: boolean) => setStepsReady(val)}
          screen={currentScreen}
          setStepType={(type: string, id: string) => setStepType(type, id)}
          removeStepType={(id: string) => removeStepType(id)}
          setAnswer={(answer: string, number: number) =>
            setAnswer(answer, number)
          }
          setQuestion={(question: string, number: number) =>
            setQuestion(question, number)
          }
          setKeywords={(keywords: string[], number: number) => {
            setKeywords(keywords, number);
          }}
          setStepReady={(isReady: boolean, number: number) => {
            setStepReady(isReady, number);
          }}
        />
      </div>
      <div
        style={{
          maxWidth: "25%",
          display: "flex",
          flexDirection: "column",
          paddingBottom: 71,
          position: "relative",
          background: "#fff",
          border: "2px solid #e5e5e5",
          borderRadius: "16px",
          margin: "0 24px 24px",
          padding: "24px",
        }}
      >
        <h2>Sidebar</h2>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => {
                setCurrentScreen("Basic");
              }}
              style={{
                color: "#3c3c3c",
                display: "block",
                fontSize: 16,
                fontWeight: 700,
                overflow: "hidden",
                padding: "15px 20px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Basic Info
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setCurrentScreen("Steps");
                setActiveStep(steps[steps.length - 1].number);
              }}
              style={{
                color: "#3c3c3c",
                display: "block",
                fontSize: 16,
                fontWeight: 700,
                overflow: "hidden",
                padding: "15px 20px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Steps
            </button>
            <ul>
              {steps.map((stepsItem) => (
                <li key={stepsItem.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentScreen("Steps");
                      setActiveStep(stepsItem.number);
                    }}
                  >
                    Step {stepsItem.number + 1}
                  </button>
                  {stepsItem.number > 0 ? (
                    <button
                      type="button"
                      onClick={() => {
                        removeStep(stepsItem.id);
                        setActiveStep(steps.length - 2);
                      }}
                    >
                      Remove step
                    </button>
                  ) : null}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                addStep();
                if (currentScreen !== "Steps") {
                  setCurrentScreen("Steps");
                }
                setActiveStep(steps.length);
              }}
            >
              Add step
            </button>
          </li>
        </ul>
        <FormButton
          type="submit"
          active={stepsReady === true && basicInfoReady === true}
          disabled={
            stepsReady === false ||
            basicInfoReady === false ||
            submitText !== "Save"
          }
          style={{ marginTop: "auto" }}
        >
          {submitText}
        </FormButton>
      </div>
    </Form>
  );
}
