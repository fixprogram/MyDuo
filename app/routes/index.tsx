import { redirect, useLoaderData } from "remix";
import { getProjects, getUser } from "~/utils/session.server";

export const loader = async ({ request }) => {
  const user = await getUser(request);
  const projects = await getProjects(request);

  if (!user) {
    return redirect("/login");
  }

  return redirect(`/${projects?.find((it) => it.active)?.title}/repeats`);
};

export default function Index() {
  useLoaderData();
  return <div></div>;
}
