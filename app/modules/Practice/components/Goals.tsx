import { useState } from "react";
import { Form } from "@remix-run/react";

export default function Goals({ goals = [] }: { goals: string[] }) {
  const [goal, setGoal] = useState(() => (goals.length > 0 ? goals[0] : ""));
  return (
    <Form method="post" style={{ width: "100%" }}>
      <input
        type="text"
        placeholder="Set a goal"
        value={goal}
        name="goal"
        style={{
          width: "calc(60% - 51px)",
          fontFamily: "Montserrat",
          fontSize: 25,
          marginBottom: 20,
          border: "none",
        }}
        onChange={(evt) => setGoal(evt.target.value)}
      />
      {goal ? <button type="submit">Save</button> : ""}
    </Form>
  );
}
