import { useLoaderData, ActionFunction } from "remix";
import type { LoaderFunction } from "remix";
import { getActiveLanguage } from "~/models/language.server";
import { deleteLessonById, getTopics } from "~/models/lesson.server";
import PracticeLastAdded from "~/components/PracticeLastAdded";
import WeeklyProgress from "~/components/WeeklyProgress";
import { getUser } from "~/session.server";
import { Topic, WeeklyActivity } from "@prisma/client";
import LessonItem from "~/components/LessonItem";

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies.</div>;
}

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("lessonId") as string;

  if (!id) {
    throw new Error("Lesson ID wasnt found");
  }

  return await deleteLessonById(id);
};

export const loader: LoaderFunction = async ({ request }) => {
  const activeLanguage = await getActiveLanguage(request);
  const user = await getUser(request);

  if (!activeLanguage) {
    throw new Error(`We could not find the active language`);
  }

  const data = await getTopics(activeLanguage.id);
  return {
    data,
    activity: user?.weeklyActivity,
    languageIitle: activeLanguage.title,
  };
};

export default function Repeats() {
  const { data, activity, languageTitle } = useLoaderData() as {
    data: Topic[];
    activity: WeeklyActivity;
    languageTitle: string;
  };
  return (
    <main style={{ display: "flex", width: "100%" }}>
      <section style={{ width: "43%", marginLeft: "10%" }}>
        {data.map((dataItem, i: number) => (
          <LessonItem
            {...dataItem}
            link={`/${languageTitle}/constructor/${dataItem.id}`}
            key={dataItem.id}
          />
        ))}

        {data.length > 0 && <PracticeLastAdded />}
      </section>
      <WeeklyProgress activity={activity} />
    </main>
  );
}
