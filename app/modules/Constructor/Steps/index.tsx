/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useEffect, useReducer, useRef, useState } from "react";
import { Legend, VisuallyHiddenInput, FormButton } from "~/components/lib";
import type { Step } from "./types";
import { reducer } from "./reducer";
import { State } from "./types";
import { createId } from "./utils";
import QuestionAnswer from "./components/QuestionAnswer";
import { ChooseStyle, StepHeader, StyleButton } from "./components/lib";
import InsertWords from "./components/InsertWords";
import Variants from "./components/Variants";
import MatchingPairs from "./components/MatchingPairs";

const basicState: State = {
  steps: [{ number: 0, keywords: [], answer: "", style: "", id: createId }],
};

export default function Steps() {
  const [{ steps }, dispatch] = useReducer(reducer, basicState);
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.scrollIntoView();
  }, [steps]);

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

            <div
              css={{
                borderTop: "1px solid #e5e5e5",
                borderBottom: "1px solid #e5e5e5",
                padding: "60px 24px",
                minHeight: 300,
                marginTop: 20,
              }}
            >
              {style === "" ? (
                <ChooseStyle>
                  <StyleButton
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "SET_STYLE",
                        payload: { style: "Question", id },
                      })
                    }
                  >
                    Question / Answer
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "SET_STYLE",
                        payload: { style: "Insert", id },
                      })
                    }
                  >
                    Insert words
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "SET_STYLE",
                        payload: { style: "Variants", id },
                      })
                    }
                  >
                    Choose right variant
                  </StyleButton>
                  <StyleButton
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "SET_STYLE",
                        payload: { style: "Pairs", id },
                      })
                    }
                  >
                    Matching pairs
                  </StyleButton>
                </ChooseStyle>
              ) : null}

              {style === "Question" ? (
                <QuestionAnswer
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) =>
                    dispatch({
                      type: "SET_ANSWER",
                      payload: { answer, number },
                    })
                  }
                  setKeywords={(keywords: any) =>
                    dispatch({
                      type: "SET_KEYWORDS",
                      payload: {
                        keywords,
                        number,
                      },
                    })
                  }
                  setStyles={() =>
                    dispatch({
                      type: "SET_STYLE",
                      payload: { style: "", id },
                    })
                  }
                  keywords={keywords}
                />
              ) : style === "Insert" ? (
                <InsertWords
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) =>
                    dispatch({
                      type: "SET_ANSWER",
                      payload: { answer, number },
                    })
                  }
                  setStyles={() =>
                    dispatch({
                      type: "SET_STYLE",
                      payload: { style: "", id },
                    })
                  }
                />
              ) : style === "Variants" ? (
                <Variants
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) =>
                    dispatch({
                      type: "SET_ANSWER",
                      payload: { answer, number },
                    })
                  }
                  setStyles={() =>
                    dispatch({
                      type: "SET_STYLE",
                      payload: { style: "", id },
                    })
                  }
                />
              ) : style === "Pairs" ? (
                <MatchingPairs
                  number={number}
                  answer={answer}
                  setAnswer={(answer: any) =>
                    dispatch({
                      type: "SET_ANSWER",
                      payload: { answer, number },
                    })
                  }
                  setStyles={() =>
                    dispatch({
                      type: "SET_STYLE",
                      payload: { style: "", id },
                    })
                  }
                />
              ) : null}
            </div>
            <div ref={myRef}></div>
          </Fragment>
        )
      )}
      <hr />
    </Fragment>
  );
}
