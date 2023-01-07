import { nanoid } from "nanoid";
import Footer from "~/modules/Common/components/Footer";
import LessonItem from "./LessonItem";
import { LessonsBlock, SkillsLineBlock, SkillsListContainer } from "./lib";
import PracticeLastAdded from "./PracticeLastAdded";

export type SkillsListItemType = {
  id: string;
  title: string;
  stepIDs: string[];
  currentLesson: number;
  lineNumber: number;
};

export default function SkillsList({
  skills,
  languageTitle,
}: {
  skills: SkillsListItemType[];
  languageTitle: string;
}) {
  const lineNumbers = [
    ...new Set(skills.map((dataItem) => dataItem.lineNumber)),
  ];

  return (
    <SkillsListContainer>
      <div style={{ display: "flex", flexGrow: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          {skills.length > 0 && <PracticeLastAdded />}
        </div>
        <SkillsLineBlock>
          {lineNumbers.map((lineNumber) => (
            <LessonsBlock key={nanoid()}>
              {skills.map((dataItem) => {
                if (dataItem.lineNumber === lineNumber) {
                  return (
                    <LessonItem
                      key={dataItem.id}
                      {...dataItem}
                      editLink={`/${languageTitle}/constructor/${dataItem.id}`}
                    />
                  );
                }
              })}
            </LessonsBlock>
          ))}
        </SkillsLineBlock>
      </div>
      <Footer />
    </SkillsListContainer>
  );
}
