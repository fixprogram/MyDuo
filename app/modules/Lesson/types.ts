import { LessonStep } from "@prisma/client";

export type LessonState = {
  disabled: boolean;
  progress: number;
  stepNumber: number;
  content: LessonContent;
  lessonSteps: LessonStep[];
  maxSteps: number;
  stateWrong: boolean;
  stateRight: boolean;
  formDisabled: boolean;
  nextStep: boolean;
};

export type LessonData = {};

export type LessonContent = LessonStep & {
  answer: string[];
};
