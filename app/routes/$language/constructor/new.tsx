import { json, redirect, useActionData, useLoaderData, useParams } from "remix";
import type { ActionFunction, LoaderFunction } from "remix";
import { prisma } from "~/db.server";
import { getActiveLanguage } from "~/models/language.server";
import Constructor from "~/modules/Constructor";
import { Language, Lesson, Topic } from "@prisma/client";
import { createLessons } from "~/models/lesson.server";
import { checkTitleUnique, getLastAddedTopic } from "~/models/topic.server";
import { getTodayDate } from "~/utils";

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
  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const form = await request.formData();
  const title = form.get("title") as string;

  let lineNumber = form.get("lineNumber") as string;
  const lastAddedTopic = (await getLastAddedTopic(activeLanguage.id)) as Topic;
  if (lastAddedTopic) {
    lineNumber =
      lineNumber === "0"
        ? (lastAddedTopic?.lineNumber + 1).toString()
        : lineNumber;
  }

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
    // answer = answer.trim().split(" ");
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
        answer = answer.trim().split(" ");
        return {
          ...returnData,
          question,
          answer,
          keywords: keywords ? keywords.split(",") : [],
        };
      }
      case "Insert": {
        const text = form.get(`text${index}`) as string;
        const isToChoose = !!form.get(`isToChoose${index}`);
        const variantValues = form.getAll(`variant${index}`);
        answer = answer.trim().split(" ");
        const variants = variantValues.map((value, idx) => ({
          idx,
          value,
          isFocused: false,
        }));
        return {
          ...returnData,
          answer,
          text: text.trim(),
          isToChoose: variants.length === 0 ? isToChoose : false,
          variants,
        };
      }
      case "Variants": {
        const question = form.get(`question${index}`);
        const variants = form.getAll(`variant${index}`);
        console.log("asnwer: ", answer);
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
          answer: answer.split(","),
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
    // updatedAt: today.getDate().toString(),
    updatedAt: getTodayDate(),
    lineNumber: Number(lineNumber),
  };
  const topic = await prisma.topic.create({ data });
  return redirect(`/skill/${topic.title}/1`);
};

export const loader: LoaderFunction = async ({ request }) => {
  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const lastAddedTopics = (await getLastAddedTopic(
    activeLanguage.id,
    true
  )) as Topic[];

  return { lastAddedTopics };
};

export default function ConstructorNew() {
  const actionData = useActionData() as ActionData;
  const { lastAddedTopics } = useLoaderData();

  return (
    <Constructor actionData={actionData} lastAddedTopics={lastAddedTopics} />
  );
}
