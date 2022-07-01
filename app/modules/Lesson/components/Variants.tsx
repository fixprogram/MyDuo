import VariantsScreen from "~/modules/Constructor/Levels/components/Variants/VariantsScreen";
import { useSkill } from "..";
import { Lesson } from "./Lesson";

export default function VariantsPractice() {
  const { content, setStateRight, setStateWrong } = useSkill();
  const { question, variants, stepType } = content;

  const checkAnswer = (userAnswer: string) => {
    if (userAnswer === content.answer[0]) {
      return setStateRight();
    }
    return setStateWrong();
  };

  const handleOnKeyDown = (e: React.KeyboardEvent, setUserAnswer: Function) => {
    if (e.key === "1") {
      return setUserAnswer(variants[0].value);
    }
    if (e.key === "2") {
      return setUserAnswer(variants[1].value);
    }
    if (e.key === "3") {
      return setUserAnswer(variants[2].value);
    }
  };

  return stepType === "Variants" ? (
    <Lesson
      disabledCondition={(userAnswer: string) => userAnswer.length}
      checkAnswer={checkAnswer}
      keyDownHandle={handleOnKeyDown}
    >
      <VariantsScreen question={question} variants={variants} />
    </Lesson>
  ) : null;
}
