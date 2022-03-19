export type Step = {
  id: any;
  answer: string;
  number: number;
  keywords: string[];
};

export type State = {
  steps: Step[];
  active: Boolean;
};
