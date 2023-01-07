import { Step, Skill } from "@prisma/client";
import { prisma } from "~/db.server";
import { StepOptions } from "~/modules/Constructor/Levels/types";
import { PracticeStepType } from "~/modules/Skill/types";
import { getSkillByTitle } from "./skill.server";

type UnformattedStepType = Omit<PracticeStepType, "difficulty" | "options"> & {
  options: string | null;
};

function formatSteps(steps: UnformattedStepType[]) {
  return steps.map(({ answer, options, ...rest }) => ({
    ...rest,
    difficulty: null,
    answer: JSON.parse(answer) as string,
    options: options
      ? (JSON.parse(options) as StepOptions)
      : ({} as StepOptions),
  }));
}

export async function createSteps(data: Step[]) {
  const batch = await prisma.step.createMany({ data });
  const IDs = await prisma.step.findMany({
    select: { id: true },
    orderBy: { createdAt: "desc" },
    take: batch.count,
  });

  return IDs.map((idItem) => idItem.id);
}

export async function deleteLessonsFromSkill(skillId: string) {
  const skill = await prisma.skill.findUnique({ where: { id: skillId } });
  return await prisma.step.deleteMany({
    where: { id: { in: skill?.stepIDs } },
  });
}

export async function getLessonsBySkillId(id: string) {
  const skill = (await prisma.skill.findUnique({ where: { id } })) as Skill;
  return await prisma.step.findMany({
    where: { id: { in: skill.stepIDs } },
  });
}

export async function getStepsForPracticing(activeLanguageId: string) {
  const steps = await prisma.step.findMany({
    where: { languageId: activeLanguageId },
    orderBy: { createdAt: "desc" },
    take: 10,
    select: { answer: true, stepType: true, options: true },
  });

  return formatSteps(steps);
}

export async function getStepsForLesson(
  skillTitle: string,
  languageId: string
) {
  const skill = await getSkillByTitle(skillTitle, languageId);

  if (!skill) {
    throw new Error("Skill is not found");
  }

  const steps = await prisma.step.findMany({
    where: { id: { in: skill.stepIDs } },
    select: { answer: true, stepType: true, options: true },
  });

  return formatSteps(steps);
}

export async function getStepsForPracticingSkill(
  skillTitle: string,
  languageId: string
) {
  const skill = await getSkillByTitle(skillTitle, languageId);

  if (!skill) {
    throw new Error("Skill is not found");
  }

  const steps = await prisma.step.findMany({
    where: { id: { in: skill.stepIDs } },
    select: { answer: true, stepType: true, options: true },
  });

  return formatSteps(steps);
}
