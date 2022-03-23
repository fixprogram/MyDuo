import type { Step, State, Action } from "./types";
import { createId } from "./utils";

export const basicState: State = {
  steps: [{ number: 0, keywords: [], answer: "", style: "", id: createId }],
};

export const reducer = (state: State, action: Action) => {
  const { steps } = state;
  const { type, payload } = action;
  switch (type) {
    case "SET_STYLE": {
      const { style, id } = payload;
      const newSteps = steps.map((step) =>
        step.id === id ? { ...step, style: style } : { ...step }
      );
      return { ...state, steps: [...newSteps] };
    }
    case "SET_ANSWER": {
      const { answer, number } = payload;
      let newSteps = steps;
      newSteps[number].answer = answer;
      return { ...state, steps: newSteps };
    }
    case "SET_KEYWORDS": {
      let { keywords, number } = payload;
      let newSteps = steps;
      newSteps[number].keywords = keywords;
      return { ...state, steps: newSteps };
    }
    case "ADD_STEP": {
      const newSteps = [
        ...steps,
        {
          number: steps.length,
          keywords: [],
          answer: "",
          id: createId(),
          style: "",
        },
      ];
      return { ...state, steps: newSteps };
    }
    case "REMOVE_STEP": {
      const newSteps = steps
        .filter((item: Step) => payload.number !== item.id)
        .map((item: Step, i: number) => ({ ...item, number: i }));
      return {
        ...state,
        steps: newSteps,
      };
    }
    default:
      throw new Error(`We don't know this action type: ${type}`);
  }
};
