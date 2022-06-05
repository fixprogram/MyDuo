import { Topic } from "@prisma/client";
import { prisma } from "~/db.server";
import { getWeekDay } from "~/utils";

export async function updateCurrentChapter(topic: Topic) {
  const today = getWeekDay() as string;

  return await prisma.topic.update({
    where: {
      title: topic.title,
    },
    data: {
      currentChapter:
        topic.chapters !== topic.currentChapter
          ? topic.currentChapter + 1
          : topic.currentChapter,
      updatedAt: today,
    },
  });
}

export async function checkTitleUnique(projectId: string, title: string) {
  const topics = await prisma.topic.findMany({ where: { projectId } });
  return !!topics.find((topic) => topic.title === title);
}

export async function getLastAddedTopic(projectId: string, neighbors = false) {
  const lastAddedTopic = await prisma.topic.findFirst({
    where: { projectId },
    orderBy: { createdAt: "desc" },
  });

  if (neighbors) {
    return await prisma.topic.findMany({
      where: { projectId, lineNumber: lastAddedTopic?.lineNumber },
    });
  }

  return lastAddedTopic;
}
