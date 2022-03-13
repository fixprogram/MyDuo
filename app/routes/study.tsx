/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import Menu from "~/components/Menu";
import styles from "~/styles/index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Study() {
  return (
    <Fragment>
      <Menu />
      <main
        css={{
          padding: "0 250px",
        }}
      >
        Study
      </main>
    </Fragment>
  );
}
