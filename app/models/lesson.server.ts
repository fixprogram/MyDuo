import { Step as StepType, Skill } from "@prisma/client";
import { prisma } from "~/db.server";
import { Step } from "~/modules/Skill/types";
import { getSkillByTitle } from "./skill.server";

function getSteps(steps: StepType[]): Step[] {
  return steps.map(({ createdAt, updatedAt, ...rest }) => ({
    ...rest,
    difficulty: null,
  }));
}

export async function createSteps(data: StepType[]) {
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
  });

  return getSteps(steps);
}

export async function getStepsForChapter(
  skillTitle: string,
  chapter: number,
  languageId: string
) {
  const skill = await getSkillByTitle(skillTitle, languageId);

  if (!skill) {
    throw new Error("Skill is not found");
  }

  const steps = await prisma.step.findMany({
    where: { id: { in: skill.stepIDs } },
  });

  return getSteps(steps);
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
  });

  return getSteps(steps);
}
