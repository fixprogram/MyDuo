import { Fragment, useEffect, useRef, useState } from "react";
import { Textarea } from "~/components/lib";
import {
  LessonQuestion,
  LessonQuestionTriangle,
  LessonQuestionTriangleContainer,
  LessonTitle,
} from "../lib";
import Duo from "~/styles/duo.svg";
import { useSkill } from "../..";

type QuestionAnswerPracticeProps = {
  question: string;
  checkAnswer: (arg0: string) => void;
};

export default function QuestionAnswerPractice({
  userAnswer,
  setUserAnswer,
}: QuestionAnswerPracticeProps) {
  const { content, topicState } = useSkill();
  const { formDisabled } = topicState;
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!formDisabled) {
      setUserAnswer("");
    }
    const timeout = setTimeout(() => {
      ref.current?.focus();
    }, 10);

    return () => clearTimeout(timeout);
  }, [formDisabled]);

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
        id="answer"
        name="answer"
        placeholder="Enter user answer"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        disabled={formDisabled}
        ref={ref}
      />
    </Fragment>
  );
}
