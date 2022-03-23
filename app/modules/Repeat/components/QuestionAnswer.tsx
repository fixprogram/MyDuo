import { TextareaLabel, Textarea } from "~/components/lib";

export default function QuestionAnswerPractice({
  value,
  content,
  setValue,
  formDisabled,
}) {
  return (
    <TextareaLabel>
      <h2>Answer the question</h2>
      <h2>{content.question}</h2>
      <Textarea
        id={`answer`}
        name="answer"
        placeholder="Enter answer"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={formDisabled}
      />
    </TextareaLabel>
  );
}
