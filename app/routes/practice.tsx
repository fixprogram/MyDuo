import { prisma } from "~/db.server";
import Lesson from "~/modules/Skill";
import { getUser } from "~/session.server";
import { User, WeeklyActivity } from "@prisma/client";
import { getWeekDay } from "~/utils";
import { ActionArgs, json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { getLessonsForPracticing } from "~/models/lesson.server";
import { getActiveLanguage } from "~/models/language.server";

export function ErrorBoundary() {
  const { lessonId } = useParams();
  return (
    <div className="error-container">{`There was an error loading lesson by the id ${lessonId}. Sorry.`}</div>
  );
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  const today = getWeekDay() as keyof WeeklyActivity;

  const newUserActivity = user.weeklyActivity;
  newUserActivity[today] = newUserActivity[today] + 10;

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

export const loader = async ({ request }: LoaderArgs) => {
  const activeLanguage = await getActiveLanguage(request);

  if (!activeLanguage) {
    return new Error(`No active language has found`);
  }

  const lessons = await getLessonsForPracticing(activeLanguage.id);

  if (!lessons) {
    throw new Error("Lessons for practicing are not found");
  }

  return json({ lessons });
};

export default function LessonScreen() {
  const { lessons } = useLoaderData<typeof loader>();

  return <Lesson lessons={lessons} />;
}
