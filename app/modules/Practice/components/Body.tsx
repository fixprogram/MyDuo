/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { PracticeBody, PracticeBodyWelcome, PracticeBodyResults } from "./lib";
import { Textarea, TextareaLabel } from "~/components/lib";

const Body = ({ step, maxSteps, content, setValue, formDisabled, value }) => {
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
        {step === 0 ? (
          <PracticeBodyWelcome>Welcome Screen</PracticeBodyWelcome>
        ) : step === maxSteps + 1 ? (
          <PracticeBodyResults>Results Screen</PracticeBodyResults>
        ) : (
          <Fragment>
            <h2>{content.question}</h2>
            <TextareaLabel>
              <Textarea
                id={`answer`}
                name="answer"
                placeholder="Enter answer"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={formDisabled}
                css={{ minHeight: 200 }}
              />
            </TextareaLabel>
          </Fragment>
        )}
      </div>
    </PracticeBody>
  );
};

export default Body;
