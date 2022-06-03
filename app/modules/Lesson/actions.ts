import { Lesson } from "@prisma/client";

export type Action =
  | { type: "START" }
  | { type: "CHECK_ANSWER"; payload: { answer: string[] } }
  | { type: "CONTINUE" }
  | { type: "FINISH" }
  | { type: "RESULTS" }
  | { type: "CHANGE_DISABLED"; payload: { isDisabled: boolean } }
  | {
      type: "SET_CASE";
      payload: { steps: Lesson[] };
    };

const actionCreator = (dispatch: Function) => ({
  startPractice: () => dispatch({ type: "START" }),
  checkAnswer: (answer: string[]) =>
    dispatch({ type: "CHECK_ANSWER", payload: { answer } }),
  continuePractice: () => dispatch({ type: "CONTINUE" }),
  finishPractice: () => dispatch({ type: "FINISH" }),
  showResultsPractice: () => dispatch({ type: "RESULTS" }),
  changeDisabled: (isDisabled: boolean) =>
    dispatch({ type: "CHANGE_DISABLED", payload: { isDisabled } }),
  setCase: (steps: Lesson[]) =>
    dispatch({ type: "SET_CASE", payload: { steps } }),
});

export default actionCreator;
