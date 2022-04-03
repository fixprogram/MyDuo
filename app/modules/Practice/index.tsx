import { useEffect, useState } from "react";
import { Form, redirect } from "remix";
import Calendar from "./calendar";
import { getBegin } from "./calendar/shared/dates.js";

export default function Practice({ goals, children }) {
  const [day, setDay] = useState(Date.parse(getBegin("day", new Date())));
  useEffect(() => {
    redirect(`/${day}`);
  }, [day]);
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {goals?.length > 0 ? (
        <div style={{ width: "100%" }}>
          {goals.map((goal: string, idx: number) => (
            <h2 key={idx}>{goal}</h2>
          ))}
        </div>
      ) : (
        <Form method="post" style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="enter goal"
            name="goal"
            style={{ width: "80%" }}
          />
          <button type="submit">Save</button>
        </Form>
      )}
      {/* <h1 style={{ width: "100%" }}>My main goal</h1> */}

      <section style={{ width: "60%" }}>
        <Calendar
          onClickDay={(val: any) => {
            val = Date.parse(val);
            setDay(val);
          }}
        />
      </section>

      <section style={{ width: "28%" }}>{children}</section>
    </section>
  );
}
