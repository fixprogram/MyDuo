import { Lesson } from "@prisma/client";

export type SkillState = {
  progress: number;
  stepNumber: number;
  content: Lesson & { difficulty: "easy" | "hard" | null };
  lessonSteps: Lesson[];
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
};

export type Step = Lesson & {
  difficulty: "easy" | "hard" | null;
};
