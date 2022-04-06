/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { RepeatBody, RepeatBodyResults } from "./lib";
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
}) => {
  return (
    <RepeatBody>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        {step === maxSteps + 1 ? (
          <RepeatBodyResults>Results Screen</RepeatBodyResults>
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
      </div>
    </RepeatBody>
  );
};

export default Body;
