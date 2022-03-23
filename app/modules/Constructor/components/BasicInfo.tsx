/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { Legend, LessonProgress } from "~/components/lib";

import { LessonTitleInput } from "./lib";

export default function BasicInfo() {
  return (
    <Fragment>
      <Legend>Basic info</Legend>
      <LessonProgress exp={"0"} css={{ margin: "40px auto 0 auto" }} />
      <LessonTitleInput
        type="text"
        name="title"
        placeholder="title"
        css={{ marginBottom: 40 }}
        required
      />
    </Fragment>
  );
}
