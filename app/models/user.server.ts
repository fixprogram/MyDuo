import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";

import { prisma } from "~/db.server";
import { getUser } from "~/session.server";
import { getWeekDay } from "~/utils";
import { createInitialLanguage } from "./language.server";

export type { User } from "@prisma/client";

export async function createUser(username: User["username"], password: string) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      passwordHash,
      streak: 0,
      wasToday: false,
      weeklyActivity: {
        Sun: 0,
        Mon: 0,
        Tue: 0,
        Wed: 0,
        Thu: 0,
        Fri: 0,
        Sat: 0,
      },
    },
  });

  // await prisma.language.create({
  //   data: { userId: user.id, active: true, title: "MyFirstLanguage" },
  // });

  await createInitialLanguage(user.id);

  return user;
}

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

export async function increaseTodayExp(request: Request, value: number) {
  const user = await getUser(request);
  if (!user) throw new Error("User is undefined");
  return await prisma.user.update({
    where: { id: user.id },
    data: {
      weeklyActivity: {
        ...user?.weeklyActivity,
        [`${getWeekDay()}`]: user?.weeklyActivity[`${getWeekDay()}`] + value,
      },
    },
  });
}

export async function resetTodayActivity(request: Request) {
  const user = await getUser(request);
  if (!user) throw new Error("User is undefined");
  return await prisma.user.update({
    where: { id: user.id },
    data: {
      weeklyActivity: {
        ...user?.weeklyActivity,
        [`${getWeekDay()}`]: 0,
      },
    },
  });
}
