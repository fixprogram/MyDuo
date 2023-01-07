import { Skill } from "@prisma/client";

export type ConstructorSkillData = Pick<
  Skill,
  "id" | "title" | "stepIDs" | "currentLesson" | "lineNumber"
>;
