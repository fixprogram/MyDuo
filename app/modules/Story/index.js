/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useReducer, useState, useEffect } from "react";
import { PracticeButton, PracticeFooter } from "./components/lib";
import { useParams, useNavigate } from "react-router-dom";

import Progress from "./components/Progress";
import Body from "./components/Body";
import { reducer, basicState } from "./reducer";
import { getStory } from "../../db/api";
import { useAsync } from "../../db/useAsync";
import actionCreator from "./actions";

const Story = () => {
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
    },
    dispatch,
  ] = useReducer(reducer, basicState);
  const {
    checkAnswer,
    showResultsPractice,
    finishPractice,
    startPractice,
    continuePractice,
    setCase,
  } = actionCreator(dispatch);
  const { data, error, isSuccess, isError, isPending, run } = useAsync();
  let currentStep = step;
  const [isFinished, setIsFinished] = useState(false);
  const { storyId } = useParams();
  const navigate = useNavigate();

  const finishCase = () => {
    finishPractice();
    setIsFinished(true);
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

  console.log(data);

  useEffect(() => {
    run(
      getStory(storyId).then((res) => res),
      setCase
    );
  }, [storyId, getStory, run]);

  // if (isFinished) return <Navigate to={"/practice"} />;
  if (isFinished) navigate("/stories", { replace: true });

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

      {isPending ? <div>Loading</div> : null}

      {isSuccess ? (
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
        />
      ) : null}

      <PracticeFooter>
        <PracticeButton active={!disabled} onClick={onContinue}>
          Continue
        </PracticeButton>
      </PracticeFooter>
    </section>
  );
};

export default Story;
