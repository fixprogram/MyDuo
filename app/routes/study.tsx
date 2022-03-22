import { Fragment } from "react";
import { Main } from "~/components/lib";
import Menu from "~/components/Menu";
import styles from "~/styles/index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Study() {
  return (
    <Fragment>
      <Menu />
      <Main>Study</Main>
    </Fragment>
  );
}
