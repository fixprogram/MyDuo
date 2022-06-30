import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { getActiveLanguage } from "~/models/language.server";
import {
  deleteSkillById,
  deleteLessonsFromSkill,
  getSkills,
} from "~/models/lesson.server";
import WeeklyProgress from "~/components/WeeklyProgress";
import { getUser } from "~/session.server";
import { useLoaderData } from "@remix-run/react";
import { Skill, WeeklyActivity } from "@prisma/client";
import SkillsList from "~/components/SkillsList";

export function ErrorBoundary() {
  return (
    <div className="error-container">Issues during loading Skills route</div>
  );
}

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("lessonId") as string;

  if (!id) {
    throw new Error("Lesson ID wasnt found");
  }

  await deleteLessonsFromSkill(id as string);
  return await deleteSkillById(id);
};

export const loader: LoaderFunction = async ({ request }) => {
  const activeLanguage = await getActiveLanguage(request);
  const user = await getUser(request);

  if (!activeLanguage) {
    throw new Error(`We could not find the active language`);
  }

  const skills = await getSkills(activeLanguage.id);
  return {
    skills,
    activity: user?.weeklyActivity,
    languageTitle: activeLanguage.title,
  };
};

export default function SkillsPage() {
  const { skills, activity, languageTitle } = useLoaderData() as {
    skills: Skill[];
    activity: WeeklyActivity;
    languageTitle: string;
  };

  return (
    <section style={{ display: "flex", width: "100%" }}>
      <SkillsList skills={skills} languageTitle={languageTitle} />
      <WeeklyProgress activity={activity} />
    </section>
  );
}
