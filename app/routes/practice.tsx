import { Fragment } from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { Main } from "~/components/lib";
import Menu from "~/components/Menu";
import Practice from "~/modules/Practice";
import styles from "~/styles/index.css";
import { getUser } from "~/utils/session.server";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return { user };
};

export default function PracticePage() {
  const { user } = useLoaderData();

  return (
    <Fragment>
      <Menu user={user} />
      <Main>
        <Practice />
      </Main>
    </Fragment>
  );
}
