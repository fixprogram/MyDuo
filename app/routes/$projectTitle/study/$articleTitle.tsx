import {
  ActionFunction,
  LoaderFunction,
  Outlet,
  redirect,
  useLoaderData,
} from "remix";
import { findArticleByTitle, getActiveProject } from "~/utils/session.server";
import { Study } from "~/modules/Study";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request, params }) => {
  const article = await findArticleByTitle(request, params.articleTitle);
  const activeProject = await getActiveProject(request);
  const form = await request.formData();
  let title: any = form.get("title");
  const content: any = [];

  if (title === "") {
    title = "Untitled";
  }

  form.forEach((value, tag) => {
    if (tag === "space") {
      content.push({ tag: "div", value });
    } else if (tag !== "title") {
      content.push({ tag, value });
    }
  });

  const study = await db.study.findUnique({
    where: { id: article?.id },
  });

  if (study) {
    await db.study.update({
      where: { id: article?.id },
      data: { title, content },
    });
  } else {
    await db.study.create({
      data: { title, content, projectId: activeProject?.id },
    });
  }
  return redirect(`${title}`);
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const article = await findArticleByTitle(request, params.articleTitle);

  return { article };
};

export default function ArticlePage() {
  const { article } = useLoaderData();
  return (
    <Study data={article}>
      <Outlet />
    </Study>
  );
}
