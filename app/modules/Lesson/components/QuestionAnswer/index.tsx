import { Fragment, useEffect, useRef } from "react";
import { Textarea } from "~/components/lib";
import {
  LessonQuestion,
  LessonQuestionTriangle,
  LessonQuestionTriangleContainer,
  LessonTitle,
} from "../lib";
import Duo from "~/styles/duo.svg";

export default function QuestionAnswerPractice({
  userAnswer,
  question,
  setAnswer,
  formDisabled,
}: {
  userAnswer: string[];
  question: string;
  setAnswer: Function;
  formDisabled: boolean;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [formDisabled]);

  return (
    <Fragment>
      <LessonTitle>Answer the question</LessonTitle>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Duo} alt="Duo" height={150} style={{ marginBottom: -60 }} />
        <div style={{ position: "relative" }}>
          <LessonQuestion>{question}</LessonQuestion>
          <LessonQuestionTriangleContainer>
            <LessonQuestionTriangle />
          </LessonQuestionTriangleContainer>
        </div>
      </div>
      <Textarea
        id={`answer`}
        name="answer"
        placeholder="Enter user answer"
        value={userAnswer}
        onChange={(e) => setAnswer([e.target.value])}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        disabled={formDisabled}
        ref={ref}
      />
    </Fragment>
  );
}