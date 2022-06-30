import { Skill } from "@prisma/client";
import { prisma } from "~/db.server";
import { getTodayDate } from "~/utils";

export async function updateCurrentChapter(skill: Skill) {
  const { title, currentChapter, chapters } = skill;
  const today = getTodayDate();

  return await prisma.skill.update({
    where: {
      title: title,
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
