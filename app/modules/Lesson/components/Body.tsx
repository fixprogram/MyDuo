import { Fragment } from "react";
import { LessonBody, LessonBodyResults } from "./lib";
import QuestionAnswer from "./QuestionAnswer";
import InsertWords from "./InsertWords";
import Variants from "./Variants";
import Pairs from "./Pairs";
import { LessonStep } from "@prisma/client";

const Body = ({
  stepNumber,
  maxSteps,
  content,
  setAnswer,
  formDisabled,
  answer,
  checkAnswer,
}: {
  stepNumber: number;
  maxSteps: number;
  content: LessonStep;
  setAnswer: Function;
  formDisabled: boolean;
  answer: string[];
  checkAnswer: Function;
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
              text={text as string}
              contentAnswer={content.answer}
              setAnswer={setAnswer}
              formDisabled={formDisabled}
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
