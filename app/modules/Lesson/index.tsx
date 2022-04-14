import { useReducer, useEffect, useRef, useState, Fragment } from "react";
import {
  LessonButton,
  LessonFooter,
  LessonFooterMessage,
  LessonFooterText,
  LessonFooterTitle,
  LessonFooterIcon,
  LessonFooterInner,
} from "./components/lib";

import Progress from "~/components/Progress";
import Body from "./components/Body";
import { reducer, basicState } from "./reducer";
import actionCreator from "./actions";
import { useSubmit } from "@remix-run/react";
import Results from "./components/Results";

export default function Lesson({ data }: { data: any }) {
  const ref = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLFormElement>(null);
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
  const [value, setValue] = useState<any>();
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
    setCase(data); // Ones the data is loaded, we set the it in reducer
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sectionRef.current?.focus(); // always have focus in order to make Enter key events work
  }, [formDisabled]);

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
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
      onKeyDown={(e) => {
        if (
          (e.key === "Enter" && value?.length) ||
          currentStep === maxSteps + 1
        ) {
          if (stateRight || stateWrong || currentStep === maxSteps + 1) {
            onContinue();
          } else {
            checkAnswer(value);
          }
        }
      }}
      tabIndex={0}
      ref={sectionRef}
    >
      {currentStep === maxSteps + 1 ? (
        <Results refName={ref} id={data.id} />
      ) : (
        <Fragment>
          <Progress progress={progress} />
          <Body
            step={step}
            maxSteps={maxSteps}
            content={content}
            value={value}
            setValue={(val: any) => {
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
        </Fragment>
      )}
      <LessonFooter stateRight={stateRight} stateWrong={stateWrong}>
        <LessonFooterInner>
          <LessonFooterMessage stateRight={stateRight} stateWrong={stateWrong}>
            {stateRight || stateWrong ? (
              <LessonFooterIcon
                stateRight={stateRight}
                stateWrong={stateWrong}
              />
            ) : null}
            <div style={{ marginLeft: 16, width: "calc(100% - 209px)" }}>
              <LessonFooterTitle>
                {stateWrong ? "Right answer: " : "Great!"}
              </LessonFooterTitle>
              {stateWrong ? (
                <LessonFooterText> {content.answer}</LessonFooterText>
              ) : null}
            </div>
          </LessonFooterMessage>
          <LessonButton
            active={!disabled}
            stateRight={stateRight}
            stateWrong={stateWrong}
            onClick={onContinue}
          >
            {stateRight
              ? "Next"
              : stateWrong || currentStep === maxSteps + 1
              ? "Continue"
              : "Check"}
          </LessonButton>
        </LessonFooterInner>
      </LessonFooter>
    </section>
  );
}
