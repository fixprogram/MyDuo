/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { Fieldset, Textarea } from "~/components/lib";
import type { FieldsetType } from "../types";

export default function QuestionAnswer({
  number,
  answer,
  setAnswer,
}: FieldsetType) {
  return (
    <fieldset css={{ padding: "0 25%" }}>
      <input
        type="text"
        name="question"
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
  );
}
