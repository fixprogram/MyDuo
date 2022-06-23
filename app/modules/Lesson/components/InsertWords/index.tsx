import { areArraysEqual, doesArrayContainItems } from "~/utils";
import { useSkill } from "../..";
import { Lesson } from "../Lesson";
import InsertWordsScreen from "./InsertWordsScreen";

export type InsertWordsType = {
  userAnswer: string[];
  setUserAnswer: Function;
};

export default function InsertWords() {
  const { content, setStateRight, setStateWrong } = useSkill();
  const initialUserAnswer = [""];

  const checkAnswer = (userAnswer: string[]) => {
    const { formatted } = doesArrayContainItems(content.answer, userAnswer);
    if (areArraysEqual(content.answer, formatted)) {
      return setStateRight();
    }
    return setStateWrong();
  };

  return content.stepType === "Insert" ? (
    <Lesson
      disabledCondition={(userAnswer: string[]) => {
        if (
          userAnswer.find((uA) => {
            if (uA === " " || uA === "") {
              return uA;
            }
          })
        ) {
          return false;
        }
        return userAnswer.length === content.answer.length;
      }}
      initialValue={initialUserAnswer}
      checkAnswer={checkAnswer}
    >
      <InsertWordsScreen />
    </Lesson>
  ) : null;
}
