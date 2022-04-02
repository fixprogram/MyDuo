import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useLoaderData,
} from "remix";
import { getPracticeDay, setPracticeDay } from "~/utils/session.server";
import { Fragment } from "react";

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  const task = form.get("task");
  const data = { tasks: [{ title: task, isFulfilled: false }], habits: [] };

  const day = await setPracticeDay(request, params.date, data);
  return redirect(`${params.date}`);
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const day = await getPracticeDay(request, params?.date);

  return { day };
};

export default function Day() {
  const { day } = useLoaderData();
  return (
    <Fragment>
      {day ? (
        <h2>{day.tasks[0].title}</h2>
      ) : (
        <Form method="post">
          <h2>Add your first task</h2>
          <input type="text" name="task" placeholder="Write it here" />
          <button type="submit">Save</button>
        </Form>
      )}
      {/* <h2>Tasks {day}</h2> */}
      {/* <ul></ul> */}
      {/* <h2>Habits</h2>
      <ul></ul> */}
    </Fragment>
  );
}
