import { nanoid } from "nanoid";
import Footer from "~/modules/Common/components/Footer";
import LessonItem from "./LessonItem";
import { LessonsBlock, SkillsLineBlock, SkillsListContainer } from "./lib";
import PracticeLastAdded from "./PracticeLastAdded";

export type SkillsListItemType = {
  id: string;
  title: string;
  lessonsAmount: number;
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
        {skills.length > 0 && <PracticeLastAdded />}
        <SkillsLineBlock>
          {lineNumbers.map((lineNumber) => (
            <LessonsBlock key={nanoid()}>
              {skills.map((dataItem) => {
                if (dataItem.lineNumber === lineNumber) {
                  return (
                    <LessonItem
                      key={dataItem.id}
                      {...dataItem}
                      editLink={`/${languageTitle}/edit/${dataItem.id}`}
                      // editLink={`/${languageTitle}/constructor/${dataItem.id}`}
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
