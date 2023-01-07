import { useActionData, useLoaderData } from "@remix-run/react";
import { json, redirect, Response } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { prisma } from "~/db.server";
import Constructor from "~/modules/Constructor";
import { Language, Step, Skill } from "@prisma/client";
import {
  createSteps,
  deleteStepsFromSkill,
  getStepsBySkillId,
} from "~/models/lesson.server";
import { ActionData } from "./new";
import {
  checkTitleUnique,
  getLastAddedSkill,
  getLastAddedSkills,
} from "~/models/skill.server";
import { getActiveLanguage } from "~/models/language.server";
import { getTodayDate } from "~/utils";
import { StepOptions } from "~/modules/Constructor/Levels/types";

export const action = async ({ request, params }: ActionArgs) => {
  const form = await request.formData();
  const activeLanguage = (await getActiveLanguage(request)) as Language;
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

  // const isTitleUnique = await checkTitleUnique(activeLanguage.id, skillTitle);

  // console.log()
  // if (isTitleUnique) {
  //   return json<ActionData>(
  //     {
  //       errors: { title: "Title isn't unique" },
  //     },
  //     { status: 400 }
  //   );
  // }

  await deleteStepsFromSkill(params.skillId as string);

  const createdStepIDs = await createSteps(stepsData);
  const data = {
    title: skillTitle,
    stepIDs: createdStepIDs,
    currentLesson: 0,
    level: 0,
    languageId: activeLanguage?.id,
    updatedAt: getTodayDate(),
    lineNumber: Number(lineNumber),
  };

  await prisma.skill.update({
    where: { id: params.skillId },
    data: { ...data },
  });

  return redirect(`/`);
};

export const loader = async ({ request, params }: LoaderArgs) => {
  const skill = await prisma.skill.findUnique({
    where: { id: params.skillId },
  });

  if (!skill) {
    throw new Response("Skill is not found", { status: 404 });
  }

  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const lastAddedSkills = await getLastAddedSkills(activeLanguage.id);

  const steps = await getStepsBySkillId(skill.id);
  const data = {
    title: skill.title,
    steps: steps.map((step) => {
      const options: StepOptions = JSON.parse(
        step.options ? step.options : "{}"
      );
      return {
        ...step,
        options,
      };
    }),
    lineNumber: skill.lineNumber,
  };

  return json({ data, lastAddedSkills });
};

export default function ConstructorEdit() {
  const actionData = useActionData() as ActionData;
  const { data, lastAddedSkills } = useLoaderData<typeof loader>();

  return (
    <Constructor
      data={data}
      lastAddedSkills={lastAddedSkills}
      actionData={actionData}
    />
  );
}
