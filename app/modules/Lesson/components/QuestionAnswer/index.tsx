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
  const { content, topicState, setCheckDisabled } = useSkill();
  const { formDisabled } = topicState;
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
    if (!formDisabled) {
      setUserAnswer("");
    }
  }, [formDisabled]);

  useEffect(() => {
    if (userAnswer.length > 0) {
      return setCheckDisabled(false);
    }
    return setCheckDisabled(true);
  }, [userAnswer]);

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
        // onKeyDown={onKeyDownHandle}
        disabled={formDisabled}
        ref={ref}
      />
    </Fragment>
  );
}
