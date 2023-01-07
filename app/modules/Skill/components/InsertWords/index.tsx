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
  const { answer: correctIndexes, stepType, difficulty, options } = content;
  const { text } = options;

  const initialUserAnswer = [""];

  if (!text) {
    return null;
  }
  const checkAnswer = (userAnswer: string[]) => {
    const correctAnswer = text
      .split(" ")
      .filter(
        (item, index) => correctIndexes.filter((idx) => idx === index).length
      );

    const formattedUserAnswer = userAnswer.map(
      (answerItem) => doesItemContainSign(answerItem.trim()).newItem
    );
    const { formatted } = doesArrayContainItems(
      formattedUserAnswer,
      correctAnswer
    );

    if (difficulty === "easy") {
      if (areArraysEqual(formattedUserAnswer, correctAnswer)) {
        return setStateRight();
      }
      return setStateWrong();
    }

    if (areArraysEqual(formattedUserAnswer, correctAnswer)) {
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
        return isEachFieldContented.length === correctIndexes.length;
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
