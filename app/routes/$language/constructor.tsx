import { json, redirect, Response } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { getActiveLanguage } from "~/models/language.server";
import { getUser } from "~/session.server";
import { Outlet, useLoaderData } from "@remix-run/react";

export function ErrorBoundary() {
  return (
    <div className="error-container">
      Issues during loading Constructor route
    </div>
  );
}

export const loader = async ({ request }: LoaderArgs) => {
  const activeLanguage = await getActiveLanguage(request);
  const user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  if (!activeLanguage) {
    throw new Response(`We could not find the active language`, {
      status: 404,
    });
  }

  //   const skills = await getSkills(activeLanguage.id);
  return json({});
};

export default function Constructor() {
  const {} = useLoaderData<typeof loader>();

  return (
    <section style={{ width: "100%" }}>
      <Outlet />
    </section>
  );
}
