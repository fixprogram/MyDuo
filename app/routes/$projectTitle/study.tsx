import { Fragment, useContext } from "react";
import {
  ActionFunction,
  LoaderFunction,
  Outlet,
  redirect,
  useLoaderData,
} from "remix";
import { Main } from "~/components/lib";
import Menu from "~/components/Menu";
import styles from "~/styles/index.css";
import {
  getActiveProject,
  getProjects,
  getUser,
  requireUserId,
} from "~/utils/session.server";
import Study from "~/modules/Study";
import { db } from "~/utils/db.server";
import { ProjectContext } from "../$projectTitle";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await getUser(request);
  // const project = await getProject(request);
  // const study = await db.study.findUnique({ // Use this one once you have params links inside Study
  //   where: { id: user.userId },
  // });
  const activeProject = await getActiveProject(request);

  const data = await db.study.findMany({
    take: 20,
    where: { projectId: activeProject.id },
    select: { id: true, title: true, content: true },
  });

  // if (!study) {
  //   throw new Error("Study not found");
  // }

  // const data = { study };
  return { user, data };
};

export const action: ActionFunction = async ({ request }) => {
  // const userId = await requireUserId(request);
  const project = await getActiveProject(request);
  const form = await request.formData();
  const title = form.get("title"); // Getting the repeat title
  const content: any = [];

  form.forEach((value, tag) => {
    if (tag === "space") {
      content.push({ tag: "div", value });
    } else if (tag !== "title") {
      content.push({ tag, value });
    }
  });

  const data = { title, content, projectId: project.id };
  const study = await db.study.create({ data });
  return redirect(`study`);
};

export default function StudyPage() {
  const { data } = useLoaderData();
  return (
    // <Fragment>
    //   <Menu user={user} projects={project} />
    //   <Main>
    <Study data={data}>
      <Outlet />
    </Study>
    //   </Main>
    // </Fragment>
  );
}