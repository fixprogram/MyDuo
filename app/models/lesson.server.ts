import { prisma } from "~/db.server";

export async function getLessons(languageId: string) {
  return await prisma.lesson.findMany({
    take: 20,
    where: { projectId: languageId },
    select: { id: true, title: true, createdAt: true, exp: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getLastActiveLesson(languageId: string) {
  const today = new Date();
  const todaysActivity = await prisma.lesson.findFirst({
    where: { projectId: languageId, updatedAt: today.getDate().toString() },
  });

  if (todaysActivity) {
    return todaysActivity;
  }

  const yesterdaysActivity = await prisma.lesson.findFirst({
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

export async function deleteLessonById(id: string) {
  console.log("id");
  return await prisma.lesson.delete({ where: { id } });
}
