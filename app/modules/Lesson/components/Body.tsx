import { Fragment } from "react";
import { LessonBody, LessonBodyResults } from "./lib";
import QuestionAnswer from "./QuestionAnswer";
import InsertWords from "./InsertWords";
import Variants from "./Variants";
import Pairs from "./Pairs";
import { Lesson } from "@prisma/client";

type BodyProps = {
  stepNumber: number;
  maxSteps: number;
  content: Lesson;
  setAnswer: Function;
  formDisabled: boolean;
  userAnswer: string[];
  checkAnswer: Function;
  setValue: Function;
  changeDisabled: Function;
};

const Body = ({
  stepNumber,
  maxSteps,
  content,
  setAnswer,
  formDisabled,
  userAnswer,
  checkAnswer,
  setValue,
  changeDisabled,
}: BodyProps) => {
  const { question, text, stepType, variants, isToChoose } = content;
  return (
    <LessonBody>
      {/* {stepNumber === maxSteps + 1 ? (
        <LessonBodyResults>Results Screen</LessonBodyResults>
      ) : ( */}
      <Fragment>
        {stepType === "Question" ? (
          <QuestionAnswer
            question={question as string}
            userAnswer={userAnswer}
            setAnswer={setAnswer}
            formDisabled={formDisabled}
          />
        ) : stepType === "Insert" ? (
          <InsertWords
            userAnswer={userAnswer}
            setValue={setValue}
            changeDisabled={changeDisabled}
            text={text as string}
            contentAnswer={content.answer}
            formDisabled={formDisabled}
            isToChoose={isToChoose as boolean}
            variants={variants}
          />
        ) : stepType === "Variants" ? (
          <Variants
            content={content}
            setAnswer={setAnswer}
            userAnswer={userAnswer}
          />
        ) : stepType === "Pairs" ? (
          <Pairs
            contentAnswer={userAnswer}
            variants={variants}
            checkAnswer={checkAnswer}
          />
        ) : null}
      </Fragment>
      {/* )} */}
    </LessonBody>
  );
};

export default Body;
