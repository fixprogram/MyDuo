// import bcrypt from "bcryptjs";
// import { createCookieSessionStorage, redirect } from "remix";

// import { prisma } from "./db.server";

// type LoginForm = {
//   username: string;
//   password: string;
// };

// export async function register({ username, password }: LoginForm) {
//   const passwordHash = await bcrypt.hash(password, 10);
//   const user = await prisma.user.create({
//     data: { username, passwordHash, streak: 1, wasToday: true },
//   });
//   const project = await prisma.project.create({
//     data: {
//       title: "MyFirstProject",
//       active: true,
//       userId: user.id,
//     },
//   });
//   return { id: user.id, username, project };
// }

// export async function login({ username, password }: LoginForm) {
//   const user = await prisma.user.findUnique({
//     where: { username },
//   });
//   if (!user) return null;

//   const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
//   if (!isCorrectPassword) return null;

//   return { id: user.id, username };
// }

// const sessionSecret = process.env.SESSION_SECRET;
// if (!sessionSecret) {
//   throw new Error("SESSION_SECRET must be set");
// }

// const storage = createCookieSessionStorage({
//   cookie: {
//     name: "RJ_session",
//     secure: process.env.NODE_ENV === "production",
//     secrets: [sessionSecret],
//     sameSite: "lax",
//     path: "/",
//     maxAge: 60 * 60 * 24 * 30,
//     httpOnly: true,
//   },
// });

// export function getUserSession(request: Request) {
//   return storage.getSession(request.headers.get("Cookie"));
// }

// export async function getUserId(request: Request) {
//   const session = await getUserSession(request);
//   const userId = session.get("userId");
//   if (!userId || typeof userId !== "string") return null;
//   return userId;
// }

// export async function requireUserId(
//   request: Request,
//   redirectTo: string = new URL(request.url).pathname
// ) {
//   const session = await getUserSession(request);
//   const userId = session.get("userId");
//   if (!userId || typeof userId !== "string") {
//     const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
//     throw redirect(`/login?${searchParams}`);
//   }
//   return userId;
// }

// async function getActivePractice(request: Request) {
//   const activeProject = await getActiveProject(request);

//   try {
//     const practice = await prisma.practice.findFirst({
//       where: { projectId: activeProject?.id },
//     });
//     return practice;
//   } catch {
//     throw logout(request);
//   }
// }

export async function getPracticeGoals(request: Request) {
  // const activePractice = await getActivePractice(request);

  // return activePractice?.goals;
  return null;
}

export async function getPracticeDay(request: Request, timestamp: string) {
  // const activePractice = await getActivePractice(request);

  // return activePractice?.days?.find((day) => day.timestamp == timestamp);
  return null;
}

export async function setGoals(request: Request, goals: []) {
  return null;
  //   const activePractice = await getActivePractice(request);
  //   const activeProject = await getActiveProject(request);

  //   if (!activePractice) {
  //     const practice = await prisma.practice.create({
  //       data: {
  //         goals,
  //         projectId: activeProject?.id,
  //         days: [],
  //       },
  //     });

  //     return practice;
  //   }

  //   const { projectId, days } = activePractice;
  //   await prisma.practice.update({
  //     where: { id: activePractice.id },
  //     data: { projectId, days, goals },
  //   });

  //   return activePractice;
}

export async function setPracticeDay(
  request: Request,
  timestamp: string,
  data: { tasks: []; habits: [] },
  goals: string[] = []
) {
  //   const activeProject = await getActiveLanguage(request);
  //   const activePractice = await getActiveLanguage(request);

  //   if (!activePractice) {
  //     const practice = await prisma.practice.create({
  //       data: {
  //         goals,
  //         projectId: activeProject?.id,
  //         days: [{ timestamp, ...data }],
  //       },
  //     });

  //     return practice;
  //   }

  //   const newDays = activePractice?.days;
  //   const newDay = newDays?.find((day) => day.timestamp == timestamp);
  //   if (newDay) {
  //     newDays.splice(newDays.indexOf(newDay));
  //   }

  //   const practice = await prisma.practice.update({
  //     where: {
  //       id: activePractice.id,
  //     },
  //     data: {
  //       days: [...newDays, { timestamp, ...data }],
  //     },
  //   });

  //   return practice;
  return null;
}

