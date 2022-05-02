import { Fragment } from "react";
import { LessonBody, LessonBodyResults } from "./lib";
import QuestionAnswer from "./QuestionAnswer";
import InsertWords from "./InsertWords";
import Variants from "./Variants";
import Pairs from "./Pairs";

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
  content: any;
  setAnswer: Function;
  formDisabled: boolean;
  answer: any;
  checkAnswer: Function;
}) => {
  return (
    <LessonBody>
      {stepNumber === maxSteps + 1 ? (
        <LessonBodyResults>Results Screen</LessonBodyResults>
      ) : (
        <Fragment>
          {content.stepType === "Question" ? (
            <QuestionAnswer
              question={content.question}
              answer={answer}
              setAnswer={setAnswer}
              formDisabled={formDisabled}
            />
          ) : content.stepType === "Insert" ? (
            <InsertWords
              answer={answer}
              text={content.text}
              contentAnswer={content.answer}
              setAnswer={setAnswer}
              formDisabled={formDisabled}
            />
          ) : content.stepType === "Variants" ? (
            <Variants content={content} setAnswer={setAnswer} answer={answer} />
          ) : content.stepType === "Pairs" ? (
            <Pairs
              contentAnswer={content.answer}
              variants={content.variants}
              checkAnswer={checkAnswer}
            />
          ) : null}
        </Fragment>
      )}
    </LessonBody>
  );
};

export default Body;
