import { nanoid } from "nanoid";
import type { Step, State } from "./types";

import { useReducer } from "react";

const getBasicState = (): State => {
  const lessonId = nanoid();
  const step = createStep({ number: 0, parentLessonId: lessonId });
  return {
    lessons: [{ id: lessonId }],
    currentScreen: "Skill",
    steps: [step],
    basicInfoReady: false,
    stepsReady: false,
    activeStepId: step.id,
    activeLessonId: lessonId,
  };
};

const createStep = ({ number = 0, parentLessonId = "qwerty" }): Step => {
  return {
    // active: true,
    // question: "",
    id: nanoid(),
    answer: "",
    number,
    // keywords: [],
    stepType: "",
    ready: false,
    // text: "",
    // variants: [],
    parentLessonId,
    options: {},
  };
};

enum actionTypes {
  setup = "SETUP",
  setStepType = "SET_STEP_TYPE",
  removeStep = "REMOVE_STEP",
  removeStepType = "REMOVE_STEP_TYPE",
  setStepActive = "SET_STEP_ACTIVE",
  setQuestion = "SET_QUESTION",
  setKeywords = "SET_KEYWORDS",
  setAnswer = "SET_ANSWER",
  addLesson = "ADD_LESSON",
  addStep = "ADD_STEP",
  setStepReady = "SET_STEP_READY",
  changeCurrentScreen = "CHANGE_CURRENT_SCREEN",
  setBasicInfoReady = "SET_BASIC_INFO_READY",
  setStepsReady = "SET_STEPS_READY",
  setLessonActive = "SET_LESSON_ACTIVE",
}

type Action =
  | { type: actionTypes.setup; steps: Step[] }
  | { type: actionTypes.setStepType; payload: { stepType: string; id: string } }
  | { type: actionTypes.removeStep }
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
  | { type: actionTypes.addLesson }
  | { type: actionTypes.addStep }
  | {
      type: actionTypes.setStepReady;
      payload: { isReady: boolean; number: number };
    }
  | { type: actionTypes.setAnswer; payload: { answer: string; number: number } }
  | { type: actionTypes.changeCurrentScreen; currentScreen: "Skill" | "Steps" }
  | { type: actionTypes.setBasicInfoReady; isReady: boolean }
  | { type: actionTypes.setStepsReady; isReady: boolean }
  | { type: actionTypes.setLessonActive; id: string };

export const basicState = getBasicState();

function constructorReducer(state: State, action: Action): State {
  const { steps, lessons, activeStepId, activeLessonId } = state;
  const { type } = action;

  switch (type) {
    case actionTypes.setup: {
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
      newSteps[number].options.question = question;
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
      newSteps[number].options.keywords = keywords;
      return { ...state, steps: [...newSteps] };
    }
    case actionTypes.addStep: {
      // const { parentLessonId } = action;
      const newStep = createStep({
        number: steps.length,
        parentLessonId: activeLessonId,
      });
      // const newSteps = steps.map((step) => ({ ...step }));
      return {
        ...state,
        steps: [...steps, newStep],
        activeStepId: newStep.id,
      };
    }
    case actionTypes.removeStep: {
      const newSteps = steps;
      const removeIdx = newSteps.indexOf(
        newSteps.find((step) => step.id === activeStepId) as Step
      );
      newSteps.splice(removeIdx, 1);
      // const newSteps = steps
      //   .filter((item: Step) => action.id !== item.id)
      //   .map((item: Step, i: number) => ({ ...item, number: i }));
      const lastStep = newSteps.at(-1) as Step;
      return {
        ...state,
        steps: [...newSteps],
        activeStepId: lastStep.id,
      };
    }
    case actionTypes.addLesson: {
      const lessonId = nanoid();
      const newLesson = {
        id: lessonId,
      };
      const newStep = createStep({
        number: steps.length,
        parentLessonId: lessonId,
      });
      const newSteps = steps.map((step) => ({ ...step, active: false }));
      return {
        ...state,
        lessons: [...lessons, newLesson],
        steps: [...newSteps, newStep],
        activeLessonId: lessonId,
        activeStepId: newStep.id,
      };
    }
    case actionTypes.changeCurrentScreen: {
      const { currentScreen } = action;
      return { ...state, currentScreen };
    }
    case actionTypes.setLessonActive: {
      const { id } = action;
      return { ...state, activeLessonId: id };
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

  const setup = (steps: Step[]) => dispatch({ type: actionTypes.setup, steps });
  const setStepType = (stepType: string, id: string) =>
    dispatch({ type: actionTypes.setStepType, payload: { stepType, id } });
  const removeStep = () => dispatch({ type: actionTypes.removeStep });
  const removeStepType = (id: string) =>
    dispatch({ type: actionTypes.removeStepType, id });
  const setStepActive = (id: string) =>
    dispatch({ type: actionTypes.setStepActive, id });
  const setQuestion = (question: string, number: number) =>
    dispatch({ type: actionTypes.setQuestion, payload: { question, number } });
  const setKeywords = (keywords: string[], number: number) =>
    dispatch({ type: actionTypes.setKeywords, payload: { keywords, number } });
  const addLesson = () => dispatch({ type: actionTypes.addLesson });
  const addStep = () => dispatch({ type: actionTypes.addStep });
  const setStepReady = (isReady: boolean, number: number) =>
    dispatch({ type: actionTypes.setStepReady, payload: { isReady, number } });
  const setAnswer = (answer: string, number: number) =>
    dispatch({ type: actionTypes.setAnswer, payload: { answer, number } });
  const changeCurrentScreen = (currentScreen: "Skill" | "Steps") =>
    dispatch({ type: actionTypes.changeCurrentScreen, currentScreen });
  const setBasicInfoReady = (isReady: boolean) =>
    dispatch({ type: actionTypes.setBasicInfoReady, isReady });
  const setStepsReady = (isReady: boolean) =>
    dispatch({ type: actionTypes.setStepsReady, isReady });
  const setLessonActive = (id: string) =>
    dispatch({ type: actionTypes.setLessonActive, id });

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
    addLesson,
    addStep,
    setStepReady,
    changeCurrentScreen,
    setBasicInfoReady,
    setStepsReady,
    setLessonActive,
  };
}

const initialContext = {
  ...basicState,
  setStepType: (stepType: string, id: string) => {},
  setup: (steps: Step[]) => {},
  removeStep: () => {},
  removeStepType: (id: string) => {},
  setStepActive: (id: string) => {},
  setQuestion: (question: string, number: number) => {},
  setAnswer: (answer: string | string[], number: number) => {},
  setKeywords: (keywords: string[], number: number) => {},
  addLesson: () => {},
  addStep: () => {},
  setStepReady: (isReady: boolean, number: number) => {},
  changeCurrentScreen: (currentScreen: "Skill" | "Steps") => {},
  setBasicInfoReady: (isReady: boolean) => {},
  setStepsReady: (isReady: boolean) => {},
  setLessonActive: (id: string) => {},
};

export { useConstructorReducer, constructorReducer, initialContext };
