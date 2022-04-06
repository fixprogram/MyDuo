import { ActionFunction, redirect } from "remix";
import { Study } from "~/modules/Study";
import { db } from "~/utils/db.server";
import { getActiveProject } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  const activeProject = await getActiveProject(request);
  const form = await request.formData();
  const title = form.get("title");
  const content: any = [];

  form.forEach((value, tag) => {
    if (tag === "space") {
      content.push({ tag: "div", value });
    } else if (tag !== "title") {
      content.push({ tag, value });
    }
  });

  const data = { title, content, projectId: activeProject?.id };
  const study = await db.study.create({ data });
  return redirect(`/${activeProject?.title}/study/${title}`);
};

export default function NewArticle() {
  return <Study />;
}
