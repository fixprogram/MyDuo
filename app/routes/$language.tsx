import { LoaderFunction, redirect } from "@remix-run/node";
import React, { useState } from "react";
import { Outlet, useLoaderData } from "remix";
import { Main, Overlay } from "~/components/lib";
import Menu from "~/components/Menu";
import {
  createNewLanguage,
  getLanguages,
  setActiveLanguage,
} from "~/models/language.server";
import { getLastActiveLesson } from "~/models/lesson.server";
import { updateUserStreak } from "~/models/user.server";
import { getUser } from "~/session.server";

export async function action({ request }: { request: Request }) {
  const form = await request.formData();
  const id = form.get("id") as string;
  const newLanguage: any = form.get("newLanguage");
  let project;
  if (newLanguage?.length > 0) {
    project = await createNewLanguage(request, newLanguage);
  } else {
    project = await setActiveLanguage(id);
  }

  return redirect(`/${project?.title}/lessons`);
}

export const loader: LoaderFunction = async ({ request }) => {
  const today = new Date();
  let user = await getUser(request);
  const languages = await getLanguages(request);
  const activeLanguage = languages?.find((item: any) => item.active);

  if (!user) {
    return redirect("/login");
  }

  if (!activeLanguage) {
    throw new Error("Active language wasnt found");
  }

  const lastActive = await getLastActiveLesson(activeLanguage.id);
  if (!lastActive) {
    user = await updateUserStreak(user.id, false, 0);
  }

  if (Number(lastActive?.updatedAt) === today.getDate() - 1) {
    user = await updateUserStreak(user.id, false, user.streak);
    return { user, languages };
  }

  if (!user?.wasToday && Number(lastActive?.updatedAt) === today.getDate()) {
    user = await updateUserStreak(user.id, true, user.streak + 1);
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
    <React.Fragment>
      <Menu user={user} languages={languages} onOverlay={setIsOverlay} />
      <Main>
        <Outlet />
      </Main>
      <Overlay active={isOverlay} />
    </React.Fragment>
  );
}
