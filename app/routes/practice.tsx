import { redirect, useLoaderData, useParams } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { prisma } from "~/db.server";
import Lesson from "~/modules/Lesson";
import { getActiveLanguage } from "~/models/language.server";
import { getUser } from "~/session.server";
import { User, WeeklyActivity } from "@prisma/client";
import { getWeekDay } from "~/utils";

export function ErrorBoundary() {
  const { lessonId } = useParams();
  return (
    <div className="error-container">{`There was an error loading lesson by the id ${lessonId}. Sorry.`}</div>
  );
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const user = (await getUser(request)) as User;
  const newUserActivity = user.weeklyActivity as WeeklyActivity;
  newUserActivity[`${getWeekDay()}`] = newUserActivity[`${getWeekDay()}`] + 10;

  await prisma.user.update({
    where: {
      id: user?.id,
    },
    data: {
      weeklyActivity: { ...newUserActivity },
    },
  });

  return redirect(`/`);
};

export const loader: LoaderFunction = async () => {
  const lessons = await prisma.lesson.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  if (!lessons) {
    throw new Error("lesson not found");
  }

  return lessons;
};

export default function LessonScreen() {
  const steps = useLoaderData();

  return <Lesson steps={steps} />;
}
