import { useEffect, useState } from "react";
import { redirect } from "remix";
import Calendar from "./calendar";
import { getBegin } from "./calendar/shared/dates.js";
import Goals from "./components/Goals";

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
      <Goals goals={goals} />

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
