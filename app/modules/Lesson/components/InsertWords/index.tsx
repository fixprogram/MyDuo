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
    const answer = content.text?.split(" ").filter((item, index) => {
      if (content.answer[0].split(",").find((it) => Number(it) === index)) {
        return item;
      }
    });
    // const { formatted } = doesArrayContainItems(content.answer, userAnswer);
    const { formatted } = doesArrayContainItems(answer as string[], userAnswer);
    // if (areArraysEqual(content.answer, formatted)) {
    if (areArraysEqual(answer as string[], formatted)) {
      return setStateRight();
    }
    return setStateWrong();
  };

  return content.stepType === "Insert" ? (
    <Lesson
      disabledCondition={(userAnswer: string[]) => {
        const isEachFieldContented = userAnswer.filter((uA) => {
          if (uA !== " " && uA.length > 0) {
            return true;
          }
        });
        return (
          isEachFieldContented.length === content.answer[0].split(",").length
        );
      }}
      initialValue={initialUserAnswer}
      checkAnswer={checkAnswer}
    >
      <InsertWordsScreen />
    </Lesson>
  ) : null;
}
