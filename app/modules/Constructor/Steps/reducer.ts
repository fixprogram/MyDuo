import type { Step, State } from "./types";
import { Action } from "./actions";
import { nanoid } from "nanoid";

export const basicState: State = {
  steps: [
    {
      number: 0,
      keywords: [],
      answer: "",
      lessonType: "",
      ready: false,
      id: nanoid(),
    },
  ],
};

export const reducer = (state: State, action: Action) => {
  const { steps } = state;
  const { type } = action;
  switch (type) {
    case "SET_STYLE": {
      const { lessonType, id } = action.payload;
      const newSteps = steps.map((step) =>
        step.id === id ? { ...step, lessonType: lessonType } : { ...step }
      );
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
          lessonType: "",
        },
      ];
      return { ...state, steps: [...newSteps] };
    }
    case "REMOVE_STEP": {
      const newSteps = steps
        .filter((item: Step) => action.payload.number !== item.id)
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
    default:
      throw new Error(`We don't know this action type: ${type}`);
  }
};
