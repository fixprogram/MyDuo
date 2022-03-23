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
} from "./components/lib";

import Progress from "~/components/Progress";
import Body from "./components/Body";
import { reducer, basicState } from "./reducer";
import actionCreator from "./actions";
import { useSubmit } from "remix";

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
    <section>
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
        <RepeatFooterMessage stateRight={stateRight} stateWrong={stateWrong}>
          <RepeatFooterTitle>
            {stateWrong ? "Right answer: " : "Great!"}
          </RepeatFooterTitle>
          <RepeatFooterText>
            {stateWrong ? content.answer : null}
          </RepeatFooterText>
        </RepeatFooterMessage>
        <RepeatButton
          active={!disabled}
          stateRight={stateRight}
          stateWrong={stateWrong}
          onClick={onContinue}
        >
          {stateRight ? "Next" : stateWrong ? "Continue" : "Check"}
        </RepeatButton>
      </RepeatFooter>
    </section>
  );
}
