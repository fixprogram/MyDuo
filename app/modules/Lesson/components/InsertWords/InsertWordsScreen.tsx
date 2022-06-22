import { Fragment, useEffect, useState } from "react";
import { InsertWordsTextBlock } from "~/modules/Constructor/Levels/components/lib";
import { useSkill } from "../..";
import { LessonTitle } from "../lib";
import Puzzle from "./Puzzle";
import Variants from "./Variants";
import Text from "./Text";
import { areArraysEqual } from "~/utils";

export default function InsertWordsScreen({
  userAnswer,
  setUserAnswer,
  keyDownCheck,
}) {
  const { content, topicState } = useSkill();

  const { text, isToChoose, variants, answer } = content;
  const [values, setValues] = useState([...new Array(answer.length).fill(" ")]);

  useEffect(() => {
    if (areArraysEqual(userAnswer, values) && !isToChoose) {
      return;
    }
    if (values.length !== answer.length) {
      return;
    }

    setUserAnswer(values);
  }, [values]);

  useEffect(() => {
    if (isToChoose) {
      return;
    }
    if (userAnswer[0].length) {
      setValues([...userAnswer]);
    }
  }, [userAnswer]);

  return (
    <Fragment>
      <LessonTitle>Add missing words</LessonTitle>

      <InsertWordsTextBlock>
        <Text
          values={values}
          setValues={setValues}
          contentAnswer={answer}
          text={text}
          isToChoose={isToChoose}
          variants={variants}
          topicState={topicState}
        />

        {variants && (
          <Variants
            values={values}
            variants={variants}
            setValues={setValues}
            topicState={topicState}
            keyDownCheck={keyDownCheck}
          />
        )}

        {isToChoose && (
          <Puzzle
            values={values}
            setValues={setValues}
            contentAnswer={answer}
          />
        )}
      </InsertWordsTextBlock>
    </Fragment>
  );
}
