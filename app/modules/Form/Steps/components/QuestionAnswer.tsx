/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import {
  Fieldset,
  LabelText,
  Textarea,
  TextareaLabel,
  VisuallyHiddenInput,
} from "~/components/lib";
import Keywords from "../../components/Keywords";
import type { FieldsetType } from "../types";

export default function QuestionAnswer({
  number,
  answer,
  setAnswer,
  setKeywords,
  keywords,
}: FieldsetType) {
  return (
    <Fragment>
      <fieldset css={{ padding: "0 25%" }}>
        <VisuallyHiddenInput
          name={`type${number}`}
          value={"Question"}
          readOnly
        />
        <input
          type="text"
          name={`question${number}`}
          placeholder="Set question"
          css={{
            border: "none",
            marginBottom: 10,
            width: "100%",
          }}
          required
        />

        <Textarea
          name={`answer${number}`}
          placeholder="Type answer"
          value={answer}
          onChange={(evt) => setAnswer(evt.target.value)}
          required
        />
      </fieldset>
      <TextareaLabel htmlFor={`keywords${number}`}>
        <LabelText>Choose keywords</LabelText>
        <Keywords answer={answer} onSet={setKeywords} />

        <VisuallyHiddenInput
          id={`keywords${number}`}
          name={`keywords${number}`}
          placeholder="Type keywords"
          value={keywords}
          readOnly
        />
      </TextareaLabel>
    </Fragment>
  );
}
