import type { Step, State } from "./types";
import { Action } from "./actions";
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

export const basicState = {
  chapters: [1],
  currentScreen: "Topic",
  steps: [createStep({})],
} as State;

export const reducer = (state: State, action: Action): State => {
  const { steps, chapters } = state;
  const { type } = action;
  switch (type) {
    case "SET_DATA": {
      const { steps } = action.payload;
      console.log("Steps: ", steps[0].keywords);
      return {
        ...state,
        steps,
      };
    }
    case "SET_STEP_TYPE": {
      const { stepType, id } = action.payload;
      const newSteps = steps.map((step: Step) =>
        step.id === id ? { ...step, stepType: stepType } : { ...step }
      );
      return { ...state, steps: [...newSteps] };
    }
    case "REMOVE_STEP_TYPE": {
      const { id } = action.payload;
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
    case "SET_STEP_READY": {
      const { isReady, number } = action.payload;
      const newSteps = steps;
      newSteps[number].ready = isReady;
      return {
        ...state,
        steps: [...newSteps],
      };
    }
    case "SET_STEP_ACTIVE": {
      const { id } = action.payload;
      const newSteps = steps.map((step) => {
        if (step.id === id) {
          return { ...step, active: true };
        }
        return { ...step, active: false };
      });
      return { ...state, steps: [...newSteps] };
    }
    case "SET_QUESTION": {
      const { question, number } = action.payload;
      let newSteps = steps;
      newSteps[number].question = question;
      return { ...state, steps: [...newSteps] };
    }
    case "SET_ANSWER": {
      const { answer, number } = action.payload;
      let newSteps = steps;
      newSteps[number].answer = answer;
      return { ...state, steps: [...newSteps] };
    }
    case "SET_KEYWORDS": {
      let { keywords, number } = action.payload;
      let newSteps = steps;
      newSteps[number].keywords = keywords;
      return { ...state, steps: [...newSteps] };
    }
    case "ADD_STEP": {
      const { chapter } = action.payload;
      const newSteps = steps.map((step) => ({ ...step, active: false }));
      // const newSteps = [
      //   ...steps,
      //   createStep({ number: steps.length, chapter }),
      // ];
      return {
        ...state,
        steps: [...newSteps, createStep({ number: steps.length, chapter })],
      };
    }
    case "REMOVE_STEP": {
      const newSteps = steps
        .filter((item: Step) => action.payload.id !== item.id)
        .map((item: Step, i: number) => ({ ...item, number: i }));
      return {
        ...state,
        steps: [...newSteps],
      };
    }
    case "ADD_CHAPTER": {
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
    case "CHANGE_CURRENT_SCREEN": {
      const { currentScreen } = action.payload;
      return { ...state, currentScreen };
    }
    default:
      throw new Error(`We don't know this action type: ${type}`);
  }
};
