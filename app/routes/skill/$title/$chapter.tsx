import Skill from "~/modules/Skill";
import { getActiveLanguage } from "~/models/language.server";
import { getSkillByTitle, updateCurrentChapter } from "~/models/skill.server";
import { increaseTodayExp } from "~/models/user.server";
import { useLoaderData, useParams } from "@remix-run/react";
import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { getStepsForChapter } from "~/models/lesson.server";

export function ErrorBoundary() {
  const { title, chapter } = useParams();
  return (
    <div className="error-container">{`There was an error loading skill with the title ${title} and chapter ${chapter}. Sorry.`}</div>
  );
}

export const action = async ({ request, params }: ActionArgs) => {
  const language = await getActiveLanguage(request);
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const title = params.title as string;

  const skill = await getSkillByTitle(title);

  if (!skill) {
    throw new Error(`Skill with this title: ${title} is underfined`);
  }

  await updateCurrentChapter(skill);

  await increaseTodayExp(request, expData);

  return redirect(`/${language?.title}/skills`);
};

export const loader = async ({ params }: LoaderArgs) => {
  const title = params.title as string;
  const chapter = Number(params.chapter as string);

  const steps = await getStepsForChapter(title, chapter);

  return json({ steps });
};

export default function LessonScreen() {
  const { steps } = useLoaderData<typeof loader>();

  return <Skill steps={steps} />;
}
