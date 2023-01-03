import { useSkill } from "../..";
import { doesArrayContainItems } from "~/utils";
import QuestionAnswerScreen from "./QuestionAnswerScreen";
import { Lesson } from "../Lesson";

export default function QuestionAnswerPractice() {
  const { content, setStateWrong, setStateRight } = useSkill();

  const checkAnswer = (userAnswer: string) => {
    const { state, length } = doesArrayContainItems(
      content.answer,
      userAnswer.split(" ")
    );

    if (!state) {
      return setStateWrong();
    }

    if (
      doesArrayContainItems(content.keywords, userAnswer.split(" ")).length ===
        content.keywords.length &&
      content.keywords.length
    ) {
      return setStateRight();
    }

    if (length < content.answer.length * 0.8) {
      // if user's response is less than 80% right, then return negative
      return setStateWrong();
    }

    return setStateRight();
  };

  return content.stepType === "Question" ? (
    <Lesson
      checkAnswer={checkAnswer}
      disabledCondition={(userAnswer: string) => userAnswer.length > 0}
    >
      <QuestionAnswerScreen question={content.question as string} />
    </Lesson>
  ) : null;
}
