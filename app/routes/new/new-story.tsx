import { ActionFunction, redirect } from "remix";
import StoryForm from "~/modules/StoryForm";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");
  const innerTitle = form.get("innerTitle");
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
};

export default function NewLesson() {
  return <StoryForm />;
}
