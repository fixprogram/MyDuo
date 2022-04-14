import { prisma } from "~/db.server";

export async function getLessons(languageId: string) {
  return await prisma.lesson.findMany({
    take: 20,
    where: { projectId: languageId },
    select: { id: true, title: true, createdAt: true, exp: true },
    orderBy: { createdAt: "desc" },
  });
}
