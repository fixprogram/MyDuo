/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useLoaderData, Link, Outlet } from "remix";
import type { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";
import Menu from "~/components/Menu";
import {
  LessonProgress,
  LessonTitle,
  Main,
  PracticeBlock,
} from "~/components/lib";
import styles from "~/styles/index.css";
import React from "react";
import { getUser } from "~/utils/session.server";

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies.</div>;
}

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  const data = await db.repeat.findMany({
    take: 20,
    where: { userId: user.id },
    select: { id: true, title: true, createdAt: true, exp: true },
    orderBy: { createdAt: "desc" },
  });
  return { data, user };
};

export default function Repeats() {
  const { data, user } = useLoaderData();
  return (
    <React.Fragment>
      <Menu user={user} />
      <Main>
        <section css={{ width: "43%", marginLeft: "10%" }}>
          {data?.map(({ title, id, exp }, i) => (
            <PracticeBlock key={i}>
              <Link
                key={id}
                aria-labelledby={title}
                to={`/repeat/${id}`}
                css={{
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
          ))}
        </section>
      </Main>
    </React.Fragment>
  );
}
