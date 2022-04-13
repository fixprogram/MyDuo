import type { Language } from "@prisma/client";
import { prisma } from "~/db.server";
import { getUserId, logout } from "~/session.server";

export type { Language } from "@prisma/client";

// export async function getUserById(id: User["id"]) {
//   return prisma.user.findUnique({ where: { id } });
// }

// export async function getUserByUsername(username: User["username"]) {
//   return prisma.user.findUnique({ where: { username } });
// }

// export async function createUser(username: User["username"], password: string) {
//   const passwordHash = await bcrypt.hash(password, 10);

//   return prisma.user.create({
//     data: {
//       username,
//       passwordHash,
//     },
//   });
// }

// export async function deleteUserByUsername(username: User["username"]) {
//   return prisma.user.delete({ where: { username } });
// }

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
