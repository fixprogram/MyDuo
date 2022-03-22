import { TextareaLabel, Textarea } from "~/components/lib";

export default function QuestionAnswerPractice({
  value,
  setValue,
  formDisabled,
}) {
  return (
    <TextareaLabel>
      <Textarea
        id={`answer`}
        name="answer"
        placeholder="Enter answer"
        value={value}
        onChange={(e) => setValue(e.target.value.trim())}
        disabled={formDisabled}
      />
    </TextareaLabel>
  );
}
