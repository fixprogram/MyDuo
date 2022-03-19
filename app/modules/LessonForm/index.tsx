/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useReducer } from "react";
import {
  Fieldset,
  FormButton,
  Input,
  InputTextLabel,
  LabelText,
  Legend,
  Textarea,
  TextareaLabel,
  VisuallyHiddenInput,
} from "~/components/lib";
import Keywords from "./components/Keywords";
import { reducer, createId } from "./reducer";
import type { State, Step } from "./types";

const basicState: State = {
  steps: [{ number: 0, keywords: [], answer: "", id: createId }],
  active: true,
};

export default function LessonForm() {
  const [{ steps, active }, dispatch] = useReducer(reducer, basicState);
  return (
    <form method="POST" css={{ display: "flex", flexDirection: "column" }}>
      <Legend>Basic info Lesson Form</Legend>

      <VisuallyHiddenInput
        type="text"
        name="formType"
        value="lesson"
        readOnly
      />
      <Fieldset>
        <InputTextLabel htmlFor="title">
          <LabelText>Title</LabelText>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title for this lesson"
            required
          />
        </InputTextLabel>
      </Fieldset>
      <Fieldset>
        <TextareaLabel htmlFor="description">
          <LabelText>Description</LabelText>
          <Textarea
            id="description"
            name="description"
            placeholder="Add description of this lesson"
            required
          />
        </TextareaLabel>
      </Fieldset>
      <hr />
      <Legend>Steps</Legend>
      {steps.map(({ number, keywords, answer, id }: Step, idx: number) => (
        <Fragment key={id}>
          <h2>Step {idx + 1}</h2>
          <Fieldset>
            <InputTextLabel htmlFor="question">
              <LabelText>Question</LabelText>
              <Input
                type="text"
                id="question"
                name="question"
                placeholder="Enter question for this lesson"
                required
              />
            </InputTextLabel>

            <TextareaLabel htmlFor={`answer${number}`}>
              <LabelText>Answer</LabelText>
              <Textarea
                id={`answer${number}`}
                name={`answer${number}`}
                placeholder="Type answer"
                value={answer}
                onChange={(evt) =>
                  dispatch({
                    type: "SET_ANSWER",
                    payload: { answer: evt.target.value, number },
                  })
                }
                required
              />
            </TextareaLabel>

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
          </Fieldset>
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
        </Fragment>
      ))}
      <hr />
      <Fieldset>
        <FormButton
          type="button"
          onClick={() => dispatch({ type: "ADD_STEP" })}
        >
          Add step
        </FormButton>

        <FormButton type="submit" active={active}>
          Save lesson
        </FormButton>
      </Fieldset>
    </form>
  );
}
