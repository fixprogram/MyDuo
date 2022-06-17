import React, {
  useEffect,
  useRef,
  Fragment,
  useContext,
  createContext,
  useState,
} from "react";

import Progress from "~/components/Progress";
import { useSkillReducer } from "./reducer";
import { useSubmit, useTransition } from "@remix-run/react";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { LessonBody, LessonContainer } from "./components/lib";
import { Lesson } from "@prisma/client";
import InsertWords from "./components/InsertWords";
import Pairs from "./components/Pairs";
import QuestionAnswerPractice from "./components/QuestionAnswer";
import VariantsPractice from "./components/Variants";
import { areArraysEqual, doesArrayContainItems } from "~/utils";

const SkillContext = createContext();
SkillContext.displayName = "LessonContext";

export function useSkill() {
  const context = useContext(SkillContext);
  if (context === undefined) {
    throw new Error("useSkill must be used within a <Lesson />");
  }
  return context;
}

export default function Skill({ steps }: { steps: Lesson[] }) {
  const ref = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLFormElement>(null);

  const {
    content,
    progress,
    topicState,
    stepNumber,
    maxSteps,
    setup,
    continueTopic,
    showResults,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
  } = useSkillReducer();
  const submit = useSubmit();
  const transition = useTransition();
  const submitting = transition.state !== "idle";
  let currentStep = stepNumber;

  useEffect(() => {
    // setCase(steps); // Ones the data is loaded, we set the it in reducer
    setup(steps); // Ones the data is loaded, we set the it in reducer
  }, []);

  useEffect(() => {
    // if (stateRight || stateWrong) {
    if (topicState.status !== "idle") {
      return sectionRef.current?.focus();
    }
    if (content.stepType === "Question") {
      return;
    }

    return sectionRef.current?.focus(); // always have focus in order to make Enter key events work
    // }, [stateRight, stateWrong]);
  }, [topicState.status]);

  // const onContinue = () => {
  //   if (currentStep > -1 && currentStep <= maxSteps) {
  //     // if (!nextStep && value[0] !== "") {
  //     // if (topicState.status !== "idle" && value[0] !== "") {

  //     // continuePractice();
  //     continueTopic();
  //   } else {
  //     currentStep === maxSteps
  //       ? // ? showResultsPractice()
  //         showResults()
  //       : currentStep === maxSteps + 1
  //       ? submit(ref.current, { replace: true })
  //       : // : continuePractice();
  //         continueTopic();
  //   }
  // };

  const onContinue = () => {
    if (topicState.status === "results") {
      if (submitting) {
        return;
      }
      return submit(ref.current, { replace: true });
    }
    continueTopic();
  };

  const cox = {
    content,
    progress,
    topicState,
    stepNumber,
    maxSteps,
    setup,
    continueTopic: onContinue,
    showResults,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
  };

  return (
    <SkillContext.Provider value={cox}>
      <LessonContainer
      // onKeyDown={(e) => {
      //   if (
      //     content.stepType === "Variants" ||
      //     (content.stepType === "Insert" && content.variants.length)
      //   ) {
      //     if (e.key === "1") {
      //       setAnswer([content.variants[0].value]);
      //     }
      //     if (e.key === "2") {
      //       setAnswer([content.variants[1].value]);
      //     }
      //     if (e.key === "3") {
      //       setAnswer([content.variants[2].value]);
      //     }
      //   }
      //   if (topicState.buttonDisabled) {
      //     return;
      //   }
      //   if (e.key !== "Enter") {
      //     return;
      //   }
      //   // if (value[0] !== "" && !stateRight && !stateWrong) {
      //   if (userAnswer[0] !== "" && topicState.status === "idle") {
      //     // return checkAnswer(value);
      //     return checkAnswer();
      //   }
      //   // if (currentStep === maxSteps + 1) {

      //   // Go futher if the answer was checked already
      //   // if (stateRight || stateWrong) {
      //   if (topicState.status !== "idle") {
      //     e.preventDefault(); // prevent next line in textarea
      //     onContinue();
      //     // setValue([""]);
      //     // setNewUserAnswer([""]);
      //   }
      // }}
      // tabIndex={0}
      // ref={sectionRef}
      >
        {topicState.status === "results" ? (
          <Fragment>
            <Results
              refName={ref}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onContinue();
                }
              }}
            />
            <Footer />
          </Fragment>
        ) : (
          <Fragment>
            <Progress />
            {/* <LessonBody> */}
            <LessonQuestion />
            <LessonInsert />
            <LessonVariants />
            <LessonPairs />
            {/* </LessonBody> */}
            {/* <Footer /> */}
          </Fragment>
        )}
      </LessonContainer>
    </SkillContext.Provider>
  );
}
function LessonQuestion({}) {
  const { content, setStateWrong, setStateRight } = useSkill();

  const checkAnswer = (userAnswer) => {
    const { state, length } = doesArrayContainItems(
      content.answer,
      userAnswer.split(" ")
    );

    if (!state) {
      return setStateWrong();
    }

    if (
      doesArrayContainItems(content.keywords, userAnswer.split(" ")).length ===
      content.keywords.length
    ) {
      if (length < content.answer.length) {
        return setStateRight();
      }

      return setStateRight();
    }

    if (length < content.answer.length * 0.8) {
      // if user's response is less than 80% right, then return negative
      return setStateWrong();
    }
  };

  return (
    content.stepType === "Question" && (
      <Lesson checkAnswer={checkAnswer}>
        <QuestionAnswerPractice />
      </Lesson>
    )
  );
}

