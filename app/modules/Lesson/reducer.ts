import { Lesson } from "@prisma/client";
import { doesArrayContainItems } from "~/utils";
import { Action } from "./actions";
import { LessonState } from "./types";

const basicState: LessonState = {
  disabled: false, // Disabled state for preventing actions when the asnwer is checked
  progress: 0, // Current progress
  stepNumber: 0, // Current stepNumber number
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
  }, // Current stepNumber. Contains Question, Answer and Keywords
  lessonSteps: [], // Array of all steps
  maxSteps: 0, // Max steps
  stateWrong: false, // Was the answer wrong
  stateRight: false, // Was the answer right
  formDisabled: false, // Disable form when check the answer
  nextStep: false, // Next stepNumber if the answer was wrong
};

// The function returns next stepNumber if there is any
const continueContent = (content: Lesson, lessonSteps: Lesson[] | any) =>
  lessonSteps.length > 0 ? lessonSteps.shift(0, 1) : content;

const reducer = (state: LessonState, action: Action): LessonState => {
  const { content, stepNumber, maxSteps, lessonSteps } = state;
  switch (action.type) {
    case "CONTINUE":
      return {
        ...state,
        stepNumber: stepNumber + 1,
        disabled: stepNumber === maxSteps ? false : true,
        content: continueContent(content, lessonSteps),
        formDisabled: false,
        stateRight: false,
        stateWrong: false,
        nextStep: false,
      };
    case "CHECK_ANSWER":
      const negativeState = {
        ...state,
        stateWrong: true,
        formDisabled: true,
        disabled: false,
        lessonSteps: [...lessonSteps, content],
        stepNumber: stepNumber - 1,
        nextStep: true,
      };
      const positiveState = {
        ...state,
        disabled: false,
        nextStep: true,
        stateRight: true,
        formDisabled: true,
        progress: stepNumber / maxSteps,
      };
      const { answer } = action.payload;

      switch (content.stepType) {
        case "Insert": {
          const { length, items } = doesArrayContainItems(
            content.answer,
            answer
          );
          if (
            content.answer.filter(
              (ans: string, idx: number) => ans === items[idx]
            ).length === content.answer.length
          ) {
            return positiveState;
          }
          return negativeState;
        }
        case "Question": {
          // split the answer because the whole user input is in answer[0]

          const { state, length } = doesArrayContainItems(
            content.answer,
            answer[0].split(" ")
          );

          if (!state) {
            return negativeState;
          }

          if (
            doesArrayContainItems(content.keywords, answer[0].split(" "))
              .length === content.keywords.length
          ) {
            if (length < content.answer.length) {
              return positiveState;
            }

            return { ...positiveState, content: { ...content, answer: [""] } };
          }

          if (length < content.answer.length * 0.8) {
            // if user's response is less than 80% right, then return negative
            return negativeState;
          }
        }

        case "Variants": {
          if (content.answer[0] === answer[0]) {
            return positiveState;
          }
          return negativeState;
        }
        case "Pairs": {
          let idx = 0;
          if (
            content.answer.find((answerItem: string, id: number) => {
              idx = id;
              return (
                answerItem === answer[0] ||
                answerItem.split("").reverse().join("") === answer[0]
              );
            })
          ) {
            const newContent = content;
            newContent.answer.splice(idx, 1);
            if (newContent.answer.length === 0) {
              return positiveState;
            }
            return {
              ...state,
              content: newContent,
              disabled: true,
            };
          } else {
            return {
              ...state,
              disabled: true,
            };
          }
        }
        default: {
          throw new Error(`We don't know this type: ${action.type}`);
        }
      }
    case "CHANGE_DISABLED":
      return { ...state, disabled: action.payload.isDisabled };
    case "RESULTS":
      return {
        ...state,
        stepNumber: stepNumber + 1,
        stateRight: false,
        stateWrong: false,
      };
    case "SET_CASE": // Initial action to set data right after loading component
      const { steps } = action.payload;
      return {
        ...basicState,
        stepNumber: 1,
        lessonSteps: steps,
        maxSteps: steps.length,
        content: steps.shift() as Lesson,
        disabled: true,
      };
    default:
      throw new Error(`We don't know this type: ${action.type}`);
  }
};

export { reducer, basicState };
