/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "remix";

export default function Forms({ children }) {
  return (
    <section>
      <div
        css={{
          padding: 24,
          border: "2px solid #e5e5e5",
          borderRadius: 16,
          margin: "0 24px 24px",
        }}
      >
        <div css={{ marginBottom: 25, paddingLeft: 50 }}>Profile</div>
        {children}
      </div>
    </section>
  );
}
