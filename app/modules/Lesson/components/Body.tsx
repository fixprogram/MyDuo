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
  setValue,
  formDisabled,
  value,
  checkAnswer,
}: {
  step: number;
  maxSteps: number;
  content: any;
  setValue: Function;
  formDisabled: boolean;
  value: any;
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
              content={content}
              value={value}
              setValue={setValue}
              formDisabled={formDisabled}
            />
          ) : content.type === "Insert" ? (
            <InsertWords
              content={content}
              setValue={setValue}
              formDisabled={formDisabled}
            />
          ) : content.type === "Variants" ? (
            <Variants content={content} setValue={setValue} />
          ) : content.type === "Pairs" ? (
            <Pairs content={content} checkAnswer={checkAnswer} />
          ) : null}
        </Fragment>
      )}
    </LessonBody>
  );
};

export default Body;
