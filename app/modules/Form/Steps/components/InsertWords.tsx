import { Textarea } from "~/components/lib";
import type { FieldsetType } from "../types";

export default function InsertWords({
  number,
  answer,
  setAnswer,
}: FieldsetType) {
  return (
    <fieldset css={{ padding: "0 25%" }}>
      <Textarea
        name={`answer${number}`}
        placeholder="Type answer and chose words which should be set"
        value={answer}
        onChange={(evt) => setAnswer(evt.target.value)}
        required
      />
    </fieldset>
  );
}
