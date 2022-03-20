import { ActionFunction, redirect } from "remix";
import Form from "~/modules/Form";
import LessonForm from "~/modules/LessonForm";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");

  const questions = form.getAll("question");

  const steps = questions.map((item, index) => {
    const answer = form.get(`answer${index}`);
    console.log("answer: ", answer);
    const keywords = form.get(`keywords${index}`);
    return {
      number: index,
      question: item,
      answer,
      keywords: keywords?.split(","),
    };
  });
  const data = { title, steps, exp: 0 };
  const lesson = await db.lesson.create({ data });
  return redirect(`/lessons`);
};

export default function NewLesson() {
  return <Form />;
}
