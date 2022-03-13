/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { Link, useLoaderData } from "remix";
import { PracticeBlock } from "~/components/lib";
import Menu from "~/components/Menu";
import styles from "~/styles/index.css";
import type { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async () => {
  const data = await db.story.findMany({
    take: 20,
    select: { id: true, title: true, description: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });
  return data;
};

export default function Stories() {
  const data = useLoaderData();
  return (
    <Fragment>
      <Menu />
      <main
        css={{
          padding: "0 250px",
        }}
      >
        <section
          css={{
            padding: "0",
            margin: "0 auto",
            maxWidth: "688px",
            marginTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          {data.map(
            ({ id, title }: { id: string; title: string }, i: number) => (
              <PracticeBlock key={i}>
                {/* <PracticeBlockTitle> */}
                {/* <span></span> <h2></h2> <span></span> */}
                {/* {item.timeToRepeat < new Date().getTime()
              ? "It is time to repeat"
              : null} */}
                {/* </PracticeBlockTitle> */}
                <Link
                  key={id}
                  aria-labelledby={title}
                  to={`/story/${id}`}
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
            )
          )}
        </section>
      </main>
    </Fragment>
  );
}
