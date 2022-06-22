import { Fragment, useEffect, useRef, useState } from "react";
import { InsertWordsTextBlock } from "~/modules/Constructor/Levels/components/lib";
import { areArraysEqual, doesArrayContainItems } from "~/utils";
import { LessonTitle } from "../lib";
import Puzzle from "./Puzzle";
import Variants from "./Variants";
import Text from "./Text";
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

  // const onKeyDownHandle = (e) => {
  //   if (e.key !== "Enter" || topicState.buttonDisabled) {
  //     return;
  //   }

  //   e.preventDefault();
  //   checkAnswer();
  // };

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
      // userAnswer={userAnswer}
      // setUserAnswer={setUserAnswer}
      checkAnswer={checkAnswer}
    >
      <InsertWordsScreen />
    </Lesson>
  ) : null;
}
