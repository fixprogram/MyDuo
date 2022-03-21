import { ActionFunction, redirect } from "remix";
import Form from "~/modules/Form";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");

  const steps = form.getAll("step").map((item, index) => {
    const question = form.get(`question${index}`);
    const answer = form.get(`answer${index}`);
    const keywords = form.get(`keywords${index}`);
    return {
      number: index,
      question,
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
