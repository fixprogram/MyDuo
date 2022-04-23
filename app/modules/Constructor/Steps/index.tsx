import { useEffect } from "react";
import { Legend } from "~/components/lib";
import type { Step } from "./types";
import QuestionAnswer from "./components/QuestionAnswer";
import {
  ChooseStyle,
  StepContent,
  StepHeader,
  StyleButton,
} from "./components/lib";
import Variants from "./components/Variants";
import MatchingPairs from "./components/MatchingPairs";
import InsertWords from "./components/InsertWords";
import Close from "~/styles/close.svg";

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
  steps: any;
  setReady: Function;
  setQuestion: Function;
  screen: string;
}) {
  useEffect(() => {
    setReady(!steps.find((step: Step) => step.ready === false));
  }, [steps, setReady]);

  console.log("STEPS: ", steps);

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
          { question, number, keywords, answer, stepType, id, ready }: Step,
          idx: number
        ) => (
          <section
            className={`${activeStep !== idx && "visuallyHidden"}`}
            key={id}
          >
            <input type="hidden" name="step" value={idx} />
            <Legend>Step {idx + 1}</Legend>
            <StepHeader>
              {stepType !== "" ? (
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
                    right: 30,
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
              ) : null}
            </StepHeader>

            <StepContent>
              {stepType === "" ? (
                <ChooseStyle>
                  <StyleButton
                    type="button"
                    onClick={() => setStepType("Question", id)}
                  >
                    Question / Answer
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => setStepType("Insert", id)}
                  >
                    Insert words
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => setStepType("Variants", id)}
                  >
                    Choose right variant
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => setStepType("Pairs", id)}
                  >
                    Matching pairs
                  </StyleButton>
                </ChooseStyle>
              ) : null}

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
                  setAnswer={(answer: any) => setAnswer(answer, number)}
                  setKeywords={(keywords: any) => setKeywords(keywords, number)}
                  keywords={keywords}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                />
              ) : stepType === "Insert" ? (
                <InsertWords
                  number={number}
                  answer={
                    typeof answer !== "string" ? answer.join(" ") : answer
                  }
                  setAnswer={(answer: any) => setAnswer(answer, number)}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                />
              ) : stepType === "Variants" ? (
                <Variants
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) => setAnswer(answer, number)}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                  variantsCount={3}
                />
              ) : stepType === "Pairs" ? (
                <MatchingPairs
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) => setAnswer(answer, number)}
                  variantsCount={8}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                />
              ) : null}
            </StepContent>
          </section>
        )
      )}
    </section>
  );
}
