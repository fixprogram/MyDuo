import { LoaderFunction, redirect } from "@remix-run/node";
import { useState } from "react";
import { Outlet, useLoaderData } from "remix";
import { Main, Overlay } from "~/components/lib";
import Menu from "~/components/Menu";
import {
  createNewLanguage,
  getLanguages,
  setActiveLanguage,
} from "~/models/language.server";
import { getLastActivity } from "~/models/lesson.server";
import { updateUserStreak } from "~/models/user.server";
import { getUser } from "~/session.server";
import styles from "~/styles/index.css";
import { getTodayDate } from "~/utils";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export async function action({ request }: { request: Request }) {
  const form = await request.formData();
  const id = form.get("id") as string;
  const newLanguage = form.get("newLanguage") as string;
  let project;
  if (newLanguage?.length > 0) {
    project = await createNewLanguage(request, newLanguage);
  } else {
    project = await setActiveLanguage(id);
  }

  return redirect(`/${project?.title}/skills`);
}

export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUser(request);
  const languages = await getLanguages(request);
  const activeLanguage = languages?.find((item) => item.active);
  const today = getTodayDate();

  if (!user) {
    return redirect("/login");
  }

  if (!activeLanguage) {
    throw new Error("Active language wasnt found");
  }

  const lastActive = await getLastActivity(request);
  if (today - lastActive > 1 || lastActive === 0) {
    user = await updateUserStreak(user.id, false, 0);
    return { user, languages };
  }

  if (today - lastActive === 1) {
    user = await updateUserStreak(user.id, false, user.streak);
    return { user, languages };
  }

  if (!user.wasToday && lastActive === today) {
    user = await updateUserStreak(user.id, true, user.streak + 1);
    return { user, languages };
  }

  if (user.wasToday) {
    return { user, languages };
  }

  if (!languages) {
    throw new Error("languages are not found");
  }

  return { user, languages };
};

export default function ProjectPage() {
  const { user, languages } = useLoaderData();
  const [isOverlay, setIsOverlay] = useState(false);
  return (
    <>
      <Menu user={user} languages={languages} onOverlay={setIsOverlay} />
      <Main>
        <Outlet />
      </Main>
      <Overlay active={isOverlay} />
    </>
  );
}
