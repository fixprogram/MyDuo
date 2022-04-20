import { LessonStep } from "@prisma/client";
import { doesArrayContainItems } from "~/utils";
import { Action } from "./actions";
import { LessonState } from "./types";

const basicState = {
  disabled: false, // Disabled state for preventing actions when the asnwer is checked
  progress: 0, // Current progress
  stepNumber: 0, // Current stepNumber number
  content: {}, // Current stepNumber. Contains Question, Answer and Keywords
  lessonSteps: [{}], // Array of all steps
  maxSteps: 0, // Max steps
  stateWrong: false, // Was the answer wrong
  stateRight: false, // Was the answer right
  formDisabled: false, // Disable form when check the answer
  nextStep: false, // Next stepNumber if the answer was wrong
};

// The function returns next stepNumber if there is any
const continueContent = (
  content: LessonStep,
  lessonSteps: LessonStep[] | any
) => (lessonSteps.length > 0 ? lessonSteps.shift(0, 1) : content);

const reducer = (state: LessonState, action: Action) => {
  const { content, stepNumber, maxSteps, lessonSteps } = state;
  switch (action.type) {
    case "CONTINUE": // Go to next stepNumber
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
    case "CHECK_ANSWER": // When click the button Check
      const negativeState = {
        // This state we return if wrong
        ...state,
        stateWrong: true,
        formDisabled: true,
        disabled: false,
        lessonSteps: [...lessonSteps, content],
        stepNumber: stepNumber - 1,
        nextStep: true,
      };
      const positiveState = {
        // This one we return if right
        ...state,
        disabled: false,
        nextStep: true,
        stateRight: true,
        formDisabled: true,
        progress: stepNumber / maxSteps,
      };
      const { answer } = action.payload;

      switch (content.type) {
        case "Insert": {
          console.log("//////////////");
          console.log("Reducer");
          console.log(content.answer);
          console.log(answer);
          console.log("//////////////");
          const { length } = doesArrayContainItems(content.answer, answer);
          if (length === content.answer.length) {
            return positiveState;
          }
          return negativeState;
        }
        case "Question": {
          // split the answer because the whole user input is in answer[0]
          if (
            doesArrayContainItems(content.keywords, answer[0].split(" ")).state
          ) {
            return positiveState;
          }

          const { state, length } = doesArrayContainItems(
            content.answer,
            answer
          );

          if (!state) {
            return negativeState;
          }

          if (length < content.answer.length * 0.8) {
            // if user's response is less than 80% right, then return negative
            return negativeState;
          }

          return positiveState;
        }

        case "Variants": {
          if (content.answer[0] === answer[0]) {
            return positiveState;
          }
          return negativeState;
        }
        case "Pairs": {
          let idx: any;
          if (
            content.answer.find((answerItem, id) => {
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
            // return positiveState;
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
        content: steps.shift(0, 1),
        disabled: true,
      };
    default:
      throw new Error(`We don't know this case: ${action.type}`);
  }
};

export { reducer, basicState };
