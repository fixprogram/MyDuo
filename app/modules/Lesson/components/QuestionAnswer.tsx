import { Fragment, useEffect, useRef, useState } from "react";
import { Textarea } from "~/components/lib";
import {
  LessonQuestion,
  LessonQuestionTriangle,
  LessonQuestionTriangleContainer,
  LessonTitle,
} from "./lib";
import Duo from "~/styles/duo.svg";

export default function QuestionAnswerPractice({
  answer,
  question,
  setAnswer,
  formDisabled,
}: {
  answer: string[];
  question: string;
  setAnswer: Function;
  formDisabled: boolean;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  });

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
        placeholder="Enter answer"
        value={answer[0]}
        onChange={(e) => setAnswer([e.target.value])}
        disabled={formDisabled}
        ref={ref}
      />
    </Fragment>
  );
}
