import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";

import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

// export async function updateUserActivity(id: User["id"], wasToday: boolean) {
//   return prisma.user.update({
//     where: { id },
//     data: { wasToday },
//   });
// }

export async function updateUserStreak(
  id: User["id"],
  wasToday: boolean,
  streak: number
) {
  return prisma.user.update({
    where: { id },
    data: { wasToday, streak },
  });
}

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByUsername(username: User["username"]) {
  return prisma.user.findUnique({ where: { username } });
}

export async function createUser(username: User["username"], password: string) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      passwordHash,
      streak: 1,
      wasToday: true,
    },
  });

  await prisma.language.create({
    data: { userId: user.id, active: true, title: "MyFirstLanguage" },
  });

  return user;
}

export async function deleteUserByUsername(username: User["username"]) {
  return prisma.user.delete({ where: { username } });
}

export async function verifyLogin(
  username: User["username"],
  password: string
) {
  const userWithPassword = await prisma.user.findUnique({
    where: { username },
  });

  if (!userWithPassword || !userWithPassword.passwordHash) {
    return null;
  }

  const isValid = await bcrypt.compare(password, userWithPassword.passwordHash);

  if (!isValid) {
    return null;
  }

  const { passwordHash: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}
