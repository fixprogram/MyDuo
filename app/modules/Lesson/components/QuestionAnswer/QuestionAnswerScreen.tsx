import { Fragment, useEffect, useRef } from "react";
import { Textarea } from "~/components/lib";
import {
  LessonTitle,
  LessonQuestion,
  LessonQuestionTriangleContainer,
  LessonQuestionTriangle,
} from "../lib";
import Duo from "~/styles/duo.svg";
import { useSkill } from "../..";

type QuestionAnswerScreenType = {
  question: string;
  userAnswer: string;
  setUserAnswer: Function;
};

export default function QuestionAnswerScreen({
  question,
  userAnswer,
  setUserAnswer,
}: QuestionAnswerScreenType) {
  const { topicState } = useSkill();

  const myRef = useRef(null);

  useEffect(() => {
    if (topicState.status === "idle") {
      const timeout = setTimeout(() => {
        myRef.current?.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [topicState.status]);

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
        id="answer"
        name="answer"
        placeholder="Enter your answer"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        disabled={topicState.formDisabled}
        ref={myRef}
      />
    </Fragment>
  );
}
