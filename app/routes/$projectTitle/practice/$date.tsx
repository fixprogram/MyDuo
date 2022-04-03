import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useLoaderData,
} from "remix";
import { getPracticeDay, setPracticeDay } from "~/utils/session.server";
import { Fragment, useState } from "react";
import NewDay from "~/modules/Practice/components/NewDay";
import Task from "~/modules/Practice/components/Task";

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

const setRandom = () => Math.floor(Math.random() * 100);

export default function Day() {
  const { day } = useLoaderData();

  // const [tasks, setTasks] = useState(day?.tasks);
  // console.log("DAY: ", day);
  // console.log("TASKS: ", tasks);
  // return (
  //   <Form method="post">
  //     <h2>Hey! It's a new day. Let's fulfill it with productive stuff!</h2>

  //     <div style={{ display: "flex", justifyContent: "space-between" }}>
  //       <h3>Tasks: </h3>
  //       <button
  //         type="button"
  //         onClick={() => setTasks([...tasks, { title: "", id: setRandom() }])}
  //         //   onClick={() => tasks.push({ title: "", id: setRandom() })}
  //       >
  //         Add new task
  //       </button>
  //     </div>
  //     <ul>
  //       {day?.tasks.map((task, idx) => (
  //         <li key={idx}>
  //           <Task
  //             value={task.value}
  //             taskData={task}
  //             removeTask={() =>
  //               setTasks((prevTasks) => {
  //                 const newTasks = prevTasks;
  //                 newTasks.splice(idx, 1);
  //                 return [...newTasks];
  //               })
  //             }
  //           />
  //         </li>
  //       ))}
  //     </ul>
  //     <button type="submit">Save</button>
  //   </Form>
  // );

  return <NewDay tasksData={day?.tasks} />;
}
