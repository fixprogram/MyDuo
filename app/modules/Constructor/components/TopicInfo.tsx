import { Topic } from "@prisma/client";
import { useEffect, useState } from "react";
import {
  ErrorMessage,
  Legend,
  LessonBlock,
  LessonProgress,
  LessonProgressInner,
  LessonsBlock,
  LessonsContainer,
  LessonTitle,
} from "~/components/lib";
import { ActionData } from "~/routes/$language/constructor/new";

import { LessonTitleInput, ScreenContainer } from "./lib";

export default function TopicInfo({
  title = "",
  setReady,
  screen,
  actionData,
  lastAddedTopics,
}: {
  lastAddedTopics: Topic[];
  title: string | undefined;
  setReady: Function;
  screen: string;
  actionData: ActionData;
}) {
  const [topicTitle, setLessonTitle] = useState("");
  const [lineNumber, setLineNumber] = useState(0);
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
      <input type="hidden" name="formType" value="repeat" />
      <input type="hidden" name="lineNumber" value={lineNumber} />

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

      {lastAddedTopics.length > 0 && (
        <div style={{ width: "100%", maxWidth: "440px", margin: "0 auto" }}>
          <h2 style={{ marginTop: 60 }}>Choose position for topic</h2>
          <LessonsBlock>
            {lastAddedTopics.map((lastAdded: Topic) => (
              <LessonsContainer key={lastAdded.id}>
                <LessonBlock>
                  <button type="button" aria-labelledby={lastAdded.title}>
                    <LessonProgress
                      exp={(
                        (lastAdded.currentChapter / lastAdded.chapters) *
                        100
                      ).toString()}
                    >
                      <LessonProgressInner />
                    </LessonProgress>
                    <LessonTitle>{lastAdded.title}</LessonTitle>
                  </button>
                </LessonBlock>
              </LessonsContainer>
            ))}
            {lastAddedTopics.length < 3 && (
              <LessonsContainer key={"312dsdf"}>
                <LessonBlock>
                  <button
                    type="button"
                    aria-labelledby={"121"}
                    onClick={() => setLineNumber(lastAddedTopics[0].lineNumber)}
                  >
                    <LessonProgress exp={"0"} style={{ fontSize: "39px" }}>
                      {lastAddedTopics[0].lineNumber === lineNumber ? (
                        <LessonProgressInner />
                      ) : (
                        "+"
                      )}
                    </LessonProgress>
                    <LessonTitle>
                      {topicTitle.length ? topicTitle : "Topic title"}
                    </LessonTitle>
                  </button>
                </LessonBlock>
              </LessonsContainer>
            )}
          </LessonsBlock>
          <LessonBlock>
            <button
              type="button"
              aria-labelledby={"121"}
              onClick={() => setLineNumber(lastAddedTopics[0].lineNumber + 1)}
            >
              <LessonProgress exp={"0"} style={{ fontSize: "39px" }}>
                {lastAddedTopics[0].lineNumber + 1 === lineNumber ? (
                  <LessonProgressInner />
                ) : (
                  "+"
                )}
              </LessonProgress>
              <LessonTitle>
                {topicTitle.length ? topicTitle : "Topic title"}
              </LessonTitle>
            </button>
          </LessonBlock>
        </div>
      )}
    </ScreenContainer>
  );
}
