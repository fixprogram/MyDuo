import {
  ActionFunction,
  LoaderFunction,
  Outlet,
  redirect,
  useLoaderData,
} from "remix";
import Practice from "~/modules/Practice";
import styles from "~/styles/index.css";
import { getPracticeGoals, setGoals } from "~/utils/session.server";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const action: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const form = await request.formData();
  const goals = form.getAll("goal");

  const practice = await setGoals(request, goals);
  return redirect(`/`);
};

export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}) => {
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
