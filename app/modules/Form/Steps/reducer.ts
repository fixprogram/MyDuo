import type { Step } from "./types";
import { createId } from "./utils";

const reducer = (
  state: any,
  action: {
    type: string;
    payload?: {
      answer?: string;
      number?: number;
      keywords?: string[];
      style?: string;
    };
  }
) => {
  const { steps } = state;
  switch (action.type) {
    case "SET_STYLE": {
      const { style } = action.payload;
      let lastChild = steps.pop();
      lastChild.style = style;
      return { ...state, steps: [...steps, lastChild] };
    }
    case "SET_ANSWER": {
      const { answer, number } = action.payload;
      let newSteps = steps;
      newSteps[number].answer = answer;
      return { ...state, steps: newSteps };
    }
    case "SET_KEYWORDS": {
      let { keywords, number } = action.payload;
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
        .filter((item: Step) => action.payload.number !== item.id)
        .map((item: Step, i: number) => ({ ...item, number: i }));
      return {
        ...state,
        steps: newSteps,
      };
    }
    default:
      throw new Error(`We don't know this action type: ${action.type}`);
  }
};

export { reducer };
