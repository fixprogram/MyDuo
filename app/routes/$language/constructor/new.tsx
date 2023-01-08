import { prisma } from "~/db.server";
import { getActiveLanguage } from "~/models/language.server";
import Constructor from "~/modules/Constructor";
import { Language, Step } from "@prisma/client";
import { createSteps } from "~/models/lesson.server";
import {
  checkTitleUnique,
  getLastAddedSkills,
  getLastAddedSkill,
} from "~/models/skill.server";
import { getTodayDate } from "~/utils";
import { json, redirect } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";

export type ActionData = {
  errors?: {
    title?: string;
  };
};

export function ErrorBoundary() {
  return (
    <div className="error-container">{`There was an error loading the constructor. Sorry.`}</div>
  );
}

export const action = async ({ request, params }: ActionArgs) => {
  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const form = await request.formData();

  const { ...values } = Object.fromEntries(form);

  const stepsData = JSON.parse(values.steps as string) as Step[];
  const skillData = JSON.parse(values.skillData as string);

  const { skillTitle, skillLineNumber } = skillData;

  let lineNumber = skillLineNumber;
  const lastAddedSkill = await getLastAddedSkill(activeLanguage.id);
  if (lastAddedSkill) {
    lineNumber =
      lineNumber === "0"
        ? (lastAddedSkill?.lineNumber + 1).toString()
        : lineNumber;
  }

  const isTitleUnique = await checkTitleUnique(activeLanguage.id, skillTitle);

  if (isTitleUnique) {
    return json<ActionData>(
      {
        errors: { title: "Title isn't unique" },
      },
      { status: 400 }
    );
  }

  const createdStepIDs = await createSteps(
    stepsData.map((step) => ({ ...step, languageId: activeLanguage.id }))
  );

  const uniqueLessons: string[] = [];
  stepsData.map((step) => {
    if (
      !Boolean(
        uniqueLessons.find((lessonId) => lessonId === step.parentLessonId)
      )
    ) {
      uniqueLessons.push(step.parentLessonId);
    }
  });
  const lessonsAmount = uniqueLessons.length;

  const data = {
    title: skillTitle,
    stepIDs: createdStepIDs,
    currentLesson: 0,
    lessonsAmount,
    level: 0,
    languageId: activeLanguage.id,
    updatedAt: getTodayDate(),
    lineNumber: Number(lineNumber),
  };
  const skill = await prisma.skill.create({ data });
  return redirect(`/skill/${skill.title}/1`);
};

export const loader = async ({ request }: LoaderArgs) => {
  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const lastAddedSkills = await getLastAddedSkills(activeLanguage.id);

  return json({ lastAddedSkills });
};

export default function New() {
  const actionData = useActionData<typeof action>();
  const { lastAddedSkills } = useLoaderData<typeof loader>();

  return (
    <Constructor actionData={{}} />
    // <Constructor actionData={actionData} lastAddedSkills={lastAddedSkills} />
  );
}
