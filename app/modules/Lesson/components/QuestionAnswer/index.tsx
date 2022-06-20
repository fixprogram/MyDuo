import { useEffect, useState } from "react";
import { useSkill } from "../..";
import { doesArrayContainItems } from "~/utils";
import QuestionAnswerScreen from "./QuestionAnswerScreen";
import { Lesson } from "../Lesson";

export default function QuestionAnswerPractice() {
  const { content, setStateWrong, setStateRight, setCheckDisabled } =
    useSkill();
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    if (userAnswer.length > 0) {
      return setCheckDisabled(false);
    }
    return setCheckDisabled(true);
  }, [userAnswer]);

  const checkAnswer = () => {
    const { state, length } = doesArrayContainItems(
      content.answer,
      userAnswer.split(" ")
    );

    if (!state) {
      return setStateWrong();
    }

    if (
      doesArrayContainItems(content.keywords, userAnswer.split(" ")).length ===
      content.keywords.length
    ) {
      if (length < content.answer.length) {
        return setStateRight();
      }

      return setStateRight();
    }

    if (length < content.answer.length * 0.8) {
      // if user's response is less than 80% right, then return negative
      return setStateWrong();
    }
  };

  // useEffect(() => {
  //   if (!formDisabled) {
  //     setUserAnswer("");
  //   }
  // }, [formDisabled]);

  return content.stepType === "Question" ? (
    <Lesson
      checkAnswer={checkAnswer}
      userAnswer={userAnswer}
      setUserAnswer={setUserAnswer}
    >
      <QuestionAnswerScreen question={content.question} />
    </Lesson>
  ) : null;
}
