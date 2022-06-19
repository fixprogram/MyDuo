import { Lesson, Topic, User } from "@prisma/client";
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

export async function createTopic(data: Topic) {
  return await prisma.topic.create({ data });
}

export async function getTopics(languageId: string) {
  return await prisma.topic.findMany({
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

  if (today - lastPracticed > 0) {
    await resetMultipleActivity(request, lastPracticed);
    return lastPracticed;
  }

  return today;
}

export async function deleteTopicById(id: string) {
  return await prisma.topic.delete({ where: { id } });
}

export async function deleteLessonsFromTopic(topicId: string) {
  const topic = await prisma.topic.findUnique({ where: { id: topicId } });
  return await prisma.lesson.deleteMany({
    where: { id: { in: topic?.lessonIDs } },
  });
}

export async function getLessonsByTopicId(id: string) {
  const topic = (await prisma.topic.findUnique({ where: { id } })) as Topic;
  return await prisma.lesson.findMany({
    where: { id: { in: topic.lessonIDs } },
  });
}
