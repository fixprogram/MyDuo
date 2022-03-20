/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { NavLink, Outlet } from "remix";
import { Fragment } from "react";
import Menu from "~/components/Menu";
import styles from "~/styles/index.css";
import { Link } from "react-router-dom";
import { Main } from "~/components/lib";
import Forms from "~/components/Forms";

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
      <Main>
        <Outlet />

        <Forms>
          <ul>
            {forms.map((item) => (
              <li key={item.title} css={{ borderRadius: 16, marginBottom: 2 }}>
                <NavLink
                  to={item.link}
                  css={{
                    color: "#3c3c3c",
                    display: "block",
                    fontSize: "16px",
                    fontWeight: 700,
                    overflow: "hidden",
                    padding: "15px 20px",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <NavLink to={""}>Create a new form</NavLink>
          </ul>
        </Forms>
      </Main>
    </Fragment>
  );
}
