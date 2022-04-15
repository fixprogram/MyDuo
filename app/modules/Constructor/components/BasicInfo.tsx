import { Fragment, useEffect, useState } from "react";
import { Legend, LessonProgress, VisuallyHiddenInput } from "~/components/lib";

import { LessonTitleInput } from "./lib";

export default function BasicInfo({ setReady }: { setReady: Function }) {
  const [lessonTitle, setLessonTitle] = useState("");
  useEffect(() => {
    if (lessonTitle.length > 0) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [lessonTitle, setReady]);
  return (
    <section style={{ textAlign: "center" }}>
      <VisuallyHiddenInput
        type="text"
        name="formType"
        value="repeat"
        readOnly
      />
      <Legend>Basic info</Legend>
      <LessonProgress exp={"0"} style={{ margin: "40px auto 0 auto" }} />
      <LessonTitleInput
        type="text"
        name="title"
        placeholder="Enter lesson title"
        style={{ marginBottom: 40 }}
        value={lessonTitle}
        onChange={(e) => setLessonTitle(e.target.value)}
        required
      />
    </section>
  );
}
