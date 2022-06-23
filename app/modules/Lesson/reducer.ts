import { Lesson } from "@prisma/client";
import { useReducer } from "react";
import { SkillState } from "./types";

// The function returns next stepNumber if there is any
const continueContent = (content: Lesson, lessonSteps: Lesson[] | any) =>
  lessonSteps.length > 0 ? lessonSteps.shift(0, 1) : content;

enum actionTypes {
  continue = "CONTINUE",
  setup = "SETUP",
  results = "RESULTS",
  setStateRight = "SET_STATE_RIGHT",
  setStateWrong = "SET_STATE_WRONG",
  setCheckDisabled = "SET_CHECK_DISABLED",
  updateState = "UPDATE_STATE",
}

type Action =
  | { type: actionTypes.setup; steps: Lesson[] }
  | { type: actionTypes.continue }
  | { type: actionTypes.results }
  | { type: actionTypes.setCheckDisabled; disabled: boolean }
  | { type: actionTypes.setStateRight }
  | { type: actionTypes.setStateWrong }
  | { type: actionTypes.updateState; update: {} };

export const basicState: SkillState = {
  progress: 0,
  stepNumber: 0,
  content: {
    id: "",
    number: 0,
    answer: [""],
    stepType: "",
    question: "",
    text: "",
    keywords: [""],
    definition: "",
    variants: [],
    isToChoose: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    chapter: 1,
    languageId: "",
  },
  lessonSteps: [], // Array of all steps
  maxSteps: 0, // Max steps
  topicState: { status: "idle", formDisabled: false, buttonDisabled: true },
};

function skillReducer(state: SkillState, action: Action): SkillState {
  const { content, stepNumber, maxSteps, lessonSteps, topicState } = state;
  const positiveState = {
    ...state,
    progress: stepNumber / maxSteps,
    topicState: {
      status: "right",
      formDisabled: true,
      buttonDisabled: false,
    },
  };
  const negativeState = {
    ...state,
    lessonSteps: [...lessonSteps, content],
    stepNumber: stepNumber - 1,
    topicState: {
      status: "wrong",
      formDisabled: true,
      buttonDisabled: false,
    },
  };
  switch (action.type) {
    case actionTypes.continue:
      const isResults = stepNumber === maxSteps;
      return {
        ...state,
        stepNumber: stepNumber + 1,
        content: continueContent(content, lessonSteps),
        topicState: {
          ...topicState,
          status: isResults ? "results" : "idle",
          formDisabled: false,
          buttonDisabled: isResults ? false : true,
        },
      };
    case actionTypes.setup: // Initial action to set data right after loading component
      const { steps } = action;
      return {
        ...basicState,
        stepNumber: 1,
        lessonSteps: steps,
        maxSteps: steps.length,
        content: steps.shift() as Lesson,
      };
    case actionTypes.results:
      return {
        ...state,
        stepNumber: stepNumber + 1,
        topicState: { ...topicState, status: "results" },
      };
    case actionTypes.setStateRight:
      return positiveState;
    case actionTypes.setStateWrong:
      return negativeState;
    case actionTypes.setCheckDisabled:
      const { disabled } = action;
      return {
        ...state,
        topicState: { ...topicState, buttonDisabled: disabled },
      };
    case actionTypes.updateState:
      const { update } = action;
      return { ...state, ...update };
    default: {
      throw new Error(`Unsupported action: ${action}`);
    }
  }
}

function useSkillReducer({
  initialState = basicState,
  reducer = skillReducer,
} = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { content, progress, topicState, stepNumber, maxSteps } = state;

  const continueTopic = () => dispatch({ type: actionTypes.continue });
  const setup = (steps: Lesson[]) =>
    dispatch({ type: actionTypes.setup, steps });
  const showResults = () => dispatch({ type: actionTypes.results });
  const setStateRight = () => dispatch({ type: actionTypes.setStateRight });
  const setStateWrong = () => dispatch({ type: actionTypes.setStateWrong });
  const setCheckDisabled = (disabled: boolean) =>
    dispatch({ type: actionTypes.setCheckDisabled, disabled });
  const updateState = (update: {}) =>
    dispatch({ type: actionTypes.updateState, update });

  return {
    content,
    progress,
    topicState,
    stepNumber,
    maxSteps,
    continueTopic,
    setup,
    showResults,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
    updateState,
  };
}

const defaultSkillContextState = {
  ...basicState,
  setup: () => {},
  continueTopic: () => {},
  showResults: () => {},
  setStateRight: () => {},
  setStateWrong: () => {},
  setCheckDisabled: () => {},
  updateState: () => {},
};

export { useSkillReducer, skillReducer, defaultSkillContextState };
