import { Variant } from "@prisma/client";
import { Fragment, useEffect, useState } from "react";
import { InsertWordsTextBlock } from "~/modules/Constructor/Levels/components/lib";
import { areArraysEqual } from "~/utils";
import { LessonTitle } from "../lib";
import Puzzle from "./Puzzle";
import Variants from "./Variants";
import Text from "./Text";

export type InsertWordsType = {
  userAnswer: string[];
  setValue: Function;
  // changeDisabled: Function;
  text: string;
  contentAnswer: string[];
  formDisabled: boolean;
  isToChoose: boolean;
  variants: Variant[];
};

export default function InsertWords({
  userAnswer,
  setValue,
  // changeDisabled,
  text,
  contentAnswer,
  formDisabled,
  isToChoose,
  variants,
}: InsertWordsType) {
  const [values, setValues] = useState([
    ...new Array(contentAnswer.length).fill(" "),
  ]);

  useEffect(() => {
    if (areArraysEqual(userAnswer, values) && !isToChoose) {
      return;
    }
    if (values.length !== contentAnswer.length) {
      return;
    }
    const isFieldEmpty = values.filter((val) => {
      if (val === "" || val === " ") {
        return true;
      }
    });
    // changeDisabled(!!isFieldEmpty.length);
    setValue(values);
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
          contentAnswer={contentAnswer}
          text={text}
          isToChoose={isToChoose}
          formDisabled={formDisabled}
        />

        {variants && (
          <Variants values={values} variants={variants} setValues={setValues} />
        )}

        {isToChoose && (
          <Puzzle
            values={values}
            setValues={setValues}
            contentAnswer={contentAnswer}
          />
        )}
      </InsertWordsTextBlock>
    </Fragment>
  );
}
