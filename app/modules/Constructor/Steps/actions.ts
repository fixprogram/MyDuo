export type Action =
  | { type: "SET_STEP_TYPE"; payload: { stepType: string; id: string } }
  | { type: "REMOVE_STEP_TYPE"; payload: { id: string } }
  | { type: "SET_ANSWER"; payload: { answer: string; number: number } }
  | { type: "SET_KEYWORDS"; payload: { keywords: string[]; number: number } }
  | { type: "ADD_STEP" }
  | { type: "REMOVE_STEP"; payload: { number: number } }
  | { type: "SET_STEP_READY"; payload: { isReady: boolean; number: number } };

export const setStepType = (stepType: string, id: string): Action => ({
  type: "SET_STEP_TYPE",
  payload: { stepType, id },
});

export const removeStepType = (id: string): Action => ({
  type: "REMOVE_STEP_TYPE",
  payload: { id },
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

export const setStepReady = (isReady: boolean, number: number): Action => ({
  type: "SET_STEP_READY",
  payload: { isReady, number },
});
