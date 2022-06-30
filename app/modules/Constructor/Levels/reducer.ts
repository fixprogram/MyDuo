import type { Step, State } from "./types";
import { nanoid } from "nanoid";

const createStep = ({ number = 0, chapter = 1 }) => {
  return {
    active: true,
    question: "",
    id: nanoid(),
    answer: "",
    number,
    keywords: [],
    stepType: "",
    ready: false,
    text: "",
    variants: [],
    chapter,
  };
};

// export const reducer = (state: State, action: Action): State => {
//   const { steps, chapters } = state;
//   const { type } = action;
//   switch (type) {
//     case "SET_DATA": {
//       const { steps } = action.payload;
//       return {
//         ...state,
//         steps,
//       };
//     }
//     case "SET_STEP_TYPE": {
//       const { stepType, id } = action.payload;
//       const newSteps = steps.map((step: Step) =>
//         step.id === id ? { ...step, stepType: stepType } : { ...step }
//       );
//       return { ...state, steps: [...newSteps] };
//     }
//     case "REMOVE_STEP_TYPE": {
//       const { id } = action.payload;
//       const newSteps = steps.map((step: Step) => {
//         if (step.id === id) {
//           return {
//             ...step,
//             stepType: "",
//             keywords: [],
//             answer: "",
//             ready: false,
//           };
//         } else {
//           return { ...step };
//         }
//       });
//       return { ...state, steps: [...newSteps] };
//     }
//     case "SET_STEP_READY": {
//       const { isReady, number } = action.payload;
//       const newSteps = steps;
//       newSteps[number].ready = isReady;
//       return {
//         ...state,
//         steps: [...newSteps],
//       };
//     }
//     case "SET_STEP_ACTIVE": {
//       const { id } = action.payload;
//       const newSteps = steps.map((step) => {
//         if (step.id === id) {
//           return { ...step, active: true };
//         }
//         return { ...step, active: false };
//       });
//       return { ...state, steps: [...newSteps] };
//     }
//     case "SET_QUESTION": {
//       const { question, number } = action.payload;
//       let newSteps = steps;
//       newSteps[number].question = question;
//       return { ...state, steps: [...newSteps] };
//     }
//     case "SET_ANSWER": {
//       const { answer, number } = action.payload;
//       let newSteps = steps;
//       newSteps[number].answer = answer;
//       return { ...state, steps: [...newSteps] };
//     }
//     case "SET_KEYWORDS": {
//       let { keywords, number } = action.payload;
//       let newSteps = steps;
//       newSteps[number].keywords = keywords;
//       return { ...state, steps: [...newSteps] };
//     }
//     case "ADD_STEP": {
//       const { chapter } = action.payload;
//       const newSteps = steps.map((step) => ({ ...step, active: false }));
//       return {
//         ...state,
//         steps: [...newSteps, createStep({ number: steps.length, chapter })],
//       };
//     }
//     case "REMOVE_STEP": {
//       const newSteps = steps
//         .filter((item: Step) => action.payload.id !== item.id)
//         .map((item: Step, i: number) => ({ ...item, number: i }));
//       return {
//         ...state,
//         steps: [...newSteps],
//       };
//     }
//     case "ADD_CHAPTER": {
//       const newChapter = chapters.length + 1;
//       const newSteps = steps.map((step) => ({ ...step, active: false }));
//       return {
//         ...state,
//         chapters: [...chapters, newChapter],
//         steps: [
//           ...newSteps,
//           createStep({ number: steps.length, chapter: newChapter }),
//         ],
//       };
//     }
//     case "CHANGE_CURRENT_SCREEN": {
//       const { currentScreen } = action.payload;
//       return { ...state, currentScreen };
//     }
//     default:
//       throw new Error(`We don't know this action type: ${type}`);
//   }
// };

import { Lesson } from "@prisma/client";
import { useReducer } from "react";

