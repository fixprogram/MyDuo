import { Lesson, Topic, User, WeeklyActivity } from "@prisma/client";
import { prisma } from "~/db.server";
import { getWeekDay, getYesterdayDay } from "~/utils";

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
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getLastActivity(userId: string) {
  const today = getWeekDay() as string;
  const yesterday = getYesterdayDay() as string;
  const user = (await prisma.user.findUnique({
    where: { id: userId },
    select: { weeklyActivity: true },
  })) as User;

  const { weeklyActivity } = user;

  if (weeklyActivity[today]) {
    return { day: today, exp: weeklyActivity[today] };
  }

  if (weeklyActivity[yesterday]) {
    return {
      day: yesterday,
      exp: weeklyActivity[yesterday],
    };
  }

  return null;
}

export async function deleteLessonById(id: string) {
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
