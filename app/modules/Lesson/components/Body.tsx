import { Fragment } from "react";
import { LessonBody, LessonBodyResults } from "./lib";
import QuestionAnswer from "./QuestionAnswer";
import InsertWords from "./InsertWords";
import Variants from "./Variants";
import Pairs from "./Pairs";
import { Lesson } from "@prisma/client";
import { shuffleArray } from "~/utils";

const Body = ({
  stepNumber,
  maxSteps,
  content,
  setAnswer,
  formDisabled,
  answer,
  checkAnswer,
  setValue,
  changeDisabled,
}: {
  stepNumber: number;
  maxSteps: number;
  content: Lesson;
  setAnswer: Function;
  formDisabled: boolean;
  answer: string[];
  checkAnswer: Function;
  setValue: Function;
  changeDisabled: Function;
}) => {
  const { question, text, stepType, variants } = content;
  return (
    <LessonBody>
      {stepNumber === maxSteps + 1 ? (
        <LessonBodyResults>Results Screen</LessonBodyResults>
      ) : (
        <Fragment>
          {stepType === "Question" ? (
            <QuestionAnswer
              question={question as string}
              answer={answer}
              setAnswer={setAnswer}
              formDisabled={formDisabled}
            />
          ) : stepType === "Insert" ? (
            <InsertWords
              answer={answer}
              setValue={setValue}
              changeDisabled={changeDisabled}
              text={text as string}
              contentAnswer={content.answer}
              formDisabled={formDisabled}
              isToChoose={content.isToChoose as boolean}
              variants={content.variants}
            />
          ) : stepType === "Variants" ? (
            <Variants content={content} setAnswer={setAnswer} answer={answer} />
          ) : stepType === "Pairs" ? (
            <Pairs
              contentAnswer={content.answer}
              variants={variants}
              checkAnswer={checkAnswer}
            />
          ) : null}
        </Fragment>
      )}
    </LessonBody>
  );
};

export default Body;
