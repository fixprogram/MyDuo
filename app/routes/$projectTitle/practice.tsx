import { Fragment } from "react";
import { LoaderFunction, Outlet, useLoaderData } from "remix";
import { Main } from "~/components/lib";
import Menu from "~/components/Menu";
import Practice from "~/modules/Practice";
import styles from "~/styles/index.css";
import { getPracticeGoals, getUser } from "~/utils/session.server";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const goals = await getPracticeGoals(request);
  return { goals };
};

export default function PracticePage() {
  const { goals } = useLoaderData();

  return (
    <Practice goals={goals}>
      <Outlet />
    </Practice>
  );
}
