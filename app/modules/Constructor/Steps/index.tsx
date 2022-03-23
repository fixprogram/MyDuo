/** @jsx jsx */
import { jsx } from "@emotion/react";
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
import InsertWords from "./components/InsertWords";
import Variants from "./components/Variants";
import MatchingPairs from "./components/MatchingPairs";

export default function Steps() {
  const [{ steps }, dispatch] = useReducer(reducer, basicState);
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (myRef.current !== null) {
      myRef.current.scrollIntoView();
    }
  }, [steps]);

  const setStyle = (style = "", id: string) => {
    dispatch({
      type: "SET_STYLE",
      payload: { style, id },
    });
  };
  const setAnswer = (answer: any, number: number) => {
    dispatch({
      type: "SET_ANSWER",
      payload: { answer, number },
    });
  };

  return (
    <Fragment>
      <Legend>Steps</Legend>
      {steps.map(
        ({ number, keywords, answer, style, id }: Step, idx: number) => (
          <Fragment key={id}>
            <VisuallyHiddenInput type="text" name="step" value="idx" readOnly />
            <StepHeader>
              <h2 css={{ marginRight: "auto" }}>Step {idx + 1}</h2>

              {number > 0 ? (
                <FormButton
                  type="button"
                  onClick={() =>
                    dispatch({ type: "REMOVE_STEP", payload: { number: id } })
                  }
                >
                  Remove step
                </FormButton>
              ) : null}
              <FormButton
                type="button"
                onClick={() => dispatch({ type: "ADD_STEP" })}
                css={{ marginLeft: 10 }}
              >
                Add step
              </FormButton>
            </StepHeader>

            <StepContent>
              {style === "" ? (
                <ChooseStyle>
                  <StyleButton
                    type="button"
                    onClick={() => setStyle("Question", id)}
                  >
                    Question / Answer
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => setStyle("Insert", id)}
                  >
                    Insert words
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => setStyle("Variants", id)}
                  >
                    Choose right variant
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() => setStyle("Pairs", id)}
                  >
                    Matching pairs
                  </StyleButton>
                </ChooseStyle>
              ) : null}

              {style === "Question" ? (
                <QuestionAnswer
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) => setAnswer(answer, number)}
                  setKeywords={(keywords: any) =>
                    dispatch({
                      type: "SET_KEYWORDS",
                      payload: {
                        keywords,
                        number,
                      },
                    })
                  }
                  setStyle={() => setStyle("", id)}
                  keywords={keywords}
                />
              ) : style === "Insert" ? (
                <InsertWords
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) => setAnswer(answer, number)}
                  setStyle={() => setStyle("", id)}
                />
              ) : style === "Variants" ? (
                <Variants
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) => setAnswer(answer, number)}
                  setStyle={() => setStyle("", id)}
                />
              ) : style === "Pairs" ? (
                <MatchingPairs
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) => setAnswer(answer, number)}
                  setStyle={() => setStyle("", id)}
                />
              ) : null}
            </StepContent>
            <div ref={myRef}></div>
          </Fragment>
        )
      )}
      <hr />
    </Fragment>
  );
}
