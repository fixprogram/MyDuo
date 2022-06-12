import { Lesson } from "@prisma/client";

export type Action =
  | { type: "START" }
  // | { type: "CHECK_ANSWER"; payload: { answer: string[] } }
  | { type: "CHECK_ANSWER" }
  | { type: "CONTINUE" }
  | { type: "FINISH" }
  | { type: "RESULTS" }
  | { type: "CHANGE_DISABLED"; payload: { isDisabled: boolean } }
  | {
      type: "SET_CASE";
      payload: { steps: Lesson[] };
    }
  | { type: "CHANGE_USER_ANSWER"; payload: { newAnswer: string[] } };

const actionCreator = (dispatch: Function) => ({
  startPractice: () => dispatch({ type: "START" }),
  checkAnswer: () => dispatch({ type: "CHECK_ANSWER" }),
  // checkAnswer: (answer: string[]) =>
  //   dispatch({ type: "CHECK_ANSWER", payload: { answer } }),
  continuePractice: () => dispatch({ type: "CONTINUE" }),
  finishPractice: () => dispatch({ type: "FINISH" }),
  showResultsPractice: () => dispatch({ type: "RESULTS" }),
  changeDisabled: (isDisabled: boolean) =>
    dispatch({ type: "CHANGE_DISABLED", payload: { isDisabled } }),
  setCase: (steps: Lesson[]) =>
    dispatch({ type: "SET_CASE", payload: { steps } }),
  setNewUserAnswer: (newAnswer: string[]) =>
    dispatch({ type: "CHANGE_USER_ANSWER", payload: { newAnswer } }),
});

export default actionCreator;
