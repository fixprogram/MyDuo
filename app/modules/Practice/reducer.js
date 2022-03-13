const basicState = {
  disabled: false, // For button
  progress: 0, // Current progress
  step: 0, // Current step number
  content: {}, // Current step. Contains Question, Answer and Keywords
  caseItem: [], // Array of all steps
  maxSteps: 0, // Max steps
};

// The function returns next step if there is any
const continueContent = (content, caseItem) =>
  caseItem.length > 0 ? caseItem.shift(0, 1) : content;

const reducer = (state, action) => {
  const { content, step, maxSteps, caseItem } = state;
  switch (action.type) {
    case "CONTINUE":
      return {
        ...state,
        progress: (step + 1) / maxSteps,
        step: step + 1,
        disabled: true,
        content: continueContent(content, caseItem),
      };
    case "START":
      return {
        ...state,
        disabled: true,
        step: step + 1,
        progress: 1 / maxSteps,
      };
    case "CHECK_ANSWER":
      if (action.payload === content.answer) {
        return {
          ...state,
          disabled: false,
          content: continueContent(content, caseItem),
          step: step + 1,
        };
      }
      return {
        ...state,
        disabled: true,
      };
    case "CHANGE_DISABLED":
      return { ...state, disabled: action.payload };
    case "RESULTS":
      return {
        ...state,
        progress: step / maxSteps,
        step: step + 1,
      };
    case "FINISH":
      return {
        ...basicState,
      };
    case "SET_CASE":
      const { steps } = action.payload;
      return {
        ...basicState,
        caseItem: steps,
        maxSteps: steps.length + 1,
        content: steps.shift(0, 1),
      };
    default:
      throw new Error(`We don't know this case: ${action.type}`);
  }
};

export { reducer, basicState };
