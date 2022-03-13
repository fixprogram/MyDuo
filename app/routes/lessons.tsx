/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Outlet, useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";
import Menu from "~/components/Menu";
import Rating from "~/components/Rating";
import { PracticeBlock } from "~/components/lib";
import styles from "~/styles/index.css";
import React from "react";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async () => {
  const data = await db.lesson.findMany({
    take: 20,
    select: { id: true, title: true, createdAt: true },
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
          {lessons?.map(({ title, id }, i) => (
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
                <div
                  css={{
                    width: "117px",
                    height: "117px",
                    backgroundColor: "#AFAFAF",
                  }}
                ></div>
                <b
                  css={{
                    fontSize: "17px",
                    color: "#4b4b4b",
                    textAlign: "center",
                  }}
                >
                  {title}
                </b>
                <span
                  css={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    letterSpacing: 0.4,
                    color: "#AFAFAF",
                  }}
                >
                  +{16} XP
                </span>
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
