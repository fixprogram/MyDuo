const basicState = {
  disabled: false, // For button
  progress: 0, // Current progress
  step: 0, // Current step number
  content: {}, // Current step. Contains Question, Answer and Keywords
  caseItem: [], // Array of all steps
  maxSteps: 0, // Max steps
  stateWrong: false, // Was the answer wrong
  stateRight: false, // Was the answer right
  formDisabled: false, // Disable form when check the answer
  nextStep: false, // Next step if the answer was wrong
};

// The function returns next step if there is any
const continueContent = (content, caseItem) =>
  caseItem.length > 0 ? caseItem.shift(0, 1) : content;

const reducer = (state, action) => {
  const { content, step, maxSteps, caseItem } = state;
  switch (action.type) {
    case "CONTINUE": // Go to next step
      return {
        ...state,
        step: step + 1,
        disabled: step === maxSteps ? false : true,
        content: continueContent(content, caseItem),
        formDisabled: false,
        stateRight: false,
        stateWrong: false,
        nextStep: false,
      };
    case "START": // Going to first step right after Welcome screen
      return {
        ...state,
        disabled: true,
        step: 1,
        content: continueContent(content, caseItem),
      };
    case "CHECK_ANSWER": // When click the button Check
      if (action.payload === content.answer) {
        return {
          ...state,
          disabled: false,
          // content: continueContent(content, caseItem),
          nextStep: true,
          // step: step + 1,
          stateRight: true,
          formDisabled: true,
          progress: step / maxSteps,
        };
      }
      return {
        ...state,
        stateWrong: true,
        formDisabled: true,
        disabled: false,
        caseItem: [...state.caseItem, content],
        maxSteps: state.maxSteps + 1,
        nextStep: true,
      };
    case "CHANGE_DISABLED":
      return { ...state, disabled: action.payload };
    case "RESULTS":
      return {
        ...state,
        step: step + 1,
        stateRight: false,
        stateWrong: false,
      };
    case "SET_CASE": // Initial action to set data right after loading component
      const { steps } = action.payload;
      return {
        ...basicState,
        step: 0,
        caseItem: steps,
        maxSteps: steps.length,
        // content: steps.shift(0, 1),
      };
    default:
      throw new Error(`We don't know this case: ${action.type}`);
  }
};

export { reducer, basicState };
