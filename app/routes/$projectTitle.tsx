import { LoaderFunction, redirect } from "@remix-run/node";
import React, { createContext } from "react";
import { Outlet, useLoaderData } from "remix";
import { Main } from "~/components/lib";
import Menu from "~/components/Menu";
import {
  getUser,
  getProjects,
  setActiveProject,
  createNewProject,
} from "~/utils/session.server";

export async function action({ request }) {
  const form = await request.formData();
  const id = form.get("id");
  const newProject = form.get("newProject");
  let project;
  if (newProject.length > 0) {
    project = await createNewProject(request, newProject);
  } else {
    project = await setActiveProject(id);
  }

  return redirect(`/${project?.title}/repeats`);
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
  // const activeProject = projects.find((project: any) => project.active);
  return (
    <React.Fragment>
      {/* <ProjectContext.Provider value={{ activeProject, projects }}> */}
      <ProjectContext.Provider value={{ projects }}>
        <Menu user={user} />
        <Main>
          <Outlet />
        </Main>
      </ProjectContext.Provider>
    </React.Fragment>
  );
}
