import { redirect, useLoaderData, useParams } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { prisma } from "~/db.server";
import Lesson from "~/modules/Lesson";
import { getActiveLanguage } from "~/models/language.server";
import { updateCurrentChapter } from "~/models/skill.server";
import { increaseTodayExp } from "~/models/user.server";

export function ErrorBoundary() {
  const { title, chapter } = useParams();
  return (
    <div className="error-container">{`There was an error loading skill with the title ${title} and chapter ${chapter}. Sorry.`}</div>
  );
}

export const action: ActionFunction = async ({ request, params }) => {
  const language = await getActiveLanguage(request);
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const title = params.title;

  const skill = await prisma.skill.findUnique({
    where: { title },
  });

  if (!skill) {
    throw new Error(`Skill with this title: ${title} is underfined`);
  }

  await updateCurrentChapter(skill);

  await increaseTodayExp(request, expData);

  return redirect(`/${language?.title}/skills`);
};

export const loader: LoaderFunction = async ({ params }) => {
  const skill = await prisma.skill.findFirst({
    where: { title: params.title },
  });

  if (!skill) {
    throw new Error("Skill is not found");
  }

  const lessons = await prisma.lesson.findMany({
    where: { id: { in: skill.lessonIDs }, chapter: Number(params.chapter) },
  });

  return lessons;
};

export default function LessonScreen() {
  const steps = useLoaderData();

  return <Lesson steps={steps} />;
}
