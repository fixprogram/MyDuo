import { Lesson, Skill, User } from "@prisma/client";
import { prisma } from "~/db.server";
import { getTodayDate } from "~/utils";
import { whenLastPractice } from "./language.server";
import { resetMultipleActivity } from "./user.server";

export async function createLessons(data: Lesson[]) {
  const batch = await prisma.lesson.createMany({ data });
  const IDs = await prisma.lesson.findMany({
    select: { id: true },
    orderBy: { createdAt: "desc" },
    take: batch.count,
  });

  return IDs.map((idItem) => idItem.id);
}

export async function createSkill(data: Skill) {
  return await prisma.skill.create({ data });
}

export async function getSkills(languageId: string) {
  return await prisma.skill.findMany({
    take: 20,
    where: { projectId: languageId },
    select: {
      id: true,
      title: true,
      createdAt: true,
      chapters: true,
      currentChapter: true,
      lineNumber: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getLastActivity(request: Request) {
  const today = getTodayDate();
  const lastPracticed = await whenLastPractice(request);

  console.log(today);
  console.log(lastPracticed);

  if (today - lastPracticed > 0) {
    await resetMultipleActivity(request, lastPracticed);
    return lastPracticed;
  }

  return today;
}

export async function deleteSkillById(id: string) {
  return await prisma.skill.delete({ where: { id } });
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
