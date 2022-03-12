const actionCreator = (dispatch) => ({
  checkAnswer: () => dispatch({ type: "CHECK_ANSWER" }),
  showResultsPractice: () => dispatch({ type: "RESULTS" }),
  finishPractice: () => dispatch({ type: "FINISH" }),
  startPractice: () => dispatch({ type: "START" }),
  continuePractice: () => dispatch({ type: "CONTINUE" }),
  setCase: (data) => dispatch({ type: "SET_CASE", payload: { ...data } }),
});

export default actionCreator;
