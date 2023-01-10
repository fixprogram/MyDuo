import { json, redirect, Response } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Outlet, useCatch, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { ErrorMessage, Main, Overlay } from "~/components/lib";
import Menu from "~/components/Menu";
import {
  createNewLanguage,
  getLanguages,
  setActiveLanguage,
} from "~/models/language.server";
import { getLastActivity, updateUserStreak } from "~/models/user.server";
import { getUser } from "~/session.server";
import styles from "~/styles/index.css";
import { getTodayDate } from "~/utils";
import Navigation from "~/components/Navigation";
import { PHONE_MEDIA_MAX } from "~/constants";
import useMediaQuery from "~/hooks/useMediaQuery";

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

export const loader = async ({ request }: LoaderArgs) => {
  let user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  const userData = { streak: user.streak, wasToday: user.wasToday };
  const languages = await getLanguages(request);

  if (!languages) {
    throw new Response("No languages were found", { status: 404 });
  }

  const activeLanguage = languages.find((item) => item.active);
  const today = getTodayDate();

  if (!activeLanguage) {
    throw new Response(`Active language wasn't found`, { status: 404 });
  }

  // Check if we just on language page (doesn't exist), then we automatically redirect to skills list
  const onLanguagePage = request.url.split("/").at(-1) === activeLanguage.title;
  if (onLanguagePage) {
    return redirect(`/${activeLanguage.title}/skills`);
  }

  const lastActive = await getLastActivity(request);
  if (today - lastActive > 1 || lastActive === 0) {
    user = await updateUserStreak(user.id, false, 0);
    return json({ userData, languages });
  }

  if (today - lastActive === 1) {
    user = await updateUserStreak(user.id, false, user.streak);
    return json({ userData, languages });
  }

  if (!user.wasToday && lastActive === today) {
    user = await updateUserStreak(user.id, true, user.streak + 1);
    return json({ userData, languages });
  }

  if (user.wasToday) {
    return json({ userData, languages });
  }

  return json({ userData, languages });
};

export default function LanguagePage() {
  const { userData, languages } = useLoaderData<typeof loader>();
  const [isOverlay, setIsOverlay] = useState(false);

  const matches = useMediaQuery(`(max-width: ${PHONE_MEDIA_MAX}px)`);

  return (
    <>
      <Menu
        userData={userData}
        languages={languages}
        onOverlay={setIsOverlay}
      />
      <Main>
        <Outlet />
      </Main>

      {matches ? <Navigation /> : null}
      <Overlay active={isOverlay} />
    </>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <ErrorMessage>{caught.statusText}</ErrorMessage>;
  }

  return new Error("Something went wrong in language route");
}
