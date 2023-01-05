import { Variant } from "./components/MatchingPairs/reducer";

export type Step = {
  question: string | null;
  id: string;
  answer: string | string[];
  number: number;
  keywords: string[];
  stepType: string;
  ready?: boolean;
  text?: string | null;
  variants: Variant[] | [];
  chapter: number;
  active: boolean;
};

export type State = {
  chapters: number[];
  currentScreen: "Skill" | "Steps";
  steps: Step[];
  basicInfoReady: boolean;
  stepsReady: boolean;
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
  addChapter: Function;
  addStep: Function;
  setStepReady: Function;
  changeCurrentScreen: Function;
  setBasicInfoReady: Function;
  setStepsReady: Function;
};
