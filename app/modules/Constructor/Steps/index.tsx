import { Fragment, useEffect, useReducer, useRef } from "react";
import { Legend, VisuallyHiddenInput, FormButton } from "~/components/lib";
import type { Step } from "./types";
import { reducer, basicState } from "./reducer";
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
import {
  addStep,
  removeStep,
  setAnswer,
  setKeywords,
  setStepType,
  setStepReady,
  removeStepType,
} from "./actions";

export default function Steps({
  setReady,
  screen,
}: {
  setReady: Function;
  screen: string;
}) {
  const [{ steps }, dispatch] = useReducer(reducer, basicState);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (myRef.current !== null) {
      myRef.current.scrollIntoView();
    }
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
      <Legend>Steps</Legend>
      {steps.map(
        (
          { number, keywords, answer, stepType, id, ready }: Step,
          idx: number
        ) => (
          <Fragment key={id}>
            <VisuallyHiddenInput type="text" name="step" value={idx} readOnly />
            <StepHeader>
              <h2 style={{ marginRight: "auto" }}>Step {idx + 1}</h2>

              {number > 0 ? (
                <FormButton
                  type="button"
                  onClick={() => dispatch(removeStep(id))}
                >
                  Remove step
                </FormButton>
              ) : null}
              <FormButton
                type="button"
                onClick={() => dispatch(addStep())}
                style={{ marginLeft: 10 }}
              >
                Add step
              </FormButton>

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
                  onClick={() => dispatch(removeStepType(id))}
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
                    onClick={() => dispatch(setStepType("Question", id))}
                  >
                    Question / Answer
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => dispatch(setStepType("Insert", id))}
                  >
                    Insert words
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => dispatch(setStepType("Variants", id))}
                  >
                    Choose right variant
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => dispatch(setStepType("Pairs", id))}
                  >
                    Matching pairs
                  </StyleButton>
                </ChooseStyle>
              ) : null}

              {stepType === "Question" ? (
                <QuestionAnswer
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) =>
                    dispatch(setAnswer(answer, number))
                  }
                  setKeywords={(keywords: any) =>
                    dispatch(setKeywords(keywords, number))
                  }
                  keywords={keywords}
                  setReady={(isReady: boolean) =>
                    dispatch(setStepReady(isReady, number))
                  }
                />
              ) : stepType === "Insert" ? (
                <InsertWords
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) =>
                    dispatch(setAnswer(answer, number))
                  }
                  setReady={(isReady: boolean) =>
                    dispatch(setStepReady(isReady, number))
                  }
                />
              ) : stepType === "Variants" ? (
                <Variants
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) =>
                    dispatch(setAnswer(answer, number))
                  }
                  setReady={(isReady: boolean) =>
                    dispatch(setStepReady(isReady, number))
                  }
                  variantsCount={3}
                />
              ) : stepType === "Pairs" ? (
                <MatchingPairs
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) =>
                    dispatch(setAnswer(answer, number))
                  }
                  variantsCount={8}
                  setReady={(isReady: boolean) =>
                    dispatch(setStepReady(isReady, number))
                  }
                />
              ) : null}
            </StepContent>
            <div ref={myRef}></div>
          </Fragment>
        )
      )}
    </section>
  );
}
