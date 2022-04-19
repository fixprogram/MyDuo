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
import { LessonStep } from "@prisma/client";

export default function Lesson({
  data = { steps: [], id: "" },
}: {
  // data: { steps: LessonStep[]; id: string };
  data: any;
}) {
  const ref = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLFormElement>(null);
  const [
    {
      disabled,
      progress,
      content,
      stepNumber,
      maxSteps,
      stateRight,
      stateWrong,
      formDisabled,
      nextStep,
    },
    dispatch,
  ] = useReducer(reducer, basicState);
  const [value, setValue] = useState<string[]>([""]);
  const {
    checkAnswer,
    showResultsPractice,
    continuePractice,
    changeDisabled,
    setCase,
  } = actionCreator(dispatch);
  const submit = useSubmit();
  let currentStep = stepNumber;

  useEffect(() => {
    setCase(data.steps, data.id); // Ones the data is loaded, we set the it in reducer
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (stateRight || stateWrong) {
      return sectionRef.current?.focus();
    }
    if (content.type === "Question") {
      return;
    }

    return sectionRef.current?.focus(); // always have focus in order to make Enter key events work
  }, [stateRight, stateWrong]);

  const onContinue = () => {
    if (disabled) {
      return;
    }
    if (currentStep > -1 && currentStep <= maxSteps) {
      if (!nextStep && value[0] !== "") {
        checkAnswer(value);
      } else {
        continuePractice();
      }
    } else {
      currentStep === maxSteps
        ? showResultsPractice()
        : currentStep === maxSteps + 1
        ? submit(ref.current, { replace: true })
        : continuePractice();
    }
  };

  const setAnswer = (val: string[]) => {
    // Insert words will return an array of objects and it won't work with the disabling button
    if (val[0] !== "") {
      changeDisabled(false);
    } else {
      changeDisabled(true);
    }
    setValue(val);
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
        if (content.type === "Variants") {
          if (e.key === "1") {
            setAnswer([content.variants[0]]);
          }
          if (e.key === "2") {
            setAnswer([content.variants[1]]);
          }
          if (e.key === "3") {
            setAnswer([content.variants[2]]);
          }
        }
        if (disabled) {
          return;
        }
        if (e.key === "Enter") {
          // return;
          if (value[0] !== "" && !stateRight && !stateWrong) {
            checkAnswer(value);
          }
          // Go futher if the answer was checked already or it's the results page
          if (stateRight || stateWrong || currentStep === maxSteps + 1) {
            e.preventDefault(); // prevent next line in textarea
            onContinue();
            setValue([""]);
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
            stepNumber={stepNumber}
            maxSteps={maxSteps}
            content={content}
            answer={value}
            setAnswer={setAnswer}
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
                <LessonFooterText> {content.answer.join(" ")}</LessonFooterText>
              ) : null}
            </div>
          </LessonFooterMessage>
          <LessonButton
            active={!disabled}
            stateRight={stateRight}
            stateWrong={stateWrong}
            onClick={() => {
              onContinue();
              if (stateRight || stateWrong) {
                setValue([""]);
              }
            }}
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
