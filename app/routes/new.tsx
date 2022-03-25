/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { LoaderFunction, NavLink, Outlet, useLoaderData } from "remix";
import { Fragment } from "react";
import Menu from "~/components/Menu";
import styles from "~/styles/index.css";
import { Main } from "~/components/lib";
import Forms from "~/components/Forms";
import { getUser } from "~/utils/session.server";

export function ErrorBoundary() {
  return (
    <div className="error-container">
      Something unexpected went wrong. Sorry about that.
    </div>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const forms = [
  {
    title: "Repeat form",
    link: "new-repeat",
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return { user };
};

export default function New() {
  const { user } = useLoaderData();

  return (
    <Fragment>
      <Menu user={user} />
      <Main>
        <Outlet />

        {/* <Forms>
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
        </Forms> */}
      </Main>
    </Fragment>
  );
}
