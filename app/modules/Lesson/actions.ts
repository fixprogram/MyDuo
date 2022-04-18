// const actionCreator = (dispatch) => ({
//   checkAnswer: (payload) => dispatch({ type: "CHECK_ANSWER", payload }),
//   showResultsPractice: () => dispatch({ type: "RESULTS" }),
//   finishPractice: () => dispatch({ type: "FINISH" }),
//   startPractice: () => dispatch({ type: "START" }),
//   continuePractice: () => dispatch({ type: "CONTINUE" }),
//   changeDisabled: (payload) => dispatch({ type: "CHANGE_DISABLED", payload }),
//   setCase: (data) => dispatch({ type: "SET_CASE", payload: { ...data } }),
// });

// export default actionCreator;
//
export type Action =
  | { type: "START" }
  | { type: "CHECK_ANSWER"; payload: { answer: string[] } }
  | { type: "CONTINUE" }
  | { type: "FINISH" }
  | { type: "RESULTS" }
  | { type: "CHANGE_DISABLED"; payload: {} }
  | { type: "SET_CASE"; payload: { data: any } };

const actionCreator = (dispatch) => ({
  startPractice: () => dispatch({ type: "START" }),
  checkAnswer: (answer: string[]) =>
    dispatch({ type: "CHECK_ANSWER", payload: { answer } }),
  continuePractice: () => dispatch({ type: "CONTINUE" }),
  finishPractice: () => dispatch({ type: "FINISH" }),
  showResultsPractice: () => dispatch({ type: "RESULTS" }),
  changeDisabled: (isDisabled: boolean) =>
    dispatch({ type: "CHANGE_DISABLED", payload: { isDisabled } }),
  setCase: (data) => dispatch({ type: "SET_CASE", payload: { ...data } }),
});

export default actionCreator;

// export const startPractice = () => ({
//   type: "START",
// });

// export const checkAnswer = (id: string): Action => ({
//   type: "CHECK_ANSWER",
//   payload: { id },
// });

// export const continuePractice = () => ({
//   type: "CONTINUE",
// });

// export const finishPractice = () => ({
//   type: "FINISH",
// });

// export const showResultsPractice = () => ({
//   type: "RESULTS",
// });

// export const changeDisabled = (number: number): Action => ({
//   type: "CHANGE_DISABLED",
//   payload: { number },
// });

// export const setCase = (isReady: boolean, number: number): Action => ({
//   type: "SET_CASE",
//   payload: { isReady, number },
// });
