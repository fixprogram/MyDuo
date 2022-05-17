import { useEffect, useState } from "react";
import { Legend, LessonProgress } from "~/components/lib";

import { LessonTitleInput } from "./lib";

export default function BasicInfo({
  data,
  setReady,
  screen,
}: {
  data?: { title: "" };
  setReady: Function;
  screen: string;
}) {
  const [lessonTitle, setLessonTitle] = useState("");
  useEffect(() => {
    if (data?.title) {
      setLessonTitle(data.title);
    }
  }, [data]);
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
      <input type="hidden" name="formType" value="repeat" readOnly />
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
