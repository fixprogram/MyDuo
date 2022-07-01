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
  const { skillState } = useSkill();

  const myRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (skillState.status === "idle") {
      const timeout = setTimeout(() => {
        myRef.current?.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [skillState.status]);

  return (
    <Fragment>
      <LessonTitle>Answer the question</LessonTitle>
      <section>
        <div
          style={{ display: "flex", alignItems: "center", margin: "30px 0" }}
        >
          <img src={Duo} alt="Duo" height={150} style={{ marginBottom: -50 }} />
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
          disabled={skillState.formDisabled}
          ref={myRef}
        />
      </section>
    </Fragment>
  );
}
