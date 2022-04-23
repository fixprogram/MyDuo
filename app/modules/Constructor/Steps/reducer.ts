import type { Step, State } from "./types";
import { Action } from "./actions";
import { nanoid } from "nanoid";

export const basicState: State = {
  steps: [
    {
      question: "",
      number: 0,
      keywords: [],
      answer: "",
      stepType: "",
      ready: false,
      id: nanoid(),
      text: "",
      variants: [],
    },
  ],
};

export const reducer = (state: State, action: Action) => {
  const { steps } = state;
  const { type } = action;
  switch (type) {
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
      const newSteps = [
        ...steps,
        {
          number: steps.length,
          keywords: [],
          answer: "",
          ready: false,
          id: nanoid(),
          stepType: "",
        },
      ];
      return { ...state, steps: [...newSteps] };
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
    case "SET_STEP_READY": {
      const { isReady, number } = action.payload;
      const newSteps = steps;
      newSteps[number].ready = isReady;
      return {
        ...state,
        steps: [...newSteps],
      };
    }
    case "SET_DATA": {
      const { steps } = action.payload;
      return {
        ...state,
        steps,
      };
    }
    case "SET_QUESTION": {
      const { question, number } = action.payload;
      let newSteps = steps;
      newSteps[number].question = question;
      return { ...state, steps: [...newSteps] };
    }
    default:
      throw new Error(`We don't know this action type: ${type}`);
  }
};
