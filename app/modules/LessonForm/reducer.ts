import type { Step } from "./types";

const createId = () => Math.random() * 100;

const reducer = (
  state: any,
  action: {
    type: string;
    payload?: {
      answer?: string;
      number?: number;
      keywords?: string[];
    };
  }
) => {
  const { steps } = state;
  switch (action.type) {
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
        },
      ];
      return { ...state, steps: newSteps };
    }
    case "REMOVE_STEP": {
      console.log("STEPS: ", steps);
      console.log("NUM: ", action.payload?.number);
      const newSteps = steps
        .filter((item: Step) => action.payload.number !== item.id)
        .map((item: Step, i: number) => ({ ...item, number: i }));
      console.log("NEW STEPS: ", newSteps);
      return {
        ...state,
        steps: newSteps,
      };
    }
    default:
      throw new Error(`We don't know this action type: ${action.type}`);
  }
};

export { reducer, createId };
