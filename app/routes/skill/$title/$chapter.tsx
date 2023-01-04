import Skill from "~/modules/Skill";
import { getActiveLanguage } from "~/models/language.server";
import { getSkillByTitle, updateCurrentChapter } from "~/models/skill.server";
import { getTodayTotalXP, increaseTodayExp } from "~/models/user.server";
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
  const activeLanguage = await getActiveLanguage(request);

  if (!activeLanguage) {
    throw new Error("No active language found");
  }

  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const title = params.title as string;

  const skill = await getSkillByTitle(title, activeLanguage.id);

  if (!skill) {
    throw new Error(`Skill with this title: ${title} is underfined`);
  }

  await updateCurrentChapter(skill);

  await increaseTodayExp(request, expData);

  return redirect(`/${activeLanguage.title}/skills`);
};

export const loader = async ({ request, params }: LoaderArgs) => {
  const activeLanguage = await getActiveLanguage(request);

  if (!activeLanguage) {
    throw new Error(`No active language is found`);
  }

  const title = params.title as string;
  const chapter = Number(params.chapter as string);

  const steps = await getStepsForChapter(title, chapter, activeLanguage.id);

  const totalXP = await getTodayTotalXP(request);

  return json({ steps, totalXP });
};

export default function LessonScreen() {
  const { steps, totalXP } = useLoaderData<typeof loader>();

  return <Skill steps={steps} totalXP={totalXP} />;
}
