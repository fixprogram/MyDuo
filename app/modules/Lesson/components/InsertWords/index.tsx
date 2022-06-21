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
  // console.log(content);
  // const { text, isToChoose, variants, answer } = content;
  // const [values, setValues] = useState([...new Array(answer.length).fill(" ")]);

  const initialUserAnswer = [""];
  const [userAnswer, setUserAnswer] = useState(initialUserAnswer);

  // const lessonRef = useRef(null);

  // useEffect(() => {
  //   lessonRef?.current?.focus();
  // }, [topicState.buttonDisabled]);

  // useEffect(() => {
  //   if (areArraysEqual(userAnswer, values) && !isToChoose) {
  //     return;
  //   }
  //   if (values.length !== answer.length) {
  //     return;
  //   }

  //   setUserAnswer(values);
  // }, [values]);

  // useEffect(() => {
  //   const isFieldEmpty = values.filter((val) => {
  //     if (val === "" || val === " ") {
  //       return true;
  //     }
  //   });
  //   setCheckDisabled(!!isFieldEmpty.length);
  // }, [values]);

  // useEffect(() => {
  //   if (isToChoose) {
  //     return;
  //   }
  //   if (userAnswer[0].length) {
  //     setValues([...userAnswer]);
  //   }
  // }, [userAnswer]);

  const checkAnswer = () => {
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
      initialValue={initialUserAnswer}
      userAnswer={userAnswer}
      setUserAnswer={setUserAnswer}
      checkAnswer={checkAnswer}
    >
      <InsertWordsScreen />
    </Lesson>
  ) : null;
}
