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
} from "~/modules/Practice/components/lib";
import Body from "~/modules/Practice/components/Body";
import { UserImage } from "~/components/lib";
import PracticeVariants from "~/modules/Practice/components/PracticeVariants";
import Progress from "~/components/Progress";
import actionCreator from "~/modules/Practice/actions";
import { reducer, basicState } from "~/modules/Practice/reducer";

export const loader: LoaderFunction = async ({ params }) => {
  const lesson = await db.lesson.findUnique({
    where: { id: params.lessonId },
  });

  if (!lesson) {
    console.log(params.lessonId);
    throw new Error("Lesson not found");
  }

  const data = { lesson };
  return data;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  console.log("DFFSDFREC");
  const expData = Number(form.get("exp"));
  const id = form.get("id");

  const { exp } = await db.lesson.findUnique({
    where: { id },
  });

  await db.lesson.update({
    where: {
      id,
    },
    data: {
      exp: exp + expData,
    },
  });

  return redirect(`/lessons`);
};

export default function Lesson() {
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
  const { lesson } = useLoaderData();
  console.log("Current step: ", currentStep);
  useEffect(() => {
    setCase(lesson);
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
          <input type="text" name="id" value={lesson.id} readOnly />
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
