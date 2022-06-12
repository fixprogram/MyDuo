import { Lesson } from "@prisma/client";

export type LessonState = {
  disabled: boolean;
  progress: number;
  stepNumber: number;
  content: Lesson;
  lessonSteps: Lesson[];
  maxSteps: number;
  // stateWrong: boolean;
  // stateRight: boolean;
  // formDisabled: boolean;
  // nextStep: boolean;
  topicState: {
    status: string;
    formDisabled: boolean;
    buttonDisabled: boolean;
  };
  userAnswer: string[];
};

export type LessonData = {};
