import { Lesson, Topic } from "@prisma/client";
import { prisma } from "~/db.server";

export async function createLessons(data: Lesson[]) {
  const batch = await prisma.lesson.createMany({ data });
  // const lastAddedLesson = await prisma.lesson.findFirst({
  //   select: {
  //     createdAt: true,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  //   take: 1,
  // });
  // console.log(lastAddedLesson?.createdAt);
  const IDs = await prisma.lesson.findMany({
    select: { id: true },
    orderBy: { createdAt: "desc" },
    take: batch.count,
  });

  return IDs.map((idItem) => idItem.id);
}

// export async function getLessons(languageId: string) {
//   return await prisma.lesson.findMany({
//     take: 20,
//     where: { projectId: languageId },
//     select: {
//       id: true,
//       title: true,
//       createdAt: true,
//       chapters: true,
//       currentChapter: true,
//     },
//     orderBy: { createdAt: "desc" },
//   });
// }

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

export async function getLastActiveLesson(languageId: string) {
  const today = new Date();
  // const todaysActivity = await prisma.lesson.findFirst({
  const todaysActivity = await prisma.topic.findFirst({
    where: { projectId: languageId, updatedAt: today.getDate().toString() },
  });

  if (todaysActivity) {
    return todaysActivity;
  }

  // const yesterdaysActivity = await prisma.lesson.findFirst({
  const yesterdaysActivity = await prisma.topic.findFirst({
    where: {
      projectId: languageId,
      updatedAt: (today.getDate() - 1).toString(),
    },
  });
  if (yesterdaysActivity) {
    return yesterdaysActivity;
  }

  return null;
}

// export async function deleteLessonById(id: string) {
//   return await prisma.lesson.delete({ where: { id } });
// }
export async function deleteLessonById(id: string) {
  return await prisma.topic.delete({ where: { id } });
}
