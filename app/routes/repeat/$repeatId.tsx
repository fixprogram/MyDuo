import { redirect, useLoaderData, useParams } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { db } from "~/utils/db.server";
import Repeat from "~/modules/Repeat";
import { getActiveProject } from "~/utils/session.server";

export function ErrorBoundary() {
  const { repeatId } = useParams();
  return (
    <div className="error-container">{`There was an error loading joke by the id ${repeatId}. Sorry.`}</div>
  );
}

export const loader: LoaderFunction = async ({ params }) => {
  const repeat = await db.repeat.findUnique({
    where: { id: params.repeatId },
  });

  if (!repeat) {
    throw new Error("Repeat not found");
  }

  const data = { repeat };
  return data;
};

export const action: ActionFunction = async ({ request }) => {
  const project = await getActiveProject(request);
  console.log("Active project: ", project);
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const id = form.get("id");

  const { exp } = await db.repeat.findUnique({
    where: { id },
  });

  await db.repeat.update({
    where: {
      id,
    },
    data: {
      exp: exp + expData,
    },
  });

  return redirect(`/${project.title}/repeats`);
};

export default function RepeatScreen() {
  const { repeat } = useLoaderData();

  return <Repeat data={repeat} />;
}
