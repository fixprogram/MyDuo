import { useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import { LessonProgress, LessonTitle, PracticeBlock } from "~/components/lib";
import styles from "~/styles/index.css";
import { getActiveLanguage } from "~/models/language.server";
import { getLessons } from "~/models/lesson.server";

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies.</div>;
}

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const activeLanguage = await getActiveLanguage(request);
  const data = await getLessons(activeLanguage?.id);
  return data;
};

export default function Repeats() {
  const data = useLoaderData();
  return (
    <section style={{ width: "43%", marginLeft: "10%" }}>
      {data?.map(
        (
          { title, id, exp }: { title: string; id: string; exp: string },
          i: number
        ) => (
          <PracticeBlock key={i}>
            <Link
              key={id}
              aria-labelledby={title}
              to={`/lesson/${id}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "33.33%",
                textDecoration: "none",
              }}
            >
              <LessonProgress exp={exp}>{exp}%</LessonProgress>
              <LessonTitle>{title}</LessonTitle>
            </Link>
          </PracticeBlock>
        )
      )}
    </section>
  );
}
