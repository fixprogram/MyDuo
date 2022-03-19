/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Outlet, useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";
import Menu from "~/components/Menu";
import Rating from "~/components/Rating";
import { LessonProgress, PracticeBlock } from "~/components/lib";
import styles from "~/styles/index.css";
import React from "react";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async () => {
  const data = await db.lesson.findMany({
    take: 20,
    select: { id: true, title: true, createdAt: true, exp: true },
    orderBy: { createdAt: "desc" },
  });
  return data;
};

export default function Lessons() {
  const lessons = useLoaderData();
  return (
    <React.Fragment>
      <Menu />
      <main
        css={{
          padding: "0 10%",
          marginTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <section css={{ width: "43%", marginLeft: "10%" }}>
          {lessons?.map(({ title, id, exp }, i) => (
            <PracticeBlock key={i}>
              <Link
                key={id}
                aria-labelledby={title}
                to={`/lesson/${id}`}
                css={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "33.33%",
                  textDecoration: "none",
                }}
              >
                <LessonProgress exp={exp}>{exp}%</LessonProgress>
                <b
                  css={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#3c3c3c",
                    textAlign: "center",
                    marginTop: 8,
                  }}
                >
                  {title}
                </b>
              </Link>
            </PracticeBlock>
          ))}
        </section>
        {/* <Rating /> */}
      </main>
      <Outlet />
    </React.Fragment>
  );
}
