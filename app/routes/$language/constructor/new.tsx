import { redirect, useParams } from "remix";
import type { ActionFunction } from "remix";
import { prisma } from "~/db.server";
import { getActiveLanguage } from "~/models/language.server";
import Constructor from "~/modules/Constructor";
import { nanoid } from "nanoid";

export function ErrorBoundary() {
  const { lessonId } = useParams();
  return (
    <div className="error-container">{`There was an error loading lesson by the id ${lessonId}. Sorry.`}</div>
  );
}

export const action: ActionFunction = async ({ request, params }) => {
  const today = new Date();
  const activeProject = await getActiveLanguage(request);
  const form = await request.formData();
  const title = form.get("title");

  const steps = form.getAll("step").map((item, index) => {
    const stepType = form.get(`type${index}`);
    let answer: any = form.get(`answer${index}`);
    // answer = answer.trim().toLowerCase().split(" ");
    const id = nanoid();

    answer = answer.trim().split(" ");
    const returnData = { stepType, number: index, id };
    switch (stepType) {
      case "Question": {
        const question = form.get(`question${index}`);
        const keywords: any = form.get(`keywords${index}`);
        return {
          ...returnData,
          question,
          answer,
          keywords: keywords ? keywords.split(",") : [],
        };
      }
      case "Insert": {
        const text = form.get(`text${index}`);
        return {
          ...returnData,
          answer,
          text,
        };
      }
      case "Variants": {
        const question = form.get(`question${index}`);
        const variants = form.getAll(`variant${index}`);
        return { ...returnData, answer, question, variants };
      }
      case "Pairs": {
        const variants = form.getAll(`variant${index}`);
        return { ...returnData, answer: answer[0].split(","), variants };
      }
      default: {
        return { ...returnData, answer };
      }
    }
  });

  const data: any = {
    title,
    steps,
    exp: 0,
    projectId: activeProject?.id,
    updatedAt: today.getDate().toString(),
  };
  const lesson = await prisma.lesson.create({ data });
  return redirect(`/lesson/${lesson.id}`);
};

export default function ConstructorNew() {
  return <Constructor />;
}
