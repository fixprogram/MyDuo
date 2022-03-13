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
} from "./lib";

type State = {
  steps: Number[];
  active: Boolean;
};

const reducer = (state: any, action: { type: string; payload?: any }) => {
  const { steps } = state;
  switch (action.type) {
    case "ADD_STEP":
      const newSteps = [...steps, steps[steps.length - 1] + 1];
      return { ...state, steps: newSteps };
    case "REMOVE_STEP":
      const copySteps = steps.filter(
        (item: number, index: number) => action.payload - 1 !== index
      );
      return { ...state, steps: copySteps };
    default:
      throw new Error(`We don't know this action type: ${action.type}`);
  }
};

const basicState: State = { steps: [1], active: true };
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
          />
        </TextareaLabel>
      </Fieldset>
      <hr />
      <Legend>Steps</Legend>
      {steps.map((step: number) => (
        <Fragment key={step}>
          <h2>Step {step}</h2>
          <Fieldset>
            <InputTextLabel htmlFor="question">
              <LabelText>Question</LabelText>
              <Input
                type="text"
                id="question"
                name="question"
                placeholder="Enter question for this lesson"
              />
            </InputTextLabel>

            <TextareaLabel htmlFor={`answer${step}`}>
              <LabelText>Answer</LabelText>
              <Textarea
                id={`answer${step}`}
                name={`answer${step}`}
                placeholder="Type answer"
              />
            </TextareaLabel>

            <TextareaLabel htmlFor={`keywords${step}`}>
              <LabelText>Keywords</LabelText>
              <Textarea
                id={`keywords${step}`}
                name="keywords"
                placeholder="Type keywords"
              />
            </TextareaLabel>
          </Fieldset>
          {step > 1 ? (
            <FormButton
              type="button"
              onClick={() => dispatch({ type: "REMOVE_STEP", payload: step })}
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
