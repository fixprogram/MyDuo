import { useReducer, useEffect, useRef, useState, Fragment } from "react";

import Progress from "~/components/Progress";
import Body from "./components/Body";
import { reducer, basicState } from "./reducer";
import actionCreator from "./actions";
import { useSubmit, useTransition } from "@remix-run/react";
import Results from "./components/Results";
import { LessonStep } from "@prisma/client";
import Footer from "./components/Footer";
import { LessonContainer } from "./components/lib";

export default function Lesson({
  data = { steps: [] },
}: {
  data: { steps: LessonStep[] };
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
  const transition = useTransition();
  const submitting = transition.state !== "idle";
  let currentStep = stepNumber;

  useEffect(() => {
    setCase(data.steps); // Ones the data is loaded, we set the it in reducer
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (stateRight || stateWrong) {
      return sectionRef.current?.focus();
    }
    if (content.stepType === "Question") {
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
    <LessonContainer
      onKeyDown={(e) => {
        if (content.stepType === "Variants") {
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
        if (e.key !== "Enter") {
          return;
        }
        if (value[0] !== "" && !stateRight && !stateWrong) {
          return checkAnswer(value);
        }
        if (currentStep === maxSteps + 1) {
          if (submitting) {
            return;
          }
          onContinue();
        }
        // Go futher if the answer was checked already
        if (stateRight || stateWrong) {
          e.preventDefault(); // prevent next line in textarea
          onContinue();
          setValue([""]);
        }
      }}
      tabIndex={0}
      ref={sectionRef}
    >
      {currentStep === maxSteps + 1 ? (
        <Results refName={ref} />
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
      <Footer
        stateRight={stateRight}
        stateWrong={stateWrong}
        isResult={currentStep === maxSteps + 1}
        setValue={setValue}
        answer={content.answer}
        onContinue={onContinue}
        disabled={disabled}
      />
    </LessonContainer>
  );
}
