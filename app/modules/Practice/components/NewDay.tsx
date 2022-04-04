import { useEffect, useState } from "react";
import { Form } from "@remix-run/react";
import Task from "./Task";

const setRandom = () => Math.floor(Math.random() * 1000000000000); // Generating random id for key prop

export default function NewDay({ tasksData }: { tasksData: any }) {
  const [tasks, setTasks] = useState(() => tasksData);

  useEffect(() => {
    if (!tasksData) {
      setTasks([]);
    } else {
      setTasks(tasksData);
    }
  }, [tasksData]);
  console.log(tasks);
  return (
    <Form method="post">
      <h2>Hey! It's a new day. Let's fulfill it with productive stuff!</h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Tasks: </h3>
        <button
          type="button"
          onClick={() =>
            setTasks((prevTasks: any) => [
              ...prevTasks,
              { title: "", id: setRandom() },
            ])
          }
        >
          Add new task
        </button>
      </div>
      <ul>
        {tasks?.map((task: any, idx: number) => (
          <li key={task.id}>
            {`${idx + 1}. `}
            <Task
              taskData={task}
              removeTask={() =>
                setTasks((prevTasks: string[]) => {
                  const newTasks = prevTasks;
                  newTasks.splice(idx, 1);
                  return [...newTasks];
                })
              }
            />
          </li>
        ))}
      </ul>
      <button type="submit">Save</button>
    </Form>
  );
}
