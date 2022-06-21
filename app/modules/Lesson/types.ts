import { Lesson } from "@prisma/client";

export type LessonState = {
  progress: number;
  stepNumber: number;
  content: Lesson;
  lessonSteps: Lesson[];
  maxSteps: number;
  topicState: {
    status: string;
    formDisabled: boolean;
    buttonDisabled: boolean;
  };
};
