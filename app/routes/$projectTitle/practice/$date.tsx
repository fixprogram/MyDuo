import { ActionFunction, LoaderFunction, redirect, useLoaderData } from "remix";
import { getPracticeDay, setPracticeDay } from "~/utils/session.server";
import NewDay from "~/modules/Practice/components/NewDay";

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();

  const tasksTitles = form.getAll("taskTitle");
  const areFulfilled = form.getAll("isFulfilled");

  const tasks = tasksTitles.map((title, idx) => ({
    title,
    isFulfilled: !!areFulfilled[idx],
  }));
  const data = { tasks, habits: [] };

  const day = await setPracticeDay(request, params.date, data);
  return redirect(`/`);
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const day = await getPracticeDay(request, params?.date);

  return { day };
};

export default function Day() {
  const { day } = useLoaderData();

  return <NewDay tasksData={day?.tasks} />;
}
