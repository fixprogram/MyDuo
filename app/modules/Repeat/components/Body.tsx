/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useEffect, useState } from "react";
import { PracticeBody, PracticeBodyResults } from "./lib";
import QuestionAnswerPractice from "./QuestionAnswerPractice";
import InsertWordsPractice from "./InsertWordsPractice";
import VariantsPractice from "./VariantsPractice";

const Body = ({
  step,
  maxSteps,
  content,
  setValue,
  formDisabled,
  value,
  text,
}) => {
  console.log(content);
  return (
    <PracticeBody>
      <div
        css={{
          paddingTop: 50,
          height: "calc(100% - 240px)",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        {step === maxSteps + 1 ? (
          <PracticeBodyResults>Results Screen</PracticeBodyResults>
        ) : (
          <Fragment>
            <h2>{content.title}</h2>
            {content.type === "Question" ? (
              <QuestionAnswerPractice
                value={value}
                setValue={setValue}
                formDisabled={formDisabled}
              />
            ) : content.type === "Insert" ? (
              <InsertWordsPractice
                content={content}
                setValue={setValue}
                formDisabled={formDisabled}
              />
            ) : content.type === "Variants" ? (
              <VariantsPractice
                content={content}
                setValue={setValue}
                formDisabled={formDisabled}
              />
            ) : null}
          </Fragment>
        )}
      </div>
    </PracticeBody>
  );
};

export default Body;
