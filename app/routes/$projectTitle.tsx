import { LoaderFunction, redirect } from "@remix-run/node";
import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "remix";
import { Main, Overlay } from "~/components/lib";
import Menu from "~/components/Menu";
import {
  getUser,
  getProjects,
  setActiveProject,
  createNewProject,
} from "~/utils/session.server";

export async function action({ request }: { request: Request }) {
  const form = await request.formData();
  console.log("FORM: ", form);
  const id = form.get("id");
  const newProject = form.get("newProject");
  let project;
  if (newProject?.length > 0) {
    project = await createNewProject(request, newProject);
  } else {
    console.log("Set new Active Project");
    console.log("ID: ", id);
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
  const [isOverlay, setIsOverlay] = useState(false);
  // const activeProject = projects.find((project: any) => project.active);
  return (
    <React.Fragment>
      <ProjectContext.Provider value={{ projects }}>
        <Menu user={user} onOverlay={setIsOverlay} />
        <Main>
          <Outlet />
        </Main>
        <Overlay active={isOverlay} />
      </ProjectContext.Provider>
    </React.Fragment>
  );
}
