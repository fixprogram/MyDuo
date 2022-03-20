import { Fragment } from "react";
import { Fieldset, TextareaLabel, LabelText, Textarea } from "~/components/lib";

export default function Dialog({ step }) {
  return (
    <Fragment>
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
          <Textarea id={`text${step}`} name="text" placeholder="Type message" />
        </TextareaLabel>
      </Fieldset>
    </Fragment>
  );
}
