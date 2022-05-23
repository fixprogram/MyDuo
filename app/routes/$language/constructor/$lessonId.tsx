import { redirect, useLoaderData, useParams } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { prisma } from "~/db.server";
import Constructor from "~/modules/Constructor";
import { nanoid } from "nanoid";
import { LessonStep } from "@prisma/client";

export function ErrorBoundary() {
  const { lessonId } = useParams();
  return (
    <div className="error-container">{`There was an error loading lesson by the id ${lessonId}. Sorry.`}</div>
  );
}

export const action: ActionFunction = async ({ request, params }) => {
  const today = new Date();
  const form = await request.formData();
  const title = form.get("title") as string;

  const steps = form.getAll("step").map((item, index) => {
    const stepType = form.get(`type${index}`);
    let answer: string | string[] = form.get(`answer${index}`) as string;
    answer = answer.trim().split(" ");
    const id = nanoid();
    const returnData = { stepType, number: index, id };
    switch (stepType) {
      case "Question": {
        const question = form.get(`question${index}`);
        const keywords = form.get(`keywords${index}`) as string;
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
        return {
          ...returnData,
          answer,
          question,
          variants: variants.map((variant, idx) => ({
            value: variant,
            idx: idx + 1,
            isFocused: false,
          })),
        };
      }
      case "Pairs": {
        const variants = form.getAll(`variant${index}`) as string[];
        return {
          ...returnData,
          answer: answer[0].split(","),
          variants: variants.map((variant, idx) => ({
            value: variant,
            isFocused: false,
            isConnected: true,
            idx: idx + 1,
          })),
        };
      }
      default: {
        return { ...returnData, answer };
      }
    }
  }) as LessonStep[];

  const data = {
    title,
    steps,
    updatedAt: today.getDate().toString(),
  };

  const updatedLesson = await prisma.lesson.update({
    where: { id: params.lessonId },
    data: { ...data },
  });
  return redirect(`/lesson/${updatedLesson.id}`);
};

export const loader: LoaderFunction = async ({ params }) => {
  const lesson = await prisma.lesson.findUnique({
    where: { id: params.lessonId },
  });

  if (!lesson) {
    throw new Error("lesson not found");
  }

  const data = { lesson };
  return data;
};

export default function ConstructorEdit() {
  const { lesson } = useLoaderData();

  return <Constructor data={lesson} />;
}