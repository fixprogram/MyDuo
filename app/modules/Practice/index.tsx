import { useState } from "react";
import Calendar from "./calendar";
import { getBegin } from "./calendar/shared/dates.js";

export default function Practice() {
  const [day, setDay] = useState(Date.parse(getBegin("day", new Date())));
  return (
    <section>
      <h1>My main goal</h1>

      <section>
        <Calendar
          onClickDay={(val: any) => {
            val = Date.parse(val);
            setDay(val);
          }}
        />
      </section>

      <section>
        <h2>For day: {day}</h2>
        <h2>Tasks</h2>
        <ul></ul>
        <h2>Habits</h2>
        <ul></ul>
      </section>
    </section>
  );
}
