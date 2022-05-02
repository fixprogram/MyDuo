import { Variant } from "./components/MatchingPairs/reducer";

export type Step = {
  question: string;
  id: string;
  answer: string | string[];
  number: number;
  keywords: string[];
  stepType: string;
  ready: boolean;
  text: string;
  variants: Variant[];
};

export type State = {
  // steps: Step[];
  steps: any;
};

export type FieldsetType = {
  number: number;
  answer: string | string[];
  setAnswer: Function;
  setReady: Function;
};
