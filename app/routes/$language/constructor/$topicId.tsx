import { useActionData, useLoaderData, useParams } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { prisma } from "~/db.server";
import Constructor from "~/modules/Constructor";
import { Language, Lesson, Topic } from "@prisma/client";
import {
  createLessons,
  deleteLessonsFromTopic,
  getLessonsByTopicId,
} from "~/models/lesson.server";
import { ActionData } from "./new";
import { json } from "remix";
import { checkTitleUnique, getLastAddedTopic } from "~/models/topic.server";
import { getActiveLanguage } from "~/models/language.server";
import { getTodayDate } from "~/utils";

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
  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const stepChapters = form.getAll("chapter") as string[];
  const topic = (await prisma.topic.findUnique({
    where: { id: params.topicId },
  })) as Topic;

  if (title !== topic.title) {
    const isTitleUnique = await checkTitleUnique(activeLanguage.id, title);

    if (isTitleUnique) {
      return json<ActionData>(
        {
          errors: { title: "Title isn't unique" },
        },
        { status: 400 }
      );
    }
  }

  const lessons = form.getAll("step").map((item, index) => {
    const stepType = form.get(`type${index}`);
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
        const text = form.get(`text${index}`) as string;
        const isToChoose = !!form.get(`isToChoose${index}`);
        const variantValues = form.getAll(`variant${index}`);
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

  await deleteLessonsFromTopic(params.topicId as string);

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
  };

  await prisma.topic.update({
    where: { id: params.topicId },
    data: { ...data },
  });

  return redirect(`/`);
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const topic = await prisma.topic.findUnique({
    where: { id: params.topicId },
  });
  if (!topic) {
    throw new Error("lesson not found");
  }

  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const lastAddedTopics = (await getLastAddedTopic(
    activeLanguage.id,
    true
  )) as Topic[];

  const lessons = await getLessonsByTopicId(topic.id);
  const data = {
    title: topic.title,
    steps: lessons,
    lineNumber: topic.lineNumber,
  };
  return { data, lastAddedTopics };
};

export default function ConstructorEdit() {
  const actionData = useActionData() as ActionData;
  const { data, lastAddedTopics } = useLoaderData();

  return (
    <Constructor
      data={data}
      lastAddedTopics={lastAddedTopics}
      actionData={actionData}
    />
  );
}