// function LessonQuestion({}) {
//   const { content, topicState, setStateWrong, setStateRight, continueTopic } =
//     useSkill();

//   const [userAnswer, setUserAnswer] = useState("");
//   const lessonRef = useRef(null);

//   useEffect(() => {
//     lessonRef?.current?.focus();
//   }, [topicState.status]);

//   // const checkAnswer = (userAnswer) => {
//   const checkAnswer = () => {
//     const { state, length } = doesArrayContainItems(
//       content.answer,
//       userAnswer.split(" ")
//     );

//     if (!state) {
//       return setStateWrong();
//     }

//     if (
//       doesArrayContainItems(content.keywords, userAnswer.split(" ")).length ===
//       content.keywords.length
//     ) {
//       if (length < content.answer.length) {
//         return setStateRight();
//       }

//       return setStateRight();
//     }

//     if (length < content.answer.length * 0.8) {
//       // if user's response is less than 80% right, then return negative
//       return setStateWrong();
//     }
//   };

//   const onKeyDownHandle = (e) => {
//     e.preventDefault();
//     if (e.key !== "Enter" || topicState.buttonDisabled) {
//       return;
//     }

//     if (topicState.status !== "idle") {
//       return continueTopic();
//     }
//   };

//   return content.stepType === "Question" ? (
//     <div
//       tabIndex={0}
//       onKeyDown={(e) => {
//         if (e.key === "Enter") {
//           onKeyDownHandle(e);
//         }
//       }}
//       ref={lessonRef}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         height: "calc(100vh - 63px)",
//         outline: 0,
//       }}
//     >
//       <LessonBody>
//         <QuestionAnswerPractice
//           userAnswer={userAnswer}
//           setUserAnswer={setUserAnswer}
//           checkAnswer={checkAnswer}
//         />
//       </LessonBody>
//       <Footer checkAnswer={checkAnswer} />
//     </div>
//   ) : null;
// }

function Lesson({ checkAnswer, children }) {
  const { topicState, continueTopic } = useSkill();

  const lessonRef = useRef(null);
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    if (topicState.status === "wrong" || topicState.status === "right") {
      lessonRef?.current?.focus();
    }
  }, [topicState.status]);

  const onKeyDownHandle = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    if (e.key !== "Enter" || topicState.buttonDisabled) {
      return;
    }
    if (topicState.status === "idle") {
      return checkAnswer(userAnswer);
    }
    return continueTopic();
  };

  return (
    <div tabIndex={0} onKeyDown={onKeyDownHandle} ref={lessonRef}>
      <LessonBody>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { userAnswer, setUserAnswer });
        })}
      </LessonBody>
      <Footer checkAnswer={() => checkAnswer(userAnswer)} />
    </div>
  );
}

function LessonInsert({}) {
  const { content, setStateRight, setStateWrong, topicState } = useSkill();

  const lessonRef = useRef(null);
  const [userAnswer, setUserAnswer] = useState([""]);

  useEffect(() => {
    lessonRef?.current?.focus();
  }, [topicState.buttonDisabled]);

  const checkAnswer = () => {
    const { formatted } = doesArrayContainItems(content.answer, userAnswer);
    if (areArraysEqual(content.answer, formatted)) {
      return setStateRight();
    }
    return setStateWrong();
  };

  const onKeyDownHandle = (e) => {
    if (e.key !== "Enter" || topicState.buttonDisabled) {
      return;
    }

    e.preventDefault();
    checkAnswer(userAnswer);
  };

  return content.stepType === "Insert" ? (
    <div tabIndex={0} onKeyDown={onKeyDownHandle} ref={lessonRef}>
      <LessonBody>
        <InsertWords userAnswer={userAnswer} setUserAnswer={setUserAnswer} />
      </LessonBody>
      <Footer checkAnswer={checkAnswer} />
    </div>
  ) : null;
}

function LessonVariants({}) {
  const { content } = useSkill();
  return content.stepType === "Variants" ? <VariantsPractice /> : null;
}

function LessonPairs({}) {
  const { content } = useSkill();
  return content.stepType === "Variants" ? <Pairs /> : null;
}
