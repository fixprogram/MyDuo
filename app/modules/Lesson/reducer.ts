import { doesArrayContainItems } from "~/utils";
import { Action } from "./actions";
import { LessonState } from "./types";

const basicState = {
  disabled: false, // Disabled state for preventing actions when the asnwer is checked
  progress: 0, // Current progress
  step: 0, // Current step number
  content: {}, // Current step. Contains Question, Answer and Keywords
  caseItem: [], // Array of all steps
  maxSteps: 0, // Max steps
  stateWrong: false, // Was the answer wrong
  stateRight: false, // Was the answer right
  formDisabled: false, // Disable form when check the answer
  nextStep: false, // Next step if the answer was wrong
};

// The function returns next step if there is any
const continueContent = (content, caseItem) =>
  caseItem.length > 0 ? caseItem.shift(0, 1) : content;

const reducer = (state: LessonState, action: Action) => {
  const { content, step, maxSteps, caseItem } = state;
  switch (action.type) {
    case "CONTINUE": // Go to next step
      return {
        ...state,
        step: step + 1,
        disabled: step === maxSteps ? false : true,
        content: continueContent(content, caseItem),
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
        caseItem: [...caseItem, content],
        maxSteps: maxSteps + 1,
        nextStep: true,
      };
      const positiveState = {
        // This one we return if right
        ...state,
        disabled: false,
        nextStep: true,
        stateRight: true,
        formDisabled: true,
        progress: step / maxSteps,
      };
      const { answer } = action.payload;

      switch (content.type) {
        case "Insert": {
          const checkAnswer = content.answer.filter(
            (
              item // Check that our array of responses has the same array as answers
            ) =>
              answer.find(
                (payloadItem) =>
                  payloadItem.value.trim().toLowerCase() === item.toLowerCase()
              )
          );
          if (checkAnswer.length === content.answer.length) {
            return positiveState;
          }
          return negativeState;
        }
        case "Question": {
          if (doesArrayContainItems(content.keywords, answer).state) {
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
          console.log("Ans: ", answer);
          if (content.answer[0] === answer[0]) {
            return positiveState;
          }
          return negativeState;
        }
        case "Pairs": {
          let idx;
          if (
            content.answer.find((answerItem, id) => {
              idx = id;
              return (
                answerItem === answer ||
                answerItem === answer[0].split("").reverse().join("")
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
        step: step + 1,
        stateRight: false,
        stateWrong: false,
      };
    case "SET_CASE": // Initial action to set data right after loading component
      console.log("SET_CASE: ", action.payload);
      const { steps } = action.payload;
      return {
        ...basicState,
        step: 1,
        caseItem: steps,
        maxSteps: steps.length,
        content: steps.shift(0, 1),
        disabled: true,
      };
    default:
      throw new Error(`We don't know this case: ${action.type}`);
  }
};

export { reducer, basicState };
