import { LessonStep } from "@prisma/client";

export type LessonState = {
  disabled: boolean;
  progress: number;
  stepNumber: number;
  content: LessonStep;
  lessonSteps: LessonStep[];
  maxSteps: number;
  stateWrong: boolean;
  stateRight: boolean;
  formDisabled: boolean;
  nextStep: boolean;
};

export type LessonData = {};
