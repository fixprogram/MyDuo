import bcrypt from "bcryptjs";
import { createCookieSessionStorage, redirect } from "remix";

import { db } from "./db.server";

type LoginForm = {
  username: string;
  password: string;
};

export async function register({ username, password }: LoginForm) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await db.user.create({
    data: { username, passwordHash, streak: 1, wasToday: true },
  });
  const project = await db.project.create({
    data: {
      title: "MyFirstProject",
      active: true,
      userId: user.id,
    },
  });
  return { id: user.id, username, project };
}

export async function login({ username, password }: LoginForm) {
  const user = await db.user.findUnique({
    where: { username },
  });
  if (!user) return null;

  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isCorrectPassword) return null;

  return { id: user.id, username };
}

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

async function getActivePractice(request: Request) {
  const activeProject = await getActiveProject(request);

  try {
    const practice = await db.practice.findFirst({
      where: { projectId: activeProject?.id },
    });
    return practice;
  } catch {
    throw logout(request);
  }
}

export async function getPracticeGoals(request: Request) {
  const activePractice = await getActivePractice(request);

  return activePractice?.goals;
}

export async function getPracticeDay(request: Request, timestamp: string) {
  const activePractice = await getActivePractice(request);

  return activePractice?.days?.find((day) => day.timestamp == timestamp);
}

export async function setPracticeDay(
  request: Request,
  timestamp: string,
  data: { tasks: []; habits: [] },
  goals: string[] = []
) {
  const activeProject = await getActiveProject(request);
  const activePractice = await getActivePractice(request);

  if (!activePractice) {
    const practice = await db.practice.create({
      data: {
        goals,
        projectId: activeProject?.id,
        days: [{ timestamp, ...data }],
      },
    });

    return practice;
  }

  const newDays = activePractice?.days;
  const newDay = newDays?.find((day) => toString(day.timestamp) === timestamp);
  if (newDay) {
    newDays?.splice(newDays.indexOf(newDay), 1);

    const day = await db.practice.update({
      where: {
        id: activePractice.id,
      },
      data: {
        ...activePractice,
        day: { timestamp, ...data },
      },
    });

    return day;
  }

  return null;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true, streak: true, wasToday: true },
    });
    return user;
  } catch {
    throw logout(request);
  }
}

export async function getProjects(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const projects = await db.project.findMany({
      where: { userId },
    });
    return projects;
  } catch {
    throw logout(request);
  }
}

export async function createNewProject(request: Request, title) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  await deactiveAllUserProjects(userId);

  const project = await db.project.create({
    data: { userId, title, active: true },
  });

  return project;
}

export async function getActiveProject(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const project = await db.project.findFirst({
      where: { userId, active: true },
    });
    return project;
  } catch {
    throw logout(request);
  }
}

export async function findArticleByTitle(request: Request, title: string) {
  const project = await getActiveProject(request);

  const article = await db.study.findFirst({
    where: { projectId: project?.id, title },
  });

  return article;
}

async function deactiveAllUserProjects(userId: string) {
  const projects = await db.project.updateMany({
    where: {
      userId,
    },
    data: {
      active: false,
    },
  });

  return projects;
}

export async function setActiveProject(id) {
  const project = await db.project.findUnique({
    where: { id },
  });

  if (project) {
    await deactiveAllUserProjects(project.userId);
  }

  await db.project.update({
    where: {
      id,
    },
    data: {
      active: true,
    },
  });

  return project;
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}
