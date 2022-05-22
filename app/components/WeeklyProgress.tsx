export default function WeeklyProgress({ activity }) {
  return (
    <div style={{ flexGrow: 1 }}>
      <ul>
        {Object.keys(activity).map((day) => (
          <li key={day}>
            <b>{day}</b>
            <hr />
            {activity[day]}
          </li>
        ))}
      </ul>
    </div>
  );
}
