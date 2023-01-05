import { Skill } from "@prisma/client";
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
import { useConstructor } from "..";

import { LessonTitleInput, ScreenContainer } from "./lib";

export default function SkillInfo({
  title = "",
  actionData,
  lastAddedSkills = [],
}: {
  lastAddedSkills?: Skill[];
  title: string | undefined;
  actionData: ActionData;
}) {
  const { setBasicInfoReady, currentScreen } = useConstructor();
  const [skillTitle, setSkillTitle] = useState("");
  const [lineNumber, setLineNumber] = useState(0);
  useEffect(() => {
    if (title) {
      setSkillTitle(title);
    }
  }, []);
  useEffect(() => {
    setBasicInfoReady(!!skillTitle.length);
  }, [skillTitle]);

  return (
    <ScreenContainer screen={currentScreen} target="Skill">
      <input type="hidden" name="formType" value="repeat" />
      <input type="hidden" name="lineNumber" value={lineNumber} />

      <Legend>Skill info</Legend>
      <LessonProgress exp={0} style={{ margin: "40px auto 0 auto" }} />
      <LessonTitleInput
        type="text"
        name="title"
        placeholder="Enter skill title"
        value={skillTitle}
        onChange={(e) => setSkillTitle(e.target.value)}
        required
        autoFocus={true}
      />
      {actionData?.errors?.title && (
        <ErrorMessage role="alert" id="title-error">
          {actionData.errors.title}
        </ErrorMessage>
      )}

      {lastAddedSkills.length > 0 && (
        <div style={{ width: "100%", maxWidth: "440px", margin: "0 auto" }}>
          <h2 style={{ marginTop: 60 }}>Position</h2>
          <LessonsBlock>
            {lastAddedSkills.map((lastAdded: Skill) => (
              <LessonsContainer key={lastAdded.id}>
                <LessonBlock>
                  <button type="button" aria-labelledby={lastAdded.title}>
                    <LessonProgress
                      exp={
                        (lastAdded.currentChapter / lastAdded.chapters) * 100
                      }
                    >
                      <LessonProgressInner />
                    </LessonProgress>
                    <LessonTitle>{lastAdded.title}</LessonTitle>
                  </button>
                </LessonBlock>
              </LessonsContainer>
            ))}
            {lastAddedSkills.length < 3 && (
              <LessonsContainer key={"312dsdf"}>
                <LessonBlock>
                  <button
                    type="button"
                    aria-labelledby={"121"}
                    onClick={() => setLineNumber(lastAddedSkills[0].lineNumber)}
                  >
                    <LessonProgress exp={0} style={{ fontSize: "39px" }}>
                      {lastAddedSkills[0].lineNumber === lineNumber ? (
                        <LessonProgressInner />
                      ) : (
                        "+"
                      )}
                    </LessonProgress>
                    <LessonTitle>
                      {skillTitle.length ? skillTitle : "Skill title"}
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
              onClick={() => setLineNumber(lastAddedSkills[0].lineNumber + 1)}
            >
              <LessonProgress exp={0} style={{ fontSize: "39px" }}>
                {lastAddedSkills[0].lineNumber + 1 === lineNumber ? (
                  <LessonProgressInner />
                ) : (
                  "+"
                )}
              </LessonProgress>
              <LessonTitle>
                {skillTitle.length ? skillTitle : "Skill title"}
              </LessonTitle>
            </button>
          </LessonBlock>
        </div>
      )}
    </ScreenContainer>
  );
}
