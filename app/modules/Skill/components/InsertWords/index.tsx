import {
  areArraysEqual,
  doesArrayContainItems,
  doesItemContainSign,
} from "~/utils";
import { useSkill } from "../..";
import { Lesson } from "../Lesson";
import InsertWordsScreen from "./InsertWordsScreen";

export type InsertWordsType = {
  userAnswer: string[];
  setUserAnswer: Function;
};

export default function InsertWords() {
  const { content, setStateRight, setStateWrong } = useSkill();
  const { answer, stepType, text, difficulty, isToChoose } = content;

  if (!text) {
    return null;
  }

  const initialUserAnswer = [""];

  const checkAnswer = (userAnswer: string[]) => {
    const arrayOfAnswers = text.split(" ").filter((item, index) => {
      if (answer[0].split(",").find((it) => Number(it) === index)) {
        return item;
      }
    });
    const formattedArrayOfAnswers = arrayOfAnswers.map(
      (answerItem) => doesItemContainSign(answerItem).newItem
    );
    const { formatted } = doesArrayContainItems(
      formattedArrayOfAnswers as string[],
      userAnswer
    );

    if (difficulty === "easy" && isToChoose) {
      if (areArraysEqual(formattedArrayOfAnswers as string[], userAnswer)) {
        return setStateRight();
      }
      return setStateWrong();
    }

    if (areArraysEqual(formattedArrayOfAnswers as string[], formatted)) {
      return setStateRight();
    }
    return setStateWrong();
  };

  return stepType === "Insert" ? (
    <Lesson
      disabledCondition={(userAnswer: string[]) => {
        const isEachFieldContented = userAnswer.filter((uA) => {
          if (uA !== " " && uA.length > 0) {
            return true;
          }
        });
        return isEachFieldContented.length === answer.length;
      }}
      initialValue={initialUserAnswer}
      checkAnswer={checkAnswer}
    >
      <InsertWordsScreen
        userAnswer={[""]}
        setUserAnswer={() => {}}
        keyDownCheck={() => {}}
      />
    </Lesson>
  ) : null;
}
