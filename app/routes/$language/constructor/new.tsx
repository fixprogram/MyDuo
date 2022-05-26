import { json, redirect, useActionData, useParams } from "remix";
import type { ActionFunction } from "remix";
import { prisma } from "~/db.server";
import { getActiveLanguage } from "~/models/language.server";
import Constructor, { ConstructorData } from "~/modules/Constructor";
import { Language, Lesson } from "@prisma/client";
import { createLessons } from "~/models/lesson.server";
import { checkTitleUnique } from "~/models/topic.server";
import { basicState } from "~/modules/Constructor/Levels/reducer";

export type ActionData = {
  errors?: {
    title?: string;
  };
};

export function ErrorBoundary() {
  const { lessonId } = useParams();
  return (
    <div className="error-container">{`There was an error loading lesson by the id ${lessonId}. Sorry.`}</div>
  );
}

export const action: ActionFunction = async ({ request, params }) => {
  const today = new Date();
  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const form = await request.formData();
  const title = form.get("title") as string;
  const stepChapters = form.getAll("chapter") as string[];

  const isTitleUnique = await checkTitleUnique(activeLanguage.id, title);

  if (isTitleUnique) {
    return json<ActionData>(
      {
        errors: { title: "Title isn't unique" },
      },
      { status: 400 }
    );
  }

  const lessons = form.getAll("step").map((item, index) => {
    const stepType = form.get(`type${index}`);
    // const stepChapter = form.get(`chapter${index}`) as string;
    let answer: string | string[] = form.get(`answer${index}`) as string;
    answer = answer.trim().split(" ");
    const returnData = {
      stepType,
      number: index,
      chapter: Number(stepChapters[index]),
      languageId: activeLanguage.id,
    };
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
  }) as Lesson[];

  const createdLessonsIDs = await createLessons(lessons);
  const data = {
    title,
    lessonIDs: createdLessonsIDs,
    chapters: Number(stepChapters[stepChapters.length - 1]),
    currentChapter: 0,
    level: 0,
    projectId: activeLanguage?.id,
    updatedAt: today.getDate().toString(),
  };
  const topic = await prisma.topic.create({ data });
  return redirect(`/skill/${topic.title}/1`);
};

export default function ConstructorNew() {
  const actionData = useActionData() as ActionData;

  return <Constructor actionData={actionData} />;
}
