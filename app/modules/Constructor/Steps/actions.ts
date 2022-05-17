import { Step } from "./types";

export type Action =
  | { type: "SET_STEP_TYPE"; payload: { stepType: string; id: string } }
  | { type: "REMOVE_STEP_TYPE"; payload: { id: string } }
  | { type: "SET_ANSWER"; payload: { answer: string; number: number } }
  | { type: "SET_KEYWORDS"; payload: { keywords: string[]; number: number } }
  | { type: "ADD_STEP" }
  | { type: "REMOVE_STEP"; payload: { id: string } }
  | { type: "SET_STEP_READY"; payload: { isReady: boolean; number: number } }
  | { type: "SET_DATA"; payload: { steps: Step[] } }
  | { type: "SET_QUESTION"; payload: { question: string; number: number } };

const actionCreator = (dispatch: Function) => ({
  setStepType: (stepType: string, id: string): Action =>
    dispatch({ type: "SET_STEP_TYPE", payload: { stepType, id } }),
  removeStepType: (id: string): Action =>
    dispatch({ type: "REMOVE_STEP_TYPE", payload: { id } }),
  setAnswer: (answer: string, number: number): Action =>
    dispatch({ type: "SET_ANSWER", payload: { answer, number } }),
  setKeywords: (keywords: string[], number: number): Action =>
    dispatch({ type: "SET_KEYWORDS", payload: { keywords, number } }),
  addStep: (): Action => dispatch({ type: "ADD_STEP" }),
  removeStep: (id: string): Action =>
    dispatch({ type: "REMOVE_STEP", payload: { id } }),
  setStepReady: (isReady: boolean, number: number): Action =>
    dispatch({ type: "SET_STEP_READY", payload: { isReady, number } }),
  setData: (steps: Step[]): Action =>
    dispatch({ type: "SET_DATA", payload: { steps } }),
  setQuestion: (question: string, number: number): Action =>
    dispatch({ type: "SET_QUESTION", payload: { question, number } }),
});

export default actionCreator;
