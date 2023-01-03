import { Skill } from "@prisma/client";
import { prisma } from "~/db.server";
import { getTodayDate } from "~/utils";

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

export async function updateCurrentChapter(skill: Skill) {
  const { currentChapter, chapters, id } = skill;
  const today = getTodayDate();

  return await prisma.skill.update({
    where: {
      id,
    },
    data: {
      currentChapter:
        chapters !== currentChapter ? currentChapter + 1 : currentChapter,
      updatedAt: today,
    },
  });
}

export async function checkTitleUnique(projectId: string, title: string) {
  const skills = await prisma.skill.findMany({ where: { projectId } });
  return !!skills.find((skill) => skill.title === title);
}

export async function getLastAddedSkill(projectId: string, neighbors = false) {
  const lastAddedSkill = await prisma.skill.findFirst({
    where: { projectId },
    orderBy: { createdAt: "desc" },
  });

  if (neighbors) {
    return await prisma.skill.findMany({
      where: { projectId, lineNumber: lastAddedSkill?.lineNumber },
    });
  }

  return lastAddedSkill;
}

export async function deleteSkillById(id: string) {
  return await prisma.skill.delete({ where: { id } });
}

export async function getSkillByTitle(title: string, projectId: string) {
  return await prisma.skill.findFirst({ where: { title, projectId } });
}
