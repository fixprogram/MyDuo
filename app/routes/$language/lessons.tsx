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
import styles from "~/styles/index.css";
import { getActiveLanguage } from "~/models/language.server";
import { deleteLessonById, getLessons } from "~/models/lesson.server";
import { useEffect, useState } from "react";
import Bin from "~/styles/bin.svg";

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies.</div>;
}

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const id: any = data.get("lessonId");

  if (!id) {
    throw new Error("Lesson ID wasnt found");
  }

  return await deleteLessonById(id);
};

export const loader: LoaderFunction = async ({ request }) => {
  const activeLanguage = await getActiveLanguage(request);

  if (!activeLanguage) {
    throw new Error(`We could not find the active language`);
  }

  const data = await getLessons(activeLanguage.id);
  return { data, languageIitle: activeLanguage.title };
};

export default function Repeats() {
  const { data, languageIitle } = useLoaderData();
  const [openedLesson, setOpenedLesson] = useState(-1);
  const transition = useTransition();
  const isDisabled = transition.state !== "idle";

  useEffect(() => {
    if (transition.state === "loading") {
      setOpenedLesson(-1);
    }
  }, [transition.state]);

  return (
    <section style={{ width: "43%", marginLeft: "10%" }}>
      {data?.map(
        (
          { title, id, exp }: { title: string; id: string; exp: string },
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
              <LessonProgress exp={exp}>
                <LessonProgressInner>{`${exp}%`}</LessonProgressInner>
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
                <LessonBlockLink to={`/lesson/${id}`}>
                  Start +16 XP
                </LessonBlockLink>
              </LessonBlockInner>
            </LessonBlockMenu>
          </LessonBlock>
        )
      )}
    </section>
  );
}
