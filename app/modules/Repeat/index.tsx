/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useReducer, useEffect, useRef, useState } from "react";
import {
  RepeatButton,
  RepeatFooter,
  RepeatFooterMessage,
  RepeatFooterText,
  RepeatFooterTitle,
  RepeatFooterIcon,
} from "./components/lib";

import Progress from "~/components/Progress";
import Body from "./components/Body";
import { reducer, basicState } from "./reducer";
import actionCreator from "./actions";
import { useSubmit } from "remix";
import RightSvg from "~/styles/right.svg";
import WrongSvg from "~/styles/wrong.svg";

export default function Repeat({ data }) {
  const ref = useRef();
  const [
    {
      disabled,
      progress,
      content,
      step,
      maxSteps,
      stateRight,
      stateWrong,
      formDisabled,
      nextStep,
    },
    dispatch,
  ] = useReducer(reducer, basicState);
  const [value, setValue] = useState();
  const {
    checkAnswer,
    showResultsPractice,
    continuePractice,
    changeDisabled,
    setCase,
  } = actionCreator(dispatch);
  const submit = useSubmit();
  let currentStep = step;

  useEffect(() => {
    setCase(data);
  }, []);

  const onContinue = () => {
    if (!disabled) {
      if (currentStep > -1 && currentStep <= maxSteps) {
        if (!nextStep) {
          checkAnswer(value);
        } else {
          continuePractice();
          setValue("");
        }
      } else {
        currentStep === maxSteps
          ? showResultsPractice()
          : currentStep === maxSteps + 1
          ? submit(ref.current, { replace: true })
          : continuePractice();
      }
    }
  };

  return (
    <section
      css={{ position: "relative", overflowY: "scroll", minHeight: "100vh" }}
    >
      <Progress progress={progress} />
      {currentStep === maxSteps + 1 ? (
        <form method="POST" ref={ref}>
          <input type="text" name="exp" value="16" readOnly />
          <input type="text" name="id" value={data.id} readOnly />
        </form>
      ) : (
        <Body
          step={step}
          maxSteps={maxSteps}
          content={content}
          value={value}
          setValue={(val: string[]) => {
            setValue(val);
            if (val.length) {
              changeDisabled(false);
            } else {
              changeDisabled(true);
            }
          }}
          formDisabled={formDisabled}
          checkAnswer={checkAnswer}
        />
      )}
      <RepeatFooter stateRight={stateRight} stateWrong={stateWrong}>
        <div
          css={{
            maxWidth: 1000,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <RepeatFooterMessage stateRight={stateRight} stateWrong={stateWrong}>
            {stateRight || stateWrong ? (
              <RepeatFooterIcon>
                <span
                  css={{
                    background: `url(${stateRight ? RightSvg : WrongSvg})`,
                    backgroundPosition: `${
                      stateRight ? "-166px -90px" : "-208px -90px"
                    }`,
                    width: stateRight ? 41 : 31,
                    height: 31,
                    display: "block",
                    margin: stateWrong ? "26px 0 0 25px" : "27px 0 0 20px",
                  }}
                ></span>
              </RepeatFooterIcon>
            ) : null}
            <div css={{ marginLeft: 16 }}>
              <RepeatFooterTitle>
                {stateWrong ? "Right answer: " : "Great!"}
              </RepeatFooterTitle>
              {stateWrong ? (
                <RepeatFooterText> {content.answer}</RepeatFooterText>
              ) : null}
            </div>
          </RepeatFooterMessage>
          <RepeatButton
            active={!disabled}
            stateRight={stateRight}
            stateWrong={stateWrong}
            onClick={onContinue}
          >
            {stateRight ? "Next" : stateWrong ? "Continue" : "Check"}
          </RepeatButton>
        </div>
      </RepeatFooter>
    </section>
  );
}