enum actionTypes {
  setData = "SET_DATA",
  setStepType = "SET_STEP_TYPE",
  removeStep = "REMOVE_STEP",
  removeStepType = "REMOVE_STEP_TYPE",
  setStepActive = "SET_STEP_ACTIVE",
  setQuestion = "SET_QUESTION",
  setKeywords = "SET_KEYWORDS",
  setAnswer = "SET_ANSWER",
  addChapter = "ADD_CHAPTER",
  addStep = "ADD_STEP",
  setStepReady = "SET_STEP_READY",
  changeCurrentScreen = "CHANGE_CURRENT_SCREEN",
  setBasicInfoReady = "SET_BASIC_INFO_READY",
  setStepsReady = "SET_STEPS_READY",
}

type Action =
  | { type: actionTypes.setData; steps: Lesson[] }
  | { type: actionTypes.setStepType; payload: { stepType: string; id: string } }
  | { type: actionTypes.removeStep; id: string }
  | { type: actionTypes.removeStepType; id: string }
  | { type: actionTypes.setStepActive; id: string }
  | {
      type: actionTypes.setQuestion;
      payload: { question: string; number: number };
    }
  | {
      type: actionTypes.setKeywords;
      payload: { keywords: string[]; number: number };
    }
  | { type: actionTypes.addChapter }
  | { type: actionTypes.addStep; chapter: number }
  | {
      type: actionTypes.setStepReady;
      payload: { isReady: boolean; number: number };
    }
  | { type: actionTypes.setAnswer; payload: { answer: string; number: number } }
  | { type: actionTypes.changeCurrentScreen; currentScreen: string }
  | { type: actionTypes.setBasicInfoReady; isReady: boolean }
  | { type: actionTypes.setStepsReady; isReady: boolean };

export const basicState = {
  chapters: [1],
  currentScreen: "Skill",
  steps: [createStep({})],
  basicInfoReady: false,
  stepsReady: false,
} as State;

function constructorReducer(state: State, action: Action): State {
  const { steps, chapters } = state;
  const { type } = action;

  switch (type) {
    case actionTypes.setData: {
      const { steps } = action;
      return {
        ...state,
        steps,
      };
    }
    case actionTypes.setStepType: {
      const { stepType, id } = action.payload;
      const newSteps = steps.map((step: Step) =>
        step.id === id ? { ...step, stepType: stepType } : { ...step }
      );
      return { ...state, steps: [...newSteps] };
    }
    case actionTypes.removeStepType: {
      const { id } = action;
      const newSteps = steps.map((step: Step) => {
        if (step.id === id) {
          return {
            ...step,
            stepType: "",
            keywords: [],
            answer: "",
            ready: false,
          };
        } else {
          return { ...step };
        }
      });
      return { ...state, steps: [...newSteps] };
    }
    case actionTypes.setStepReady: {
      const { isReady, number } = action.payload;
      const newSteps = steps;
      newSteps[number].ready = isReady;
      return {
        ...state,
        steps: [...newSteps],
      };
    }
    case actionTypes.setStepActive: {
      const { id } = action;
      const newSteps = steps.map((step) => {
        if (step.id === id) {
          return { ...step, active: true };
        }
        return { ...step, active: false };
      });
      return { ...state, steps: [...newSteps] };
    }
    case actionTypes.setQuestion: {
      const { question, number } = action.payload;
      let newSteps = steps;
      newSteps[number].question = question;
      return { ...state, steps: [...newSteps] };
    }
    case actionTypes.setAnswer: {
      const { answer, number } = action.payload;
      let newSteps = steps;
      newSteps[number].answer = answer;
      return { ...state, steps: [...newSteps] };
    }
    case actionTypes.setKeywords: {
      let { keywords, number } = action.payload;
      let newSteps = steps;
      newSteps[number].keywords = keywords;
      return { ...state, steps: [...newSteps] };
    }
    case actionTypes.addStep: {
      const { chapter } = action;
      const newSteps = steps.map((step) => ({ ...step, active: false }));
      return {
        ...state,
        steps: [...newSteps, createStep({ number: steps.length, chapter })],
      };
    }
    case actionTypes.removeStep: {
      const newSteps = steps
        .filter((item: Step) => action.id !== item.id)
        .map((item: Step, i: number) => ({ ...item, number: i }));
      return {
        ...state,
        steps: [...newSteps],
      };
    }
    case actionTypes.addChapter: {
      const newChapter = chapters.length + 1;
      const newSteps = steps.map((step) => ({ ...step, active: false }));
      return {
        ...state,
        chapters: [...chapters, newChapter],
        steps: [
          ...newSteps,
          createStep({ number: steps.length, chapter: newChapter }),
        ],
      };
    }
    case actionTypes.changeCurrentScreen: {
      const { currentScreen } = action;
      return { ...state, currentScreen };
    }
    case actionTypes.setBasicInfoReady: {
      const { isReady } = action;
      return { ...state, basicInfoReady: isReady };
    }
    case actionTypes.setStepsReady: {
      const { isReady } = action;
      return { ...state, stepsReady: isReady };
    }
    default:
      throw new Error(`We don't know this action type: ${type}`);
  }
}

