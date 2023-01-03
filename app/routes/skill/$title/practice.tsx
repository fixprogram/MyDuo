import { prisma } from "~/db.server";
import Lesson from "~/modules/Skill";
import { getActiveLanguage } from "~/models/language.server";
import { increaseTodayExp } from "~/models/user.server";
import { updateCurrentChapter } from "~/models/skill.server";
import { useCatch, useLoaderData, useParams } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { ErrorMessage } from "~/components/lib";

export const action = async ({ request, params }: ActionArgs) => {
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

export const loader = async ({ params }: LoaderArgs) => {
  const skill = await prisma.skill.findUnique({
    where: { title: params.title },
  });

  if (!skill) {
    throw new Response("Skill is not found", { status: 404 });
  }

  const lessons = await prisma.lesson.findMany({
    where: { id: { in: skill.lessonIDs } },
    select: { createdAt: false, updatedAt: false },
  });

  console.log("Lessons: ", lessons);

  return json({ lessons });
};

export default function LessonScreen() {
  const { lessons } = useLoaderData<typeof loader>();

  return <Lesson lessons={lessons} />;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <ErrorMessage>{caught.statusText}</ErrorMessage>;
  }
}

export function ErrorBoundary() {
  const { title } = useParams();
  return (
    <div className="error-container">{`There was an error loading skill by the title ${title}. Sorry.`}</div>
  );
}
