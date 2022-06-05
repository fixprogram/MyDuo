import { redirect } from "remix";
import { getUser } from "~/session.server";
import { getLanguages } from "~/models/language.server";

export const loader = async ({ request }: { request: Request }) => {
  const user = await getUser(request);
  if (!user) {
    return redirect("/login");
  }

  const languages = await getLanguages(request);
  const activeLanguageTitle = languages?.find((it) => it.active)?.title;

  return redirect(`/${activeLanguageTitle}/skills`);
};
