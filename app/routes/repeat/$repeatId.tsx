import { redirect, useLoaderData } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { db } from "~/utils/db.server";
import Repeat from "~/modules/Repeat";

export const loader: LoaderFunction = async ({ params }) => {
  const repeat = await db.repeat.findUnique({
    where: { id: params.repeatId },
  });

  if (!repeat) {
    throw new Error("Lesson not found");
  }

  const data = { repeat };
  return data;
};

export const action: ActionFunction = async ({ request }) => {
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

  return redirect(`/repeat`);
};

export default function Lesson() {
  const { repeat } = useLoaderData();

  return <Repeat data={repeat} />;
}
