import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { getActiveLanguage } from "~/models/language.server";
import { deleteLessonById, getTopics } from "~/models/lesson.server";
import PracticeLastAdded from "~/components/PracticeLastAdded";
import WeeklyProgress from "~/components/WeeklyProgress";
import { getUser } from "~/session.server";
import LessonItem from "~/components/LessonItem";
import { useLoaderData } from "@remix-run/react";
import { Topic, WeeklyActivity } from "@prisma/client";
import Footer from "~/components/Footer";

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
    languageTitle: activeLanguage.title,
  };
};

export default function Repeats() {
  const { data, activity, languageTitle } = useLoaderData() as {
    data: Topic[];
    activity: WeeklyActivity;
    languageTitle: string;
  };
  return (
    <section style={{ display: "flex", width: "100%", height: "fit-content" }}>
      <section style={{ width: "65%", padding: "0 30px" }}>
        <div>
          {data.map((dataItem, i: number) => (
            <LessonItem
              {...dataItem}
              editLink={`/${languageTitle}/constructor/${dataItem.id}`}
              key={dataItem.id}
            />
          ))}

          {data.length > 0 && <PracticeLastAdded />}
        </div>
        <Footer />
      </section>
      <WeeklyProgress activity={activity} />
    </section>
  );
}
