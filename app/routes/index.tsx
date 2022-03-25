import { redirect, useLoaderData } from "remix";
import { getUser } from "~/utils/session.server";

export const loader = async ({ request }) => {
  const user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  return redirect("/repeats");
};

export default function Index() {
  useLoaderData();
  return <div></div>;
}
