import { NavLink } from "react-router-dom";
import styles from "~/styles/index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <nav>
        <NavLink to="/lessons">Lessons</NavLink>
      </nav>
    </div>
  );
}
