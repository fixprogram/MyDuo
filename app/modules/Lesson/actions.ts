export type Action =
  | { type: "START" }
  | { type: "CHECK_ANSWER"; payload: { answer: string[] } }
  | { type: "CONTINUE" }
  | { type: "FINISH" }
  | { type: "RESULTS" }
  | { type: "CHANGE_DISABLED"; payload: {} }
  | { type: "SET_CASE"; payload: { data: any } };

const actionCreator = (dispatch: Function) => ({
  startPractice: () => dispatch({ type: "START" }),
  checkAnswer: (answer: string[]) =>
    dispatch({ type: "CHECK_ANSWER", payload: { answer } }),
  continuePractice: () => dispatch({ type: "CONTINUE" }),
  finishPractice: () => dispatch({ type: "FINISH" }),
  showResultsPractice: () => dispatch({ type: "RESULTS" }),
  changeDisabled: (isDisabled: boolean) =>
    dispatch({ type: "CHANGE_DISABLED", payload: { isDisabled } }),
  setCase: (data: any) => dispatch({ type: "SET_CASE", payload: { ...data } }),
});

export default actionCreator;
