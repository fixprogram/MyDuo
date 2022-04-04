import { Fragment, useEffect, useState } from "react";
import { VisuallyHiddenInput } from "~/components/lib";

export default function Task({ taskData, removeTask }) {
  const [task, setTask] = useState(() => taskData);
  useEffect(() => {
    setTask(taskData);
  }, [taskData]);
  console.log("Task: ", task);
  return (
    <Fragment>
      <input
        type="text"
        name="taskTitle"
        value={task.title}
        onChange={(evt) =>
          setTask(() => ({ ...task, title: evt.target.value }))
        }
        style={{
          border: "none",
          textDecoration: task.isFulfilled ? "line-through" : "none",
        }}
      />
      <button type="button" onClick={() => removeTask()}>
        Remove task
      </button>
      <VisuallyHiddenInput
        type="checkbox"
        name="isFulfilled"
        checked={task.isFulfilled}
        readOnly
      />
      <button
        type="button"
        onClick={() =>
          setTask((task: any) => ({ ...task, isFulfilled: !task.isFulfilled }))
        }
      >
        {task.isFulfilled ? "Back" : "Done"}
      </button>
    </Fragment>
  );
}
