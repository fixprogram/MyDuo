export type Step = {
  id: any;
  answer: string;
  number: number;
  keywords: string[];
  lessonType: string;
  ready: boolean;
};

export type State = {
  steps: Step[];
};

// export type Action = {
//   type: string;
//   payload?: {
//     answer?: string;
//     number?: number;
//     keywords?: string[];
//     style?: string;
//     id?: string;
//   };
// };

export type FieldsetType = {
  number: number;
  answer: string;
  setAnswer: Function;
  setReady: Function;
  // setKeywords: Function;
  // keywords?: string[];
  // count?: number;
};
