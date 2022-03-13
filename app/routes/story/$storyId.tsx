/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useEffect, useReducer, useRef } from "react";
import { redirect, useLoaderData, useSubmit } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { db } from "~/utils/db.server";
import {
  // PracticeBody,
  // PracticeBodyTitle,
  // PracticeBodyWelcome,
  // PracticeBodyResults,
  // PracticeBodyMessage,
  PracticeFooter,
  PracticeButton,
} from "~/modules/Story/components/lib";
import Body from "~/modules/Story/components/Body";
import { UserImage } from "~/components/lib";
import PracticeVariants from "~/modules/Story/components/PracticeVariants";
import Progress from "~/components/Progress";
import actionCreator from "~/modules/Story/actions";
import { reducer, basicState } from "~/modules/Story/reducer";

export const loader: LoaderFunction = async ({ params }) => {
  const story = await db.story.findUnique({
    where: { id: params.storyId },
  });

  if (!story) {
    throw new Error("Story not found");
  }

  const data = { story };
  return data;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const id = form.get("id");

  const { exp } = await db.story.findUnique({
    where: { id },
  });

  await db.story.update({
    where: {
      id,
    },
    data: {
      exp: exp + expData,
    },
  });

  return redirect(`/stories`);
};

export default function Story() {
  const ref = useRef();

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
  console.log("VARIANTS: ", variants);
  console.log("VARIANTS_STATE: ", variantsState);
  const {
    checkAnswer,
    showResultsPractice,
    finishPractice,
    startPractice,
    continuePractice,
    setCase,
  } = actionCreator(dispatch);
  const submit = useSubmit();
  let currentStep = step;
  const { story } = useLoaderData();
  console.log("Current step: ", currentStep);
  useEffect(() => {
    setCase(story);
  }, []);

  const finishLesson = () => {
    finishPractice();
    submit(ref.current, { replace: true });
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
          ? finishLesson()
          : continuePractice();
      }
    }
  };
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
      {currentStep === maxSteps + 1 ? (
        <form method="POST" ref={ref}>
          <input type="text" name="exp" value="16" readOnly />
          <input type="text" name="id" value={story.id} readOnly />
        </form>
      ) : (
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
      )}
      <PracticeFooter>
        <PracticeButton active={!disabled} onClick={onContinue}>
          Continue
        </PracticeButton>
      </PracticeFooter>
    </section>
  );
}
