import { Lesson } from "@prisma/client";

export type SkillState = {
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

export type SkillContextType = Omit<SkillState, "lessonSteps"> & {
  setup: Function;
  continueTopic: Function;
  showResults: Function;
  setStateRight: Function;
  setStateWrong: Function;
  setCheckDisabled: Function;
  updateState: Function;
};
