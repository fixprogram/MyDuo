/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useEffect, useReducer, useRef, useState } from "react";
import {
  Legend,
  LabelText,
  TextareaLabel,
  VisuallyHiddenInput,
  FormButton,
} from "~/components/lib";
import Keywords from "../components/Keywords";
import type { Step } from "./types";
import { reducer } from "./reducer";
import { State } from "./types";
import { createId } from "./utils";
import QuestionAnswer from "./components/QuestionAnswer";
import { ChooseStyle, StepHeader, StyleButton } from "./components/lib";
import InsertWords from "./components/InsertWords";

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
                        payload: { style: "Question" },
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
                        payload: { style: "Insert" },
                      })
                    }
                  >
                    Insert words
                  </StyleButton>
                  <StyleButton type="button">Choose right variants</StyleButton>
                  <StyleButton type="button">Connect definitions</StyleButton>
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
                />
              ) : null}
            </div>

            <TextareaLabel htmlFor={`keywords${number}`}>
              <LabelText>Choose keywords</LabelText>
              <Keywords
                answer={answer}
                onSet={(keywords: any) =>
                  dispatch({
                    type: "SET_KEYWORDS",
                    payload: {
                      keywords,
                      number,
                    },
                  })
                }
              />

              <VisuallyHiddenInput
                id={`keywords${number}`}
                name={`keywords${number}`}
                placeholder="Type keywords"
                value={keywords}
                readOnly
              />
            </TextareaLabel>
          </Fragment>
        )
      )}
      <hr />
      <div ref={myRef}></div>
    </Fragment>
  );
}
