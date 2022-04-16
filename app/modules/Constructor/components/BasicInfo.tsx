import { useEffect, useState } from "react";
import { Legend, LessonProgress, VisuallyHiddenInput } from "~/components/lib";

import { LessonTitleInput } from "./lib";

export default function BasicInfo({
  setReady,
  screen,
}: {
  setReady: Function;
  screen: string;
}) {
  const [lessonTitle, setLessonTitle] = useState("");
  useEffect(() => {
    setReady(!!lessonTitle.length);
  }, [lessonTitle, setReady]);
  return (
    <section
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        textAlign: "center",
        visibility: screen !== "Basic" ? "hidden" : "visible",
      }}
    >
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
