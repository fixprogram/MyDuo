export type LessonState = {
  disabled: boolean;
  progress: number;
  step: number;
  content: any;
  caseItem: any[];
  maxSteps: number;
  stateWrong: boolean;
  stateRight: boolean;
  formDisabled: boolean;
  nextStep: boolean;
};

export type LessonData = {};

export type LessonContent = {};
