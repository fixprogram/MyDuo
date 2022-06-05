import type { Language } from "@prisma/client";
import { prisma } from "~/db.server";
import { getUserId, logout } from "~/session.server";
import { getWeekDay } from "~/utils";

export type { Language } from "@prisma/client";

export async function createInitialLanguage(userId: string) {
  return await prisma.language.create({
    data: { userId, active: true, title: "MyFirstLanguage" },
  });
}

export async function createNewLanguage(
  request: Request,
  title: Language["title"]
) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  await deactiveAllUserLanguages(userId);

  const language = await prisma.language.create({
    data: { userId, title, active: true },
  });

  return language;
}

async function deactiveAllUserLanguages(userId: Language["userId"]) {
  const languages = await prisma.language.updateMany({
    where: {
      userId,
    },
    data: {
      active: false,
    },
  });

  return languages;
}

export async function setActiveLanguage(id: string) {
  const language = await prisma.language.findUnique({
    where: { id },
  });

  if (language) {
    await deactiveAllUserLanguages(language.userId);
  }

  await prisma.language.update({
    where: {
      id,
    },
    data: {
      active: true,
    },
  });

  return language;
}

export async function getActiveLanguage(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const language = await prisma.language.findFirst({
      where: { userId, active: true },
    });
    return language;
  } catch {
    throw logout(request);
  }
}

export async function getLanguages(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const languages = await prisma.language.findMany({
      where: { userId },
    });
    return languages;
  } catch {
    throw logout(request);
  }
}

export async function whenLastPractice(request: Request) {
  const languages = (await getLanguages(request)) as Language[];
  const lastUpdatedTopic = await prisma.topic.findFirst({
    where: {
      projectId: { in: languages.map(({ id }) => id) },
      updatedAt: getWeekDay(),
    },
    select: { updatedAt: true },
  });
  return lastUpdatedTopic?.updatedAt;
}
