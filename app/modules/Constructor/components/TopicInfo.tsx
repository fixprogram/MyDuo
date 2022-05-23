import { useEffect, useState } from "react";
import { ErrorMessage, Legend, LessonProgress } from "~/components/lib";
import { ActionData } from "~/routes/$language/constructor/new";

import { LessonTitleInput, ScreenContainer } from "./lib";

export default function TopicInfo({
  title = "",
  setReady,
  screen,
  actionData,
}: {
  title: string | undefined;
  setReady: Function;
  screen: string;
  actionData: ActionData;
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
        value={topicTitle}
        onChange={(e) => setLessonTitle(e.target.value)}
        required
        autoFocus={true}
      />
      {actionData?.errors?.title && (
        <ErrorMessage role="alert" id="title-error">
          {actionData.errors.title}
        </ErrorMessage>
      )}
    </ScreenContainer>
  );
}
