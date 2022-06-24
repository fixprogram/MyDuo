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
  currentScreen: string;
  steps: Step[];
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
