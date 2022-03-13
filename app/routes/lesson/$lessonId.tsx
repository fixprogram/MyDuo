/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useReducer, useRef, useState } from "react";
import { redirect, useLoaderData, useSubmit } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { db } from "~/utils/db.server";
import {
  PracticeFooter,
  PracticeButton,
} from "~/modules/Practice/components/lib";
import Progress from "~/components/Progress";
import actionCreator from "~/modules/Practice/actions";
import { reducer, basicState } from "~/modules/Practice/reducer";
import Body from "~/modules/Practice/components/Body";

export const loader: LoaderFunction = async ({ params }) => {
  const lesson = await db.lesson.findUnique({
    where: { id: params.lessonId },
  });

  if (!lesson) {
    throw new Error("Lesson not found");
  }

  const data = { lesson };
  return data;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
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

  const [{ disabled, progress, content, step, maxSteps }, dispatch] =
    useReducer(reducer, basicState);
  const [value, setValue] = useState("");
  const {
    checkAnswer,
    showResultsPractice,
    finishPractice,
    startPractice,
    continuePractice,
    changeDisabled,
    setCase,
  } = actionCreator(dispatch);
  const submit = useSubmit();
  let currentStep = step;
  const { lesson } = useLoaderData();
  useEffect(() => {
    setCase(lesson);
  }, []);

  const finishLesson = () => {
    finishPractice();
    submit(ref.current, { replace: true });
  };

  const onContinue = () => {
    if (!disabled) {
      if (currentStep > 0 && currentStep < maxSteps) {
        checkAnswer(value);
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
    <section>
      <Progress progress={progress} />
      {currentStep === maxSteps + 1 ? (
        <form method="POST" ref={ref}>
          <input type="text" name="exp" value="16" readOnly />
          <input type="text" name="id" value={lesson.id} readOnly />
        </form>
      ) : (
        <Body
          step={step}
          maxSteps={maxSteps}
          content={content}
          setValue={(val: string) => {
            setValue(val.trim());
            if (val.length) {
              changeDisabled(false);
            } else {
              changeDisabled(true);
            }
          }}
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
