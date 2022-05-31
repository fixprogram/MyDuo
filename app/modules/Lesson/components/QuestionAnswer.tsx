import { Fragment, useEffect, useRef } from "react";
import { Textarea } from "~/components/lib";
import {
  LessonQuestion,
  LessonQuestionTriangle,
  LessonQuestionTriangleContainer,
  LessonTitle,
} from "./lib";
import Duo from "~/styles/duo.svg";
import { doesItemContainSign } from "~/utils";

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
        placeholder="Enter answer"
        value={answer}
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
