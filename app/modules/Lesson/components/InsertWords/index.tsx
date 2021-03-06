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
  const initialUserAnswer = [""];

  const checkAnswer = (userAnswer: string[]) => {
    const answer = content.text?.split(" ").filter((item, index) => {
      if (content.answer[0].split(",").find((it) => Number(it) === index)) {
        return item;
      }
    });
    const formattedAnswer = answer?.map(
      (answerItem) => doesItemContainSign(answerItem).newItem
    );
    const { formatted } = doesArrayContainItems(
      formattedAnswer as string[],
      userAnswer
    );

    if (content.difficulty === "easy" && content.isToChoose) {
      if (areArraysEqual(formattedAnswer as string[], userAnswer)) {
        return setStateRight();
      }
      return setStateWrong();
    }

    if (areArraysEqual(formattedAnswer as string[], formatted)) {
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
        return isEachFieldContented.length === content.answer.length;
      }}
      initialValue={initialUserAnswer}
      checkAnswer={checkAnswer}
    >
      <InsertWordsScreen />
    </Lesson>
  ) : null;
}
