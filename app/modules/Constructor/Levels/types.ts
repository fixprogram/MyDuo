import { Variant } from "./components/MatchingPairs/reducer";

export type Lesson = {
  id: string;
};

export type StepOptions = {
  question?: string;
  keywords?: string[];
  text?: string;
  variants?: Variant[];
  isToChoose?: boolean;
  definition?: string;
};

export type Step = {
  // question: string | null;
  id: string;
  answer: string | string[];
  number: number;
  // keywords: string[];
  stepType: string;
  ready?: boolean;
  // text?: string | null;
  // variants: Variant[] | [];
  parentLessonId: string;
  // active: boolean;
  options: StepOptions;
};

export type State = {
  lessons: Lesson[];
  currentScreen: "Skill" | "Steps";
  steps: Step[];
  basicInfoReady: boolean;
  stepsReady: boolean;
  activeStepId: string;
  activeLessonId: string;
};

export type FieldsetType = {
  number: number;
  answer: string | string[];
  setAnswer: Function;
  setReady: Function;
};

export type ConstructorData = {
  title: string;
  steps: Step[];
};

export type ContextType = State & {
  setStepType: Function;
  setup: Function;
  removeStep: Function;
  removeStepType: Function;
  setStepActive: Function;
  setQuestion: Function;
  setAnswer: Function;
  setKeywords: Function;
  addLesson: Function;
  addStep: Function;
  setStepReady: Function;
  changeCurrentScreen: Function;
  setBasicInfoReady: Function;
  setStepsReady: Function;
  setLessonActive: Function;
};
