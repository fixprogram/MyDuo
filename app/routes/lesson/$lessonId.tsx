import { redirect, useLoaderData, useParams } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { prisma } from "~/db.server";
import Lesson from "~/modules/Lesson";
import { getActiveLanguage } from "~/models/language.server";

export function ErrorBoundary() {
  const { lessonId } = useParams();
  return (
    <div className="error-container">{`There was an error loading lesson by the id ${lessonId}. Sorry.`}</div>
  );
}

export const action: ActionFunction = async ({ request, params }) => {
  const today = new Date();
  const language = await getActiveLanguage(request);
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const id = params.lessonId;

  const topic = await prisma.topic.findUnique({
    where: { id },
  });

  if (!topic) {
    throw new Error(`Topic with this id: ${id} is underfined`);
  }

  await prisma.topic.update({
    where: {
      id,
    },
    data: {
      currentChapter:
        topic.chapters !== topic.currentChapter
          ? topic.currentChapter + 1
          : topic.currentChapter,
      updatedAt: today.getDate().toString(),
    },
  });

  return redirect(`/${language?.title}/lessons`);
};

export const loader: LoaderFunction = async ({ params }) => {
  const topic = await prisma.topic.findUnique({
    where: { id: params.lessonId },
  });

  if (!topic) {
    throw new Error("lesson not found");
  }

  const lessons = await prisma.lesson.findMany({
    where: { id: { in: topic.lessonIDs } },
  });

  return lessons;
};

export default function LessonScreen() {
  const steps = useLoaderData();

  return <Lesson steps={steps} />;
}