// export async function getUser(request: Request) {
//   const userId = await getUserId(request);
//   if (typeof userId !== "string") {
//     return null;
//   }

//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: userId },
//       select: { id: true, username: true, streak: true, wasToday: true },
//     });
//     return user;
//   } catch {
//     throw logout(request);
//   }
// }

// // export async function getProjects(request: Request) {
// //   const userId = await getUserId(request);
// //   if (typeof userId !== "string") {
// //     return null;
// //   }

// //   try {
// //     const projects = await prisma.project.findMany({
// //       where: { userId },
// //     });
// //     return projects;
// //   } catch {
// //     throw logout(request);
// //   }
// // }

// // export async function createNewProject(request: Request, title: string) {
// //   const userId = await getUserId(request);
// //   if (typeof userId !== "string") {
// //     return null;
// //   }

// //   await deactiveAllUserProjects(userId);

// //   const project = await prisma.project.create({
// //     data: { userId, title, active: true },
// //   });

// //   return project;
// // }

// // export async function getActiveProject(request: Request) {
// //   const userId = await getUserId(request);
// //   if (typeof userId !== "string") {
// //     return null;
// //   }

// //   try {
// //     const project = await prisma.project.findFirst({
// //       where: { userId, active: true },
// //     });
// //     return project;
// //   } catch {
// //     throw logout(request);
// //   }
// // }

// // export async function findArticleByTitle(request: Request, title: string) {
// //   const project = await getActiveProject(request);

// //   const article = await prisma.study.findFirst({
// //     where: { projectId: project?.id, title },
// //   });

// //   return article;
// // }

// // async function deactiveAllUserProjects(userId: string) {
// //   const projects = await prisma.project.updateMany({
// //     where: {
// //       userId,
// //     },
// //     data: {
// //       active: false,
// //     },
// //   });

// //   return projects;
// // }

// // export async function setActiveProject(id: string) {
// //   const project = await prisma.project.findUnique({
// //     where: { id },
// //   });

// //   if (project) {
// //     await deactiveAllUserProjects(project.userId);
// //   }

// //   await prisma.project.update({
// //     where: {
// //       id,
// //     },
// //     data: {
// //       active: true,
// //     },
// //   });

// //   return project;
// // }

// export async function logout(request: Request) {
//   const session = await getUserSession(request);
//   return redirect("/login", {
//     headers: {
//       "Set-Cookie": await storage.destroySession(session),
//     },
//   });
// }

// export async function createUserSession(userId: string, redirectTo: string) {
//   const session = await storage.getSession();
//   session.set("userId", userId);
//   return redirect(redirectTo, {
//     headers: {
//       "Set-Cookie": await storage.commitSession(session),
//     },
//   });
// }

import { createCookieSessionStorage, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import type { User } from "~/models/user.server";
import { getUserById } from "~/models/user.server";
import { prisma } from "./db.server";
import { getActiveLanguage } from "./models/language.server";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

const USER_SESSION_KEY = "userId";

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getUserId(request: Request): Promise<string | undefined> {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}

export async function getUser(request: Request): Promise<null | User> {
  const userId = await getUserId(request);
  if (userId === undefined) return null;

  const user = await getUserById(userId);
  if (user) return user;

  throw await logout(request);
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
): Promise<string> {
  const userId = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function requireUser(request: Request) {
  const userId = await requireUserId(request);

  const user = await getUserById(userId);
  if (user) return user;

  throw await logout(request);
}

export async function createUserSession({
  request,
  userId,
  remember,
  redirectTo,
}: {
  request: Request;
  userId: string;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}

export async function logout(request: Request) {
  const session = await getSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
