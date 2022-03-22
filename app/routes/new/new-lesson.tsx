import { ActionFunction, redirect } from "remix";
import Form from "~/modules/Form";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title"); // Getting the lesson title
  const description = form.get("description"); // Getting the lesson description

  const steps = form.getAll("step").map((item, index) => {
    const type = form.get(`type${index}`); // Getting type of the step
    const question = form.get(`question${index}`); // Getting question if it's Question type
    const text = form.get(`text${index}`); // Getting text if it's Insert type
    const answer = form.get(`answer${index}`); // Getting answer
    const keywords = form.get(`keywords${index}`); // Getting keywords if it's Question type
    return {
      type,
      number: index,
      question,
      text,
      answer: answer.indexOf(",") ? answer.split(",") : answer,
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
