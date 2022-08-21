import { redirect } from "remix";
import { getUser } from "~/session.server";
import { getLanguages } from "~/models/language.server";

export const loader = async ({ request }: { request: Request }) => {
  // const user = await getUser(request);
  // if (!user) {
  //   return redirect("/login");
  // }

  return redirect(`/main`);
};
