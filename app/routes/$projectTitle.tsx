import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import React, { createContext } from "react";
import { Outlet, useLoaderData } from "remix";
import { Main } from "~/components/lib";
import Menu from "~/components/Menu";
import { db } from "~/utils/db.server";
import { getUser, getProjects, setActiveProject } from "~/utils/session.server";

export async function action({ request }) {
  const form = await request.formData();
  const id = form.get("id");
  const project = await setActiveProject(id);

  return redirect(`/${project.title}/repeats`);
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  const projects = await getProjects(request);

  if (!user) {
    return redirect("/login");
  }

  if (!projects) {
    throw new Error("Projects are not found");
  }

  return { user, projects };
};

export const ProjectContext = createContext({});

export default function ProjectPage() {
  const { user, projects } = useLoaderData();
  const activeProject = projects.find((project) => project.active);
  const value = { activeProject, projects };
  return (
    <React.Fragment>
      <ProjectContext.Provider value={value}>
        <Menu user={user} projects={projects} />
        <Main>
          <Outlet />
        </Main>
      </ProjectContext.Provider>
    </React.Fragment>
  );
}
