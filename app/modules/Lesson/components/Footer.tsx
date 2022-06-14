import { useTransition } from "@remix-run/react";
import { Fragment } from "react";
import {
  LessonFooter,
  LessonFooterInner,
  LessonFooterMessage,
  LessonFooterIcon,
  LessonFooterTitle,
  LessonFooterText,
  LessonButton,
} from "./lib";

type FooterProps = {
  stateRight: boolean;
  stateWrong: boolean;
  isResult: boolean;
  answer: string[];
  // disabled: boolean;
  onContinue: Function;
  setValue: Function;
  status: string;
  buttonDisabled: boolean;
};

export default function Footer({
  // stateRight,
  // stateWrong,
  // isResult,
  answer,
  // disabled,
  onContinue,
  setValue,
  status,
  buttonDisabled,
}: FooterProps) {
  const transition = useTransition();

  // const buttonText =
  //   transition.state === "submitting"
  //     ? "Saving..."
  //     : transition.state === "loading"
  //     ? "Saved!"
  //     : stateRight
  //     ? "Next"
  //     : stateWrong || isResult
  //     ? "Continue"
  //     : "Check";
  const buttonText =
    transition.state === "submitting"
      ? "Saving..."
      : transition.state === "loading"
      ? "Saved!"
      : status === "right"
      ? "Next"
      : // : stateWrong || isResult
      status !== "idle"
      ? "Continue"
      : "Check";

  const handleContinue = (evt) => {
    if (buttonText === "Saving..." || buttonText === "Saved!") {
      evt.preventDefault();
    }
    // if (!disabled) {
    // if (status === "idle") {
    //   onContinue();
    // }
    // if (stateRight || stateWrong) {
    // if (status === "wrong" || status === "right") {
    //   // setValue([""]);
    //   onContinue();
    // }
    onContinue();
  };

  const handleSkip = () => {
    onContinue();
  };

  return (
    // <LessonFooter stateRight={stateRight} stateWrong={stateWrong}>
    <LessonFooter status={status}>
      <LessonFooterInner>
        <LessonButton
          style={
            {
              // display: stateRight || stateWrong ? "none" : "block",
            }
          }
          onClick={handleSkip}
          skip={true}
          hidden={status !== "idle"}
        >
          Skip
        </LessonButton>
        <LessonButton
          skip={true}
          hidden={status !== "idle"}
          style={{
            // display: stateRight || stateWrong ? "none" : "block",
            borderWidth: 0,
            width: "auto",
          }}
        >
          Use word bank
        </LessonButton>

        {/* <LessonFooterMessage stateRight={stateRight} stateWrong={stateWrong}> */}
        <LessonFooterMessage status={status}>
          {/* {(stateRight || stateWrong) && ( */}
          {(status === "right" || status === "wrong") && (
            // <LessonFooterIcon stateRight={stateRight} stateWrong={stateWrong} />
            <LessonFooterIcon status={status} />
          )}
          <div style={{ marginLeft: 16, width: "calc(100% - 209px)" }}>
            <LessonFooterTitle>
              {/* {stateWrong ? "Right answer: " : "Great!"} */}
              {status === "wrong" ? "Right answer: " : "Great!"}
            </LessonFooterTitle>
            <LessonFooterText> {answer.join(" ")}</LessonFooterText>
          </div>
        </LessonFooterMessage>

        <LessonButton
          // active={!disabled}
          active={!buttonDisabled}
          stateRight={status === "right"}
          // stateRight={stateRight}
          // stateWrong={stateWrong}
          stateWrong={status === "wrong"}
          onClick={(evt) => {
            if (buttonDisabled) {
              return;
            }
            handleContinue(evt);
          }}
          disabled={buttonText === "Saving..." || buttonText === "Saved!"}
          style={{ marginLeft: status === "results" ? "auto" : 0 }}
        >
          {buttonText}
        </LessonButton>
      </LessonFooterInner>
    </LessonFooter>
  );
}