function useConstructorReducer({
  initialState = basicState,
  reducer = constructorReducer,
} = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setup = (steps: Lesson[]) =>
    dispatch({ type: actionTypes.setData, steps });
  const setStepType = (stepType: string, id: string) =>
    dispatch({ type: actionTypes.setStepType, payload: { stepType, id } });
  const removeStep = (id: string) =>
    dispatch({ type: actionTypes.removeStep, id });
  const removeStepType = (id: string) =>
    dispatch({ type: actionTypes.removeStepType, id });
  const setStepActive = (id: string) =>
    dispatch({ type: actionTypes.setStepActive, id });
  const setQuestion = (question: string, number: number) =>
    dispatch({ type: actionTypes.setQuestion, payload: { question, number } });
  const setKeywords = (keywords: string[], number: number) =>
    dispatch({ type: actionTypes.setKeywords, payload: { keywords, number } });
  const addChapter = () => dispatch({ type: actionTypes.addChapter });
  const addStep = (chapter: number) =>
    dispatch({ type: actionTypes.addStep, chapter });
  const setStepReady = (isReady: boolean, number: number) =>
    dispatch({ type: actionTypes.setStepReady, payload: { isReady, number } });
  const setAnswer = (answer: string, number: number) =>
    dispatch({ type: actionTypes.setAnswer, payload: { answer, number } });
  const changeCurrentScreen = (currentScreen: string) =>
    dispatch({ type: actionTypes.changeCurrentScreen, currentScreen });
  const setBasicInfoReady = (isReady: boolean) =>
    dispatch({ type: actionTypes.setBasicInfoReady, isReady });
  const setStepsReady = (isReady: boolean) =>
    dispatch({ type: actionTypes.setStepsReady, isReady });

  return {
    ...state,
    setStepType,
    setup,
    removeStep,
    removeStepType,
    setStepActive,
    setQuestion,
    setAnswer,
    setKeywords,
    addChapter,
    addStep,
    setStepReady,
    changeCurrentScreen,
    setBasicInfoReady,
    setStepsReady,
  };
}

const initialContext = {
  ...basicState,
  setStepType: (stepType: string, id: string) => {},
  setup: (steps: Lesson[]) => {},
  removeStep: (id: string) => {},
  removeStepType: (id: string) => {},
  setStepActive: (id: string) => {},
  setQuestion: (question: string, number: number) => {},
  setAnswer: (answer: string | string[], number: number) => {},
  setKeywords: (keywords: string[], number: number) => {},
  addChapter: () => {},
  addStep: (chapter: number) => {},
  setStepReady: (isReady: boolean, number: number) => {},
  changeCurrentScreen: (currentScreen: string) => {},
  setBasicInfoReady: (isReady: boolean) => {},
  setStepsReady: (isReady: boolean) => {},
};

export { useConstructorReducer, constructorReducer, initialContext };
