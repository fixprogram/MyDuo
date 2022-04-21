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

  const lesson = await prisma.lesson.findUnique({
    where: { id },
  });

  if (!lesson) {
    throw new Error(`Lesson with this id: ${id} is underfined`);
  }

  await prisma.lesson.update({
    where: {
      id,
    },
    data: {
      exp: lesson.exp + expData,
      updatedAt: today.getDate().toString(),
    },
  });

  return redirect(`/${language?.title}/lessons`);
};

export const loader: LoaderFunction = async ({ params }) => {
  const lesson = await prisma.lesson.findUnique({
    where: { id: params.lessonId },
  });

  if (!lesson) {
    throw new Error("lesson not found");
  }

  const data = { lesson };
  return data;
};

export default function LessonScreen() {
  const { lesson } = useLoaderData();

  return <Lesson data={lesson} />;
}
