import { Lesson, Skill } from "@prisma/client";
import { prisma } from "~/db.server";
import { Step } from "~/modules/Skill/types";
import { getSkillByTitle } from "./skill.server";

function getSteps(lessons: Lesson[]): Step[] {
  return lessons.map(({ createdAt, updatedAt, ...rest }) => ({
    ...rest,
    difficulty: null,
  }));
}

export async function createLessons(data: Lesson[]) {
  const batch = await prisma.lesson.createMany({ data });
  const IDs = await prisma.lesson.findMany({
    select: { id: true },
    orderBy: { createdAt: "desc" },
    take: batch.count,
  });

  return IDs.map((idItem) => idItem.id);
}

export async function deleteLessonsFromSkill(skillId: string) {
  const skill = await prisma.skill.findUnique({ where: { id: skillId } });
  return await prisma.lesson.deleteMany({
    where: { id: { in: skill?.lessonIDs } },
  });
}

export async function getLessonsBySkillId(id: string) {
  const skill = (await prisma.skill.findUnique({ where: { id } })) as Skill;
  return await prisma.lesson.findMany({
    where: { id: { in: skill.lessonIDs } },
  });
}

export async function getStepsForPracticing(activeLanguageId: string) {
  const lessons = await prisma.lesson.findMany({
    where: { languageId: activeLanguageId },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return getSteps(lessons);
}

export async function getStepsForChapter(
  skillTitle: string,
  chapter: number,
  projectId: string
) {
  const skill = await getSkillByTitle(skillTitle, projectId);

  if (!skill) {
    throw new Error("Skill is not found");
  }

  const lessons = await prisma.lesson.findMany({
    where: { id: { in: skill.lessonIDs }, chapter },
  });

  return getSteps(lessons);
}

export async function getStepsForPracticingSkill(
  skillTitle: string,
  projectId: string
) {
  const skill = await getSkillByTitle(skillTitle, projectId);

  if (!skill) {
    throw new Error("Skill is not found");
  }

  const lessons = await prisma.lesson.findMany({
    where: { id: { in: skill.lessonIDs } },
  });

  return getSteps(lessons);
}
