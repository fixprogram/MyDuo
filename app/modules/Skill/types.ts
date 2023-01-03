import { Lesson } from "@prisma/client";

export type Step = Omit<Lesson, "createdAt" | "updatedAt"> & {
  difficulty: "easy" | "hard" | null;
};

export type SkillState = {
  progress: number;
  stepNumber: number;
  content: Step;
  lessonSteps: Step[];
  maxSteps: number;
  skillState: {
    status: string;
    formDisabled: boolean;
    buttonDisabled: boolean;
  };
};

export type SkillContextType = Omit<SkillState, "lessonSteps"> & {
  setup: Function;
  continueSkill: Function;
  showResults: Function;
  setStateRight: Function;
  setStateWrong: Function;
  setCheckDisabled: Function;
  updateState: Function;
  setDifficulty: Function;
  leave: Function;
  resetStatus: Function;
};
