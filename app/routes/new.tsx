/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { NavLink, Outlet } from "remix";
import { Fragment } from "react";
import Menu from "~/components/Menu";
import styles from "~/styles/index.css";
import { Link } from "react-router-dom";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const forms = [
  {
    title: "Lesson form",
    link: "new-lesson",
  },
  {
    title: "Story form",
    link: "new-story",
  },
];

export default function New() {
  return (
    <Fragment>
      <Menu />
      <main
        css={{
          padding: "0 10%",
          display: "flex",
        }}
      >
        <Outlet />

        <div
          css={{ marginLeft: 100, display: "flex", flexDirection: "column" }}
        >
          Saved Forms
          {forms.map((item) => (
            <NavLink to={item.link} key={item.title}>
              {item.title}
            </NavLink>
          ))}
        </div>
      </main>
    </Fragment>
  );
}
