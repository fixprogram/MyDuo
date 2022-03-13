const actionCreator = (dispatch) => ({
  checkAnswer: (payload) => dispatch({ type: "CHECK_ANSWER", payload }),
  showResultsPractice: () => dispatch({ type: "RESULTS" }),
  finishPractice: () => dispatch({ type: "FINISH" }),
  startPractice: () => dispatch({ type: "START" }),
  continuePractice: () => dispatch({ type: "CONTINUE" }),
  changeDisabled: (payload) => dispatch({ type: "CHANGE_DISABLED", payload }),
  setCase: (data) => dispatch({ type: "SET_CASE", payload: { ...data } }),
});

export default actionCreator;
