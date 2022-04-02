import {
  ActionFunction,
  LoaderFunction,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
} from "remix";
import styles from "~/styles/index.css";
import { getActiveProject, getUser } from "~/utils/session.server";
import { db } from "~/utils/db.server";
import { Link } from "react-router-dom";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await getUser(request);
  const activeProject = await getActiveProject(request);

  const data = await db.study.findMany({
    take: 20,
    where: { projectId: activeProject?.id },
    select: { id: true, title: true, content: true },
  });

  if (data.length > 0) {
    redirect(`/${activeProject?.title}/study/${data[0]?.title}`);
  }

  return { user, data, activeProject };
};

export const action: ActionFunction = async ({ request }) => {
  const project = await getActiveProject(request);
  const form = await request.formData();
  const title: any = form.get("title");
  const content: any = [];

  form.forEach((value, tag) => {
    if (tag === "space") {
      content.push({ tag: "div", value });
    } else if (tag !== "title") {
      content.push({ tag, value });
    }
  });

  await db.study.create({ data: { title, content, projectId: project?.id } });
  return redirect(`study/${title}`);
};

export default function StudyPage() {
  const { data, activeProject } = useLoaderData();
  return (
    <section style={{ display: "flex", width: "100%" }}>
      <div style={{ marginLeft: "calc(100vw / 100 * (-8))" }}>
        <h2>Sidebar</h2>
        <ul>
          {data?.map((item: any, idx: number) => (
            <NavLink
              to={`/${activeProject?.title}/study/${item?.title}`}
              key={idx}
            >
              {item?.title}
            </NavLink>
          ))}
        </ul>
        <Link to="new">New article</Link>
      </div>
      <Outlet />
    </section>
  );
}
