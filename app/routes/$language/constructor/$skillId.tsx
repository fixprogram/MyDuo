import { useActionData, useLoaderData, useParams } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { prisma } from "~/db.server";
import Constructor from "~/modules/Constructor";
import { Language, Lesson, Skill } from "@prisma/client";
import {
  createLessons,
  deleteLessonsFromSkill,
  getLessonsBySkillId,
} from "~/models/lesson.server";
import { ActionData } from "./new";
import { json } from "remix";
import { checkTitleUnique, getLastAddedSkill } from "~/models/skill.server";
import { getActiveLanguage } from "~/models/language.server";
import { getTodayDate } from "~/utils";

export function ErrorBoundary() {
  const { skillId } = useParams();
  return (
    <div className="error-container">{`There was an error loading lesson by the id ${skillId}. Sorry.`}</div>
  );
}

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  const title = form.get("title") as string;
  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const stepChapters = form.getAll("chapter") as string[];
  const skill = (await prisma.skill.findUnique({
    where: { id: params.skillId },
  })) as Skill;

  if (title !== skill.title) {
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
        const variants = variantValues.map((value, idx) => ({
          idx,
          value,
          isFocused: false,
        }));
        answer = answer
          .trim()
          .split(",")
          .sort((a, b) => a - b);
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
          // answer: answer[0].split(","),
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

  await deleteLessonsFromSkill(params.skillId as string);

  const createdLessonsIDs = await createLessons(lessons);
  const data = {
    title,
    lessonIDs: createdLessonsIDs,
    chapters: Number(stepChapters[stepChapters.length - 1]),
    currentChapter: 0,
    level: 0,
    projectId: activeLanguage?.id,
    updatedAt: getTodayDate(),
  };

  await prisma.skill.update({
    where: { id: params.skillId },
    data: { ...data },
  });

  return redirect(`/`);
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const skill = await prisma.skill.findUnique({
    where: { id: params.skillId },
  });
  if (!skill) {
    throw new Error("lesson not found");
  }

  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const lastAddedSkills = (await getLastAddedSkill(
    activeLanguage.id,
    true
  )) as Skill[];

  const lessons = await getLessonsBySkillId(skill.id);
  const data = {
    title: skill.title,
    steps: lessons,
    lineNumber: skill.lineNumber,
  };
  return { data, lastAddedSkills };
};

export default function ConstructorEdit() {
  const actionData = useActionData() as ActionData;
  const { data, lastAddedSkills } = useLoaderData();

  return (
    <Constructor
      data={data}
      lastAddedSkills={lastAddedSkills}
      actionData={actionData}
    />
  );
}
