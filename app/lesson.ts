export type Lesson = {
  id: string;
  title: string;
  innerTitle?: string;
  steps: Array<Object>;
  createdAt: number;
  exp: number;
  questionTitle?: string;
  variants?: Array<string>;
  answer?: number;
  description?: string;
};
