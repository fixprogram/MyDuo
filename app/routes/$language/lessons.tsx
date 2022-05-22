import { useLoaderData, Form, ActionFunction, useTransition } from "remix";
import type { LoaderFunction } from "remix";
import {
  LessonProgress,
  LessonProgressInner,
  LessonTitle,
  LessonBlock,
  LessonBlockLink,
  LessonBlockInner,
  LessonBlockMenuTriangleContent,
  LessonBlockMenuTriangle,
  LessonBlockMenu,
  LessonBlockButton,
} from "~/components/lib";
import { getActiveLanguage } from "~/models/language.server";
// import { deleteLessonById, getLessons } from "~/models/lesson.server";
import { deleteLessonById, getTopics } from "~/models/lesson.server";
import { Fragment, useEffect, useState } from "react";
import Bin from "~/styles/bin.svg";
import PracticeLastAdded from "~/components/PracticeLastAdded";
import WeeklyProgress from "~/components/WeeklyProgress";
import { getUser } from "~/session.server";

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
  const { data, activity, languageIitle } = useLoaderData();
  const [openedLesson, setOpenedLesson] = useState(-1);
  const transition = useTransition();
  const isDisabled = transition.state !== "idle";

  useEffect(() => {
    if (transition.state === "loading") {
      setOpenedLesson(-1);
    }
  }, [transition.state]);

  return (
    <main style={{ display: "flex", width: "100%" }}>
      <section style={{ width: "43%", marginLeft: "10%" }}>
        {data?.map(
          (
            {
              title,
              id,
              chapters,
              currentChapter,
            }: {
              title: string;
              id: string;
              chapters: number;
              currentChapter: number;
            },
            i: number
          ) => (
            <LessonBlock key={i}>
              <button
                key={id}
                aria-labelledby={title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "33.33%",
                  textDecoration: "none",
                }}
                onClick={() => {
                  if (openedLesson !== i) {
                    return setOpenedLesson(i);
                  }
                  return setOpenedLesson(-1);
                }}
              >
                <LessonProgress
                  exp={((currentChapter / chapters) * 100).toString()}
                >
                  <LessonProgressInner>{`${
                    (currentChapter / chapters) * 100
                  }%`}</LessonProgressInner>
                </LessonProgress>
                <LessonTitle>{title}</LessonTitle>
              </button>
              <LessonBlockMenu isOpened={openedLesson === i}>
                <LessonBlockMenuTriangle>
                  <LessonBlockMenuTriangleContent />
                </LessonBlockMenuTriangle>
                <LessonBlockInner>
                  <div style={{ display: "flex" }}>
                    <LessonBlockLink to={`/${languageIitle}/constructor/${id}`}>
                      Edit
                    </LessonBlockLink>
                    <Form method="post">
                      <input type="hidden" name="lessonId" value={id} />
                      <LessonBlockButton type="submit" disabled={isDisabled}>
                        <img src={Bin} alt="delete" width={20} height={20} />
                      </LessonBlockButton>
                    </Form>
                  </div>
                  {/* If the topic is 100% done, then we just repeat all lessons from it */}
                  {/* Otherwise we study lessons only from next chapter */}
                  <LessonBlockLink
                    to={`/skill/${title}/${
                      currentChapter / chapters === 1
                        ? "practice"
                        : currentChapter + 1
                    }`}
                  >
                    Start +16 XP
                  </LessonBlockLink>
                </LessonBlockInner>
              </LessonBlockMenu>
            </LessonBlock>
          )
        )}

        {data.length > 0 && <PracticeLastAdded />}
      </section>
      <WeeklyProgress activity={activity} />
    </main>
  );
}
