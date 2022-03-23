export type Step = {
  id: any;
  answer: string;
  number: number;
  keywords: string[];
  style: string;
};

export type State = {
  steps: Step[];
};

export type Action = {
  type: string;
  payload?: {
    answer?: string;
    number?: number;
    keywords?: string[];
    style?: string;
    id?: string;
  };
};

export type FieldsetType = {
  number: number;
  answer: string;
  setStyle: Function;
  setAnswer: Function;
  setKeywords?: Function;
  keywords?: string[];
  count?: number;
};
