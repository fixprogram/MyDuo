/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { redirect } from "remix";
import type { ActionFunction } from "remix";
import { db } from "~/utils/db.server";
import { Fragment, useState } from "react";
import Menu from "~/components/Menu";
import styles from "~/styles/index.css";
import LessonForm from "~/components/LessonForm";
import StoryForm from "~/components/StoryForm";
import type { Lesson } from "~/lesson";
import { FormButton } from "~/components/lib";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const formType = form.get("formType");
  const title = form.get("title");
  const description = form.get("description");
  const innerTitle = form.get("innerTitle");

  if (!innerTitle) {
    const questions = form.getAll("question");

    const steps = questions.map((item, index) => {
      const answer = form.get(`answer${index + 1}`);
      return {
        number: index,
        question: item,
        answer,
      };
    });
    const data = { title, steps, exp: 0 };
    const lesson = await db.lesson.create({ data });
    return redirect(`/lessons`);
  } else {
    const text = form.getAll("text");

    const steps = text.map((item, index) => {
      const questionTitle = form.get(`questionTitle${index + 1}`);
      const variants = form.getAll(`variant${index + 1}`);
      const answer = Number(form.get(`answer${index + 1}`));
      if (!answer) {
        return {
          author: form.get(`radio${index + 1}`),
          text: item,
          number: index,
        };
      }
      return {
        author: form.get(`radio${index + 1}`),
        text: item,
        number: index,
        questionTitle,
        variants,
        answer,
      };
    });
    const data = { title, description, innerTitle, steps, exp: 0 };
    const story = await db.story.create({ data });
    return redirect(`/stories`);
  }
};

export default function New() {
  const [showLessonForm, setShowLessonForm] = useState(true);
  return (
    <Fragment>
      <Menu />
      <main
        css={{
          padding: "0 250px",
        }}
      >
        <FormButton onClick={() => setShowLessonForm(!showLessonForm)}>
          Change form
        </FormButton>
        {showLessonForm ? <LessonForm /> : <StoryForm />}
      </main>
    </Fragment>
  );
}
