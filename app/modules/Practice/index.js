/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useReducer, useEffect } from "react";
import { PracticeButton, PracticeFooter } from "./components/lib";
import { useParams, useNavigate } from "react-router-dom";

import Progress from "./components/Progress";
import Body from "./components/Body";
import { reducer, basicState } from "./reducer";
import { getPractice } from "../../db/api";
import { useAsync } from "../../db/useAsync";
import actionCreator from "./actions";

const Practice = () => {
  const [
    {
      disabled,
      progress,
      content,
      step,
      maxSteps,
      title,
      variants,
      variantsState,
      taskStory,
      taskTitle,
    },
    dispatch,
  ] = useReducer(reducer, basicState);
  const {
    checkAnswer,
    showResultsPractice,
    startPractice,
    continuePractice,
    setCase,
  } = actionCreator(dispatch);
  const { run } = useAsync();
  let currentStep = step;
  const { caseId } = useParams();
  const navigate = useNavigate();

  const finishCase = () => {
    navigate("/practice", { replace: true });
  };

  const onContinue = () => {
    if (!disabled) {
      if (variants) {
        checkAnswer();
      } else {
        currentStep === 0
          ? startPractice()
          : currentStep === maxSteps
          ? showResultsPractice()
          : currentStep === maxSteps + 1
          ? finishCase()
          : continuePractice();
      }
    }
  };

  useEffect(() => {
    run(
      getPractice(caseId).then((res) => res),
      setCase
    );
  }, [caseId, getPractice, run]);

  return (
    <section
      css={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Progress progress={progress} />

      <Body
        variants={variants}
        step={currentStep}
        maxSteps={maxSteps}
        content={content}
        title={title}
        check={(chosenVariantId) =>
          dispatch({ type: "CHOOSE_ANSWER", chosenVariantId })
        }
        variantsState={variantsState}
        taskStory={taskStory}
        taskTitle={taskTitle}
      />

      <PracticeFooter>
        <PracticeButton active={!disabled} onClick={onContinue}>
          Continue
        </PracticeButton>
      </PracticeFooter>
    </section>
  );
};

export default Practice;
