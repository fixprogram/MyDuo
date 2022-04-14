import { Fragment, useEffect, useRef } from "react";
import { Textarea } from "~/components/lib";
import {
  LessonQuestion,
  LessonQuestionTriangle,
  LessonQuestionTriangleContainer,
  LessonTitle,
} from "./lib";
import Duo from "~/styles/duo.svg";

export default function QuestionAnswerPractice({
  value,
  content,
  setValue,
  formDisabled,
}: {
  value: string;
  content: any;
  setValue: Function;
  formDisabled: boolean;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref?.current?.focus();
  }, [value]);

  return (
    <Fragment>
      <LessonTitle>Answer the question</LessonTitle>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Duo} alt="Duo" height={150} style={{ marginBottom: -60 }} />
        <div style={{ position: "relative" }}>
          <LessonQuestion>{content.question}</LessonQuestion>
          <LessonQuestionTriangleContainer>
            <LessonQuestionTriangle />
          </LessonQuestionTriangleContainer>
        </div>
      </div>
      <Textarea
        id={`answer`}
        name="answer"
        placeholder="Enter answer"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={formDisabled}
        ref={ref}
      />
    </Fragment>
  );
}
