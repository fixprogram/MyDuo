/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Close from "../../../styles/close.svg";
import { ProgressBar } from "./lib";

const Progress = ({ progress }) => {
  return (
    <div
      css={{
        width: "100%",
        marginTop: "1px",
        borderTop: "1px solid #DBDDDD",
        paddingTop: "46px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href="/practice"
        css={{ marginRight: "21px", height: "16px", marginTop: "-3px" }}
      >
        <img
          src={Close}
          alt="close"
          css={{ width: "16px", height: "16px", verticalAlign: "initial" }}
        />
        {/* </Link> */}
      </a>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Progress;
