export type Action =
  | { type: "SET_STYLE"; payload: { lessonType: string; id: string } }
  | { type: "SET_ANSWER"; payload: { answer: string; number: number } }
  | { type: "SET_KEYWORDS"; payload: { keywords: string[]; number: number } }
  | { type: "ADD_STEP" }
  | { type: "REMOVE_STEP"; payload: { number: number } };

export const setLessonType = (lessonType: string, id: string): Action => ({
  type: "SET_STYLE",
  payload: { lessonType, id },
});

export const setAnswer = (answer: string, number: number): Action => ({
  type: "SET_ANSWER",
  payload: { answer, number },
});

export const setKeywords = (keywords: string[], number: number): Action => ({
  type: "SET_KEYWORDS",
  payload: {
    keywords,
    number,
  },
});

export const addStep = (): Action => ({
  type: "ADD_STEP",
});

export const removeStep = (number: number): Action => ({
  type: "REMOVE_STEP",
  payload: { number },
});
