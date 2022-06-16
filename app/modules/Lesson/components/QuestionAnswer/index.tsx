import { Fragment, useEffect, useRef, useState } from "react";
import { Textarea } from "~/components/lib";
import {
  LessonQuestion,
  LessonQuestionTriangle,
  LessonQuestionTriangleContainer,
  LessonTitle,
} from "../lib";
import Duo from "~/styles/duo.svg";
import Footer from "../Footer";

type QuestionAnswerPracticeProps = {
  question: string;
  formDisabled: boolean;
  checkAnswer: (arg0: string) => void;
  setCheckDisabled: (arg0: boolean) => void;
};

export default function QuestionAnswerPractice({
  question,
  formDisabled,
  checkAnswer,
  setCheckDisabled,
}: QuestionAnswerPracticeProps) {
  const [answer, setAnswer] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
    if (!formDisabled) {
      setAnswer("");
    }
  }, [formDisabled]);

  useEffect(() => {
    if (answer.length > 0) {
      return setCheckDisabled(false);
    }
    return setCheckDisabled(true);
  }, [answer]);

  const onKeyDownHandle = (e) => {
    if (e.key !== "Enter" || answer.length === 0) {
      return;
    }

    e.preventDefault();
    checkAnswer(answer);
  };

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
        placeholder="Enter user answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={(e) => {
          onKeyDownHandle(e);
        }}
        disabled={formDisabled}
        ref={ref}
      />
    </Fragment>
  );
}
