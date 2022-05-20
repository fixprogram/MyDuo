import { useEffect, useReducer, useState } from "react";
import { Form, useTransition } from "remix";
import { FormButton } from "~/components/lib";
import TopicInfo from "./components/TopicInfo";
import Steps from "./Steps";
import { basicState, reducer } from "./Levels/reducer";
import actionCreator from "./Levels/actions";
import { Lesson } from "@prisma/client";
import { ConstructorSidebar } from "./components/lib";
import Levels from "./Levels";

export default function Constructor({ data }: { data?: Lesson }) {
  const [basicInfoReady, setTopicInfoReady] = useState(false);
  const [stepsReady, setStepsReady] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("Topic");
  const [activeStep, setActiveStep] = useState(-1);
  const [{ steps }, dispatch] = useReducer(reducer, basicState);
  const [chapters, setChapters] = useState([1]);

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
        <TopicInfo
          title={data?.title}
          setReady={(val: boolean) => setTopicInfoReady(val)}
          screen={currentScreen}
        />

        <Levels
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
      <ConstructorSidebar>
        <h2>Sidebar</h2>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => {
                setCurrentScreen("Topic");
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
              Topic Info
            </button>
          </li>
          {chapters.map((chapter) => (
            <li key={`chapter-${chapter}`}>
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
                Chapter {chapter}
              </button>
              <ul>
                {steps.map(
                  (stepsItem) =>
                    stepsItem.chapter === chapter && (
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
                    )
                )}
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      addStep(chapter);
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
              <button
                type="button"
                onClick={() => {
                  // addStep();
                  if (currentScreen !== "Steps") {
                    setCurrentScreen("Steps");
                  }
                  // setActiveStep(steps.length);
                  setChapters((prevChapters) => [
                    ...prevChapters,
                    prevChapters.length + 1,
                  ]);
                }}
              >
                Add chapter
              </button>
            </li>
          ))}
          {/* <li> */}
          {/* <button
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
              Chapter 1
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
              <li>
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
            <button
              type="button"
              onClick={() => {
                // addStep();
                if (currentScreen !== "Steps") {
                  setCurrentScreen("Steps");
                }
                // setActiveStep(steps.length);
              }}
            >
              Add chapter
            </button>
          </li> */}
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
      </ConstructorSidebar>
    </Form>
  );
}
