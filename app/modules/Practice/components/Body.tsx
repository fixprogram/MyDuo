/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useRef, Fragment } from "react";
import { jsx } from "@emotion/react";
import {
  PracticeBody,
  PracticeBodyTitle,
  PracticeBodyWelcome,
  PracticeBodyResults,
  PracticeBodyMessage,
} from "./lib";
import { UserImage } from "../../../components/lib";
import PracticeVariants from "./PracticeVariants";

const Body = ({
  title,
  step,
  maxSteps,
  variants,
  content,
  check,
  variantsState,
  taskStory,
  taskTitle,
}) => {
  return (
    <PracticeBody>
      <PracticeBodyTitle>{title}</PracticeBodyTitle>

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
          <PracticeBodyWelcome>{taskStory}</PracticeBodyWelcome>
        ) : step === maxSteps + 1 ? (
          <PracticeBodyResults>Results Screen</PracticeBodyResults>
        ) : (
          <Fragment>
            {content.map((item, idx) => (
              <div
                key={idx}
                css={{
                  marginTop: `${idx === 0 ? "auto" : null}`,
                  marginBottom: 26,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: `${
                    item.author === "node" ? "row" : "row-reverse"
                  }`,
                }}
              >
                {item.text}
              </div>
            ))}
            {variants ? (
              <PracticeVariants
                variants={variants}
                onCheck={check}
                variantsState={variantsState}
              />
            ) : null}
          </Fragment>
        )}
      </div>
    </PracticeBody>
  );
};

export default Body;
