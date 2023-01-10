import { nanoid } from "nanoid";
import Footer from "~/modules/Common/components/Footer";
import LessonItem from "./LessonItem";
import {
  LessonsBlock,
  SkillsLineBlock,
  SkillsListContainer,
  SkillsListInner,
} from "./lib";
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
      <SkillsListInner>
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
                    />
                  );
                }
              })}
            </LessonsBlock>
          ))}
        </SkillsLineBlock>
      </SkillsListInner>
      <Footer />
    </SkillsListContainer>
  );
}
