import { Lesson } from "@prisma/client";
import { useReducer, useRef } from "react";
import { areArraysEqual, doesArrayContainItems } from "~/utils";
import { Action } from "./actions";
import { LessonState } from "./types";

// The function returns next stepNumber if there is any
const continueContent = (content: Lesson, lessonSteps: Lesson[] | any) =>
  lessonSteps.length > 0 ? lessonSteps.shift(0, 1) : content;

const actionTypes = {
  CONTINUE: "CONTINUE",
  SETUP: "SETUP",
  SET_USER_ANSWER: "SET_USER_ANSWER",
  RESULTS: "RESULTS",
  SET_STATE_RIGHT: "SET_STATE_RIGHT",
  SET_STATE_WRONG: "SET_STATE_WRONG",
  SET_CHECK_DISABLED: "SET_CHECK_DISABLED",
  CHECK_QUESTION_ANSWER: "CHECK_QUESTION_ANSWER",
};

const basicState: LessonState = {
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
  topicState: { status: "idle", formDisabled: false, buttonDisabled: true },
  userAnswer: [""],
};

function skillReducer(state: LessonState, action: Action): LessonState {
  const { content, stepNumber, maxSteps, lessonSteps, topicState, userAnswer } =
    state;
  const positiveState = {
    ...state,
    progress: stepNumber / maxSteps,
    topicState: {
      status: "right",
      formDisabled: true,
      buttonDisabled: false,
    },
  };
  const negativeState = {
    ...state,
    lessonSteps: [...lessonSteps, content],
    stepNumber: stepNumber - 1,
    topicState: {
      status: "wrong",
      formDisabled: true,
      buttonDisabled: false,
    },
  };
  switch (action.type) {
    case actionTypes.CONTINUE:
      const isResults = stepNumber === maxSteps;
      return {
        ...state,
        stepNumber: stepNumber + 1,
        content: continueContent(content, lessonSteps),
        topicState: {
          ...topicState,
          status: isResults ? "results" : "idle",
          formDisabled: false,
          buttonDisabled: isResults ? false : true,
        },
        userAnswer: [""],
      };
    case actionTypes.SETUP: // Initial action to set data right after loading component
      // console.log(action);
      const steps = action.steps;
      return {
        ...basicState,
        stepNumber: 1,
        lessonSteps: steps,
        maxSteps: steps.length,
        content: steps.shift() as Lesson,
        userAnswer: [""],
        // disabled: true,
      };
    case actionTypes.RESULTS:
      return {
        ...state,
        stepNumber: stepNumber + 1,
        // stateRight: false,
        // stateWrong: false,
        topicState: { ...topicState, status: "results" },
      };
    case actionTypes.CHECK_QUESTION_ANSWER: {
      const userAnswer = action.payload;
      const { state, length } = doesArrayContainItems(
        content.answer,
        userAnswer.split(" ")
      );

      if (!state) {
        return negativeState;
      }

      if (
        doesArrayContainItems(content.keywords, userAnswer.split(" "))
          .length === content.keywords.length
      ) {
        if (length < content.answer.length) {
          return positiveState;
        }

        return positiveState;
      }

      if (length < content.answer.length * 0.8) {
        // if user's response is less than 80% right, then return negative
        return negativeState;
      }
    }
    case actionTypes.SET_STATE_RIGHT:
      return positiveState;
    case actionTypes.SET_STATE_WRONG:
      return negativeState;
    case actionTypes.SET_CHECK_DISABLED:
      const disabled = action.disabled;
      return {
        ...state,
        topicState: { ...topicState, buttonDisabled: disabled },
      };
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function useSkillReducer({
  initialState = basicState,
  reducer = skillReducer,
} = {}) {
  // const {current: initialState} = useRef({on: initialOn})
  const [state, dispatch] = useReducer(reducer, initialState);
  const { content, progress, topicState, stepNumber, maxSteps } = state;

  const continueTopic = () => dispatch({ type: actionTypes.CONTINUE });
  const setup = (steps: Lesson[]) =>
    dispatch({ type: actionTypes.SETUP, steps });
  const showResults = () => dispatch({ type: actionTypes.RESULTS });
  const setStateRight = () => dispatch({ type: actionTypes.SET_STATE_RIGHT });
  const setStateWrong = () => dispatch({ type: actionTypes.SET_STATE_WRONG });
  const setCheckDisabled = (disabled) =>
    dispatch({ type: actionTypes.SET_CHECK_DISABLED, disabled });
  const checkQuestionAnswer = (userAnswer) =>
    dispatch({ type: actionTypes.CHECK_QUESTION_ANSWER, userAnswer });

  return {
    content,
    progress,
    topicState,
    stepNumber,
    maxSteps,
    continueTopic,
    setup,
    showResults,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
    checkQuestionAnswer,
  };
}

export { useSkillReducer, skillReducer, actionTypes };

// const basicState: LessonState = {
//   // disabled: false, // Disabled state for preventing actions when the asnwer is checked
//   progress: 0, // Current progress
//   stepNumber: 0, // Current stepNumber number
//   content: {
//     id: "",
//     number: 0,
//     answer: [""],
//     stepType: "",
//     question: "",
//     text: "",
//     keywords: [""],
//     definition: "",
//     variants: [],
//   }, // Current stepNumber. Contains Question, Answer and Keywords
//   lessonSteps: [], // Array of all steps
//   maxSteps: 0, // Max steps
//   topicState: { status: "idle", formDisabled: false, buttonDisabled: true },
//   userAnswer: [""],
//   // stateWrong: false, // Was the answer wrong
//   // stateRight: false, // Was the answer right
//   // formDisabled: false, // Disable form when check the answer
//   // nextStep: false, // Next stepNumber if the answer was wrong
// };

// The function returns next stepNumber if there is any
// const continueContent = (content: Lesson, lessonSteps: Lesson[] | any) =>
//   lessonSteps.length > 0 ? lessonSteps.shift(0, 1) : content;

// const reducer = (state: LessonState, action: Action): LessonState => {
//   const { content, stepNumber, maxSteps, lessonSteps, topicState, userAnswer } =
//     state;
//   switch (action.type) {
//     case "CONTINUE":
//       const isResults = stepNumber === maxSteps;
//       return {
//         ...state,
//         stepNumber: stepNumber + 1,
//         // disabled: stepNumber === maxSteps ? false : true,
//         content: continueContent(content, lessonSteps),
//         // formDisabled: false,
//         // stateRight: false,
//         // stateWrong: false,
//         // nextStep: false,
//         topicState: {
//           ...topicState,
//           status: isResults ? "results" : "idle",
//           formDisabled: false,
//           buttonDisabled: isResults ? false : true,
//         },
//         userAnswer: [""],
//       };
//     case "CHECK_ANSWER":
//       const negativeState = {
//         ...state,
//         // stateWrong: true,
//         // formDisabled: true,
//         // disabled: false,
//         lessonSteps: [...lessonSteps, content],
//         stepNumber: stepNumber - 1,
//         // nextStep: true,
//         topicState: {
//           status: "wrong",
//           formDisabled: true,
//           buttonDisabled: false,
//         },
//       };
//       const positiveState = {
//         ...state,
//         // disabled: false,
//         // nextStep: true,
//         // stateRight: true,
//         // formDisabled: true,
//         progress: stepNumber / maxSteps,
//         topicState: {
//           status: "right",
//           formDisabled: true,
//           buttonDisabled: false,
//         },
//       };
//       // const { answer } = action.payload;

//       switch (content.stepType) {
//         case "Insert": {
//           // const { formatted } = doesArrayContainItems(content.answer, answer);
//           const { formatted } = doesArrayContainItems(
//             content.answer,
//             userAnswer
//           );
//           if (areArraysEqual(content.answer, formatted)) {
//             return positiveState;
//           }
//           return negativeState;
//         }
//         case "Question": {
//           // split the answer because the whole user input is in answer[0]

//           const { state, length } = doesArrayContainItems(
//             content.answer,
//             // answer[0].split(" ")
//             userAnswer[0].split(" ")
//           );

//           if (!state) {
//             return negativeState;
//           }

//           if (
//             // doesArrayContainItems(content.keywords, answer[0].split(" "))
//             doesArrayContainItems(content.keywords, userAnswer[0].split(" "))
//               .length === content.keywords.length
//           ) {
//             if (length < content.answer.length) {
//               return positiveState;
//             }

//             return { ...positiveState, content: { ...content, answer: [""] } };
//           }

//           if (length < content.answer.length * 0.8) {
//             // if user's response is less than 80% right, then return negative
//             return negativeState;
//           }
//         }

//         case "Variants": {
//           // if (content.answer[0] === answer[0]) {
//           if (content.answer[0] === userAnswer[0]) {
//             return positiveState;
//           }
//           return negativeState;
//         }
//         case "Pairs": {
//           let idx = 0;
//           if (
//             content.answer.find((answerItem: string, id: number) => {
//               idx = id;
//               return (
//                 // answerItem === answer[0] ||
//                 answerItem === userAnswer[0] ||
//                 // answerItem.split("").reverse().join("") === answer[0]
//                 answerItem.split("").reverse().join("") === userAnswer[0]
//               );
//             })
//           ) {
//             const newContent = content;
//             newContent.answer.splice(idx, 1);
//             if (newContent.answer.length === 0) {
//               return positiveState;
//             }
//             return {
//               ...state,
//               content: newContent,
//               // disabled: true,
//             };
//           } else {
//             return {
//               ...state,
//               // disabled: true,
//               topicState: { ...topicState, buttonDisabled: true },
//             };
//           }
//         }
//         default: {
//           throw new Error(`We don't know this type: ${action.type}`);
//         }
//       }
//     // case "CHANGE_DISABLED":
//     //   return { ...state, disabled: action.payload.isDisabled };
//     case "CHANGE_USER_ANSWER": {
//       const { newAnswer } = action.payload;
//       let buttonDisabled = newAnswer[0].length === 0;
//       if (content.stepType === "Insert") {
//         const haveLength = newAnswer.filter((item) => {
//           if (item.length && item !== " ") {
//             return item;
//           }
//         });
//         buttonDisabled = haveLength.length !== newAnswer.length;
//       }
//       // if(content.stepType === 'Pairs') {

//       // }
//       return {
//         ...state,
//         userAnswer: newAnswer,
//         topicState: {
//           ...topicState,
//           buttonDisabled,
//         },
//       };
//     }
//     case "RESULTS":
//       return {
//         ...state,
//         stepNumber: stepNumber + 1,
//         // stateRight: false,
//         // stateWrong: false,
//         topicState: { ...topicState, status: "results" },
//       };
//     case "SET_CASE": // Initial action to set data right after loading component
//       const { steps } = action.payload;
//       return {
//         ...basicState,
//         stepNumber: 1,
//         lessonSteps: steps,
//         maxSteps: steps.length,
//         content: steps.shift() as Lesson,
//         userAnswer: [""],
//         // disabled: true,
//       };
//     default:
//       throw new Error(`We don't know this type: ${action.type}`);
//   }
// };

// export { reducer, basicState };
