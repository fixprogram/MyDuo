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
  isQuestion: Boolean[];
  active: Boolean;
};

const reducer = (state: any, action: { type: string; payload?: any }) => {
  const { steps, isQuestion } = state;
  switch (action.type) {
    case "SHOW_QUESTION":
      const newIsQuestion = isQuestion.map((item: boolean, index: number) =>
        action.payload - 1 === index ? !item : item
      );
      return { ...state, isQuestion: newIsQuestion };
    case "ADD_STEP":
      const newSteps = [...steps, steps[steps.length - 1] + 1];
      const addIsQuestion = [...isQuestion, false];
      return { ...state, steps: newSteps, isQuestion: addIsQuestion };
    case "REMOVE_STEP":
      const copySteps = steps.filter(
        (item: number, index: number) => action.payload - 1 !== index
      );
      const copyQuestion = isQuestion.filter(
        (item: boolean, index: number) => action.payload - 1 !== index
      );
      return { ...state, steps: copySteps, isQuestion: copyQuestion };
    default:
      throw new Error(`We don't know this action type: ${action.type}`);
  }
};

const basicState: State = { steps: [1], isQuestion: [false], active: true };
export default function StoryForm() {
  const [{ steps, isQuestion, active }, dispatch] = useReducer(
    reducer,
    basicState
  );
  return (
    <form method="POST" css={{ display: "flex", flexDirection: "column" }}>
      <Legend>Basic info Story Form</Legend>
      <VisuallyHiddenInput type="text" name="formType" value="story" readOnly />
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
        <InputTextLabel htmlFor="innerTitle">
          <LabelText>Inner title</LabelText>
          <Input
            type="text"
            id="innerTitle"
            name="innerTitle"
            placeholder="Enter inner title"
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
            <label htmlFor={`radio${step}`}>
              Me
              <input
                type="radio"
                name={`radio${step}`}
                id={`radio${step}`}
                value="me"
              />
            </label>

            <label htmlFor={`radio1${step}`}>
              Node
              <input
                type="radio"
                name={`radio${step}`}
                id={`radio1${step}`}
                value="node"
              />
            </label>

            <TextareaLabel>
              <LabelText>Message</LabelText>
              <Textarea
                id={`text${step}`}
                name="text"
                placeholder="Type message"
              />
            </TextareaLabel>

            <FormButton
              type="button"
              onClick={() => dispatch({ type: "SHOW_QUESTION", payload: step })}
            >
              Add question
            </FormButton>

            {isQuestion[step - 1] ? (
              <Fieldset>
                <Input
                  type="text"
                  name={`questionTitle${step}`}
                  placeholder="Enter question title"
                />
                <ul>
                  <li>
                    <label>
                      Variant 1
                      <Input
                        type="text"
                        name={`variant${step}`}
                        placeholder="type first variant"
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      Variant 2
                      <Input
                        type="text"
                        name={`variant${step}`}
                        placeholder="type second variant"
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      Variant 3
                      <Input
                        type="text"
                        name={`variant${step}`}
                        placeholder="type third variant"
                      />
                    </label>
                  </li>
                </ul>
                <Input
                  type="number"
                  name={`answer${step}`}
                  placeholder="type right answer"
                />
              </Fieldset>
            ) : null}
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
