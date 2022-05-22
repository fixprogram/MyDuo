import { useEffect, useState } from "react";
import { Legend, LessonProgress } from "~/components/lib";

import { LessonTitleInput, ScreenContainer } from "./lib";

export default function TopicInfo({
  title = "",
  setReady,
  screen,
}: {
  title: string | undefined;
  setReady: Function;
  screen: string;
}) {
  const [topicTitle, setLessonTitle] = useState("");
  useEffect(() => {
    if (title) {
      setLessonTitle(title);
    }
  }, []);
  useEffect(() => {
    setReady(!!topicTitle.length);
  }, [topicTitle, setReady]);
  return (
    <ScreenContainer screen={screen} target="Topic">
      <input type="hidden" name="formType" value="repeat" readOnly />
      <Legend>Topic info</Legend>
      <LessonProgress exp={"0"} style={{ margin: "40px auto 0 auto" }} />
      <LessonTitleInput
        type="text"
        name="title"
        placeholder="Enter topic title"
        style={{ marginBottom: 40 }}
        value={topicTitle}
        onChange={(e) => setLessonTitle(e.target.value)}
        required
      />
    </ScreenContainer>
  );
}
