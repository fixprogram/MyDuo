import { Outlet } from "remix";
import styles from "~/styles/index.css";

export function ErrorBoundary() {
  return (
    <div className="error-container">
      Something unexpected went wrong. Sorry about that.
    </div>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function NewPage() {
  return <Outlet />;
}
