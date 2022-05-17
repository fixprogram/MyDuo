import { useEffect } from "react";
import { Legend } from "~/components/lib";
import type { Step } from "./types";
import QuestionAnswer from "./components/QuestionAnswer";
import { StepContent, StepHeader } from "./components/lib";
import Variants from "./components/Variants";
import MatchingPairs from "./components/MatchingPairs";
import InsertWords from "./components/InsertWords";
import Close from "~/styles/close.svg";
import ChooseStyleScreen from "./components/ChooseStyleScreen";

export default function Steps({
  activeStep,
  steps,
  setReady,
  screen,
  setStepType,
  removeStepType,
  setAnswer,
  setKeywords,
  setStepReady,
  setQuestion,
}: {
  setStepType: Function;
  removeStepType: Function;
  setAnswer: Function;
  setKeywords: Function;
  setStepReady: Function;
  activeStep: number;
  steps: Step[];
  setReady: Function;
  setQuestion: Function;
  screen: string;
}) {
  useEffect(() => {
    setReady(!steps.find((step: Step) => step.ready === false));
  }, [steps, setReady]);

  return (
    <section
      style={{
        position: "absolute",
        width: "100%",
        top: 0,
        visibility: screen !== "Steps" ? "hidden" : "visible",
      }}
    >
      {steps.map(
        (
          {
            question,
            number,
            keywords,
            answer,
            stepType,
            id,
            variants,
            ready,
          }: Step,
          idx: number
        ) => (
          <section
            className={`${activeStep !== idx && "visuallyHidden"}`}
            key={id}
          >
            <input type="hidden" name="step" value={idx} />
            <Legend>{stepType ? stepType : "Choose type"}</Legend>
            <StepHeader>
              {stepType !== "" && (
                <button
                  type="button"
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    width: 16,
                    height: 16,
                    border: "none",
                    backgroundColor: "inherit",
                    padding: 0,
                    left: 30,
                    bottom: -60,
                  }}
                  onClick={() => removeStepType(id)}
                >
                  <img
                    src={Close}
                    alt="close"
                    style={{
                      width: "16px",
                      height: "16px",
                      verticalAlign: "initial",
                    }}
                  />
                </button>
              )}
            </StepHeader>

            <StepContent>
              {stepType === "" && (
                <ChooseStyleScreen setStepType={setStepType} id={id} />
              )}

              {stepType === "Question" ? (
                <QuestionAnswer
                  question={question}
                  number={number}
                  answer={
                    typeof answer !== "string" ? answer.join(" ") : answer
                  }
                  setQuestion={(question: string) =>
                    setQuestion(question, number)
                  }
                  setAnswer={(answer: string) => setAnswer(answer, number)}
                  setKeywords={(keywords: string[]) =>
                    setKeywords(keywords, number)
                  }
                  keywords={keywords}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                />
              ) : stepType === "Insert" ? (
                <InsertWords
                  number={number}
                  answer={
                    typeof answer !== "string" ? answer.join(" ") : answer
                  }
                  setAnswer={(answer: string[]) => setAnswer(answer, number)}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                />
              ) : stepType === "Variants" ? (
                <Variants
                  initialQuestion={question}
                  initialVariants={variants}
                  number={number}
                  answer={answer}
                  setAnswer={(answer: string[]) => setAnswer(answer, number)}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                  variantsCount={3}
                />
              ) : stepType === "Pairs" ? (
                <MatchingPairs
                  number={number}
                  answer={answer}
                  setAnswer={(answer: string[]) => setAnswer(answer, number)}
                  variantsCount={8}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                  initialVariants={variants}
                />
              ) : null}
            </StepContent>
          </section>
        )
      )}
    </section>
  );
}
