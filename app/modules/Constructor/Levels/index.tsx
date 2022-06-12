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
import { ScreenContainer } from "../components/lib";
import actionCreator, { Action } from "./actions";

export default function Levels({
  steps,
  setReady,
  screen,
  dispatch,
}: {
  steps: Step[];
  setReady: Function;
  screen: string;
  dispatch: React.Dispatch<Action>;
}) {
  useEffect(() => {
    setReady(!steps.find((step: Step) => step.ready === false));
  }, [steps, setReady]);

  const {
    setAnswer,
    setKeywords,
    setStepType,
    setStepReady,
    removeStepType,
    setQuestion,
  } = actionCreator(dispatch);

  return (
    <ScreenContainer screen={screen} target="Steps">
      {steps.map(
        (
          {
            active,
            question,
            number,
            keywords,
            answer,
            stepType,
            id,
            variants,
            ready,
            text,
            chapter,
          }: Step,
          idx: number
        ) => (
          <section className={`${!active && "visuallyHidden"}`} key={id}>
            <input type="hidden" name="step" value={idx} />
            <input type="hidden" name={`chapter`} value={chapter} />
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
                  text={text}
                  number={number}
                  answer={
                    typeof answer !== "string" ? answer.join(" ") : answer
                  }
                  setAnswer={(answer: string) => setAnswer(answer, number)}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                />
              ) : stepType === "Variants" ? (
                <Variants
                  initialQuestion={question}
                  initialVariants={variants}
                  number={number}
                  answer={answer}
                  setAnswer={(answer: string) => setAnswer(answer, number)}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                  variantsCount={3}
                />
              ) : stepType === "Pairs" ? (
                <MatchingPairs
                  number={number}
                  answer={answer}
                  setAnswer={(answer: string) => setAnswer(answer, number)}
                  variantsCount={4}
                  setReady={(isReady: boolean) => setStepReady(isReady, number)}
                  initialVariants={variants}
                />
              ) : null}
            </StepContent>
          </section>
        )
      )}
    </ScreenContainer>
  );
}
