import { ActionFunction, redirect } from "remix";
import Form from "~/modules/Constructor";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title"); // Getting the lesson title
  const description = form.get("description"); // Getting the lesson description

  const steps = form.getAll("step").map((item, index) => {
    const type = form.get(`type${index}`); // Getting type of the step
    const answer = form.get(`answer${index}`); // Getting answer
    const returnData = { type, number: index };
    switch (type) {
      case "Question": {
        const question = form.get(`question${index}`); // Getting question if it's Question type
        const keywords = form.get(`keywords${index}`); // Getting keywords if it's Question type
        return {
          ...returnData,
          question,
          answer,
          keywords: keywords?.split(","),
        };
      }
      case "Insert": {
        const text = form.get(`text${index}`); // Getting text if it's Insert type
        return {
          ...returnData,
          answer: answer.indexOf(",") ? answer.split(",") : answer,
          text,
        };
      }
      case "Variants": {
        const question = form.get(`question${index}`); // Getting question if it's Question type
        const definition = form.get(`definition${index}`); //
        const variants = form.getAll(`variant${index}`); //
        return { ...returnData, answer, definition, question, variants };
      }
      default: {
        return { ...returnData, answer };
      }
    }
  });

  const data = { title, steps, exp: 0 };
  const lesson = await db.lesson.create({ data });
  return redirect(`/lessons`);
};

export default function NewLesson() {
  return <Form />;
}
