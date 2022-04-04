/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { Legend, LessonProgress, VisuallyHiddenInput } from "~/components/lib";

import { LessonTitleInput } from "./lib";

export default function BasicInfo() {
  return (
    <section style={{ textAlign: "center" }}>
      <VisuallyHiddenInput
        type="text"
        name="formType"
        value="repeat"
        readOnly
      />
      <Legend>Basic info</Legend>
      <LessonProgress exp={"0"} css={{ margin: "40px auto 0 auto" }} />
      <LessonTitleInput
        type="text"
        name="title"
        placeholder="Enter lesson title"
        css={{ marginBottom: 40 }}
        required
      />
    </section>
  );
}
