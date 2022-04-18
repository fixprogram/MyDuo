import { Fragment } from "react";
import { LessonBody, LessonBodyResults } from "./lib";
import QuestionAnswer from "./QuestionAnswer";
import InsertWords from "./InsertWords";
import Variants from "./Variants";
import Pairs from "./Pairs";

const Body = ({
  step,
  maxSteps,
  content,
  setAnswer,
  formDisabled,
  answer,
  checkAnswer,
}: {
  step: number;
  maxSteps: number;
  content: any;
  setAnswer: Function;
  formDisabled: boolean;
  answer: any;
  checkAnswer: Function;
}) => {
  return (
    <LessonBody>
      {step === maxSteps + 1 ? (
        <LessonBodyResults>Results Screen</LessonBodyResults>
      ) : (
        <Fragment>
          {content.type === "Question" ? (
            <QuestionAnswer
              // content={content}
              question={content.question}
              answer={answer}
              setAnswer={setAnswer}
              formDisabled={formDisabled}
            />
          ) : content.type === "Insert" ? (
            <InsertWords
              content={content}
              setAnswer={setAnswer}
              formDisabled={formDisabled}
            />
          ) : content.type === "Variants" ? (
            <Variants content={content} setAnswer={setAnswer} />
          ) : content.type === "Pairs" ? (
            <Pairs content={content} checkAnswer={checkAnswer} />
          ) : null}
        </Fragment>
      )}
    </LessonBody>
  );
};

export default Body;
