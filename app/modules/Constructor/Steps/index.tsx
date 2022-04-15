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
  setLessonType,
  setStepReady,
} from "./actions";

export default function Steps({ setReady }: { setReady: Function }) {
  const [{ steps }, dispatch] = useReducer(reducer, basicState);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (myRef.current !== null) {
      myRef.current.scrollIntoView();
    }
    if (!steps.find((step: Step) => step.ready === false)) {
      setReady(true);
    }
  }, [steps, setReady]);

  return (
    <section>
      <Legend>Steps</Legend>
      {steps.map(
        (
          { number, keywords, answer, lessonType, id, ready }: Step,
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

              {lessonType !== "" ? (
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
                  onClick={() => dispatch(setLessonType("", id))}
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
              {lessonType === "" ? (
                <ChooseStyle>
                  <StyleButton
                    type="button"
                    onClick={() => dispatch(setLessonType("Question", id))}
                  >
                    Question / Answer
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => dispatch(setLessonType("Insert", id))}
                  >
                    Insert words
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => dispatch(setLessonType("Variants", id))}
                  >
                    Choose right variant
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => dispatch(setLessonType("Pairs", id))}
                  >
                    Matching pairs
                  </StyleButton>
                </ChooseStyle>
              ) : null}

              {lessonType === "Question" ? (
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
              ) : lessonType === "Insert" ? (
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
              ) : lessonType === "Variants" ? (
                <Variants
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) =>
                    dispatch(setAnswer(answer, number))
                  }
                  setReady={(isReady: boolean) =>
                    dispatch(setStepReady(isReady, number))
                  }
                />
              ) : lessonType === "Pairs" ? (
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
