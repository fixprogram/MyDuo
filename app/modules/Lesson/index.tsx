import {
  useReducer,
  useEffect,
  useRef,
  Fragment,
  useContext,
  createContext,
  useState,
} from "react";

import Progress from "~/components/Progress";
import Body from "./components/Body";
import { reducer, basicState, useSkillReducer } from "./reducer";
import actionCreator from "./actions";
import { useSubmit, useTransition } from "@remix-run/react";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { LessonBody, LessonContainer } from "./components/lib";
import { Lesson } from "@prisma/client";
import { Les, useLesson } from "./components/Les/Les";
import InsertWords from "./components/InsertWords";
import Pairs from "./components/Pairs";
import QuestionAnswerPractice from "./components/QuestionAnswer";
import VariantsPractice from "./components/Variants";
import { doesArrayContainItems } from "~/utils";

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
  // const [
  //   {
  //     // disabled,
  //     progress,
  //     content,
  //     stepNumber,
  //     maxSteps,
  //     // stateRight,
  //     // stateWrong,
  //     // formDisabled,
  //     // nextStep,
  //     topicState,
  //     userAnswer,
  //   },
  //   dispatch,
  // ] = useReducer(reducer, basicState);
  // const [value, setValue] = useState<string[]>([""]);
  // const {
  //   checkAnswer,
  //   showResultsPractice,
  //   continuePractice,
  //   changeDisabled,
  //   setCase,
  //   setNewUserAnswer,
  // } = actionCreator(dispatch);
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
  const userAnswer = [""];
  const checkAnswer = () => {};
  // const setNewUserAnswer = () => {};
  // const changeDisabled = () => {};
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

  const onContinue = () => {
    if (currentStep > -1 && currentStep <= maxSteps) {
      // if (!nextStep && value[0] !== "") {
      // if (topicState.status !== "idle" && value[0] !== "") {
      if (topicState.status === "idle" && userAnswer[0] !== "") {
        // checkAnswer(value);
        checkAnswer();
      } else {
        // continuePractice();
        continueTopic();
      }
    } else {
      currentStep === maxSteps
        ? // ? showResultsPractice()
          showResults()
        : currentStep === maxSteps + 1
        ? submit(ref.current, { replace: true })
        : // : continuePractice();
          continueTopic();
    }
  };

  // const setAnswer = (val: string[]) => {
  //   // Insert words will return an array of objects and it won't work with the disabling button
  //   // changeDisabled(val[0] === "");
  //   // // setValue(val);
  //   setNewUserAnswer(val);
  // };

  const cox = {
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
    actions: {},
  };

  return (
    <SkillContext.Provider value={cox}>
      <LessonContainer
        onKeyDown={(e) => {
          if (
            content.stepType === "Variants" ||
            (content.stepType === "Insert" && content.variants.length)
          ) {
            if (e.key === "1") {
              setAnswer([content.variants[0].value]);
            }
            if (e.key === "2") {
              setAnswer([content.variants[1].value]);
            }
            if (e.key === "3") {
              setAnswer([content.variants[2].value]);
            }
          }
          if (topicState.buttonDisabled) {
            return;
          }
          if (e.key !== "Enter") {
            return;
          }
          // if (value[0] !== "" && !stateRight && !stateWrong) {
          if (userAnswer[0] !== "" && topicState.status === "idle") {
            // return checkAnswer(value);
            return checkAnswer();
          }
          // if (currentStep === maxSteps + 1) {
          if (topicState.status === "results") {
            if (submitting) {
              return;
            }
            onContinue();
          }
          // Go futher if the answer was checked already
          // if (stateRight || stateWrong) {
          if (topicState.status !== "idle") {
            e.preventDefault(); // prevent next line in textarea
            onContinue();
            // setValue([""]);
            // setNewUserAnswer([""]);
          }
        }}
        tabIndex={0}
        ref={sectionRef}
      >
        {/* {topicState.status === "results" ? (
        <Results refName={ref} />
      ) : (
        <Fragment>
          <Progress progress={progress} />
          <Body
            stepNumber={stepNumber}
            maxSteps={maxSteps}
            content={content}
            // userAnswer={value}
            userAnswer={userAnswer}
            setAnswer={setAnswer}
            // formDisabled={formDisabled}
            formDisabled={topicState.formDisabled}
            checkAnswer={checkAnswer}
            // setValue={setValue}
            setValue={setNewUserAnswer}
            changeDisabled={changeDisabled}
          />
        </Fragment>
      )} */}
        {/* <Footer
        // stateRight={stateRight}
        // stateWrong={stateWrong}
        status={topicState.status}
        buttonDisabled={topicState.buttonDisabled}
        isResult={currentStep === maxSteps + 1}
        // setValue={setValue}
        setValue={setNewUserAnswer}
        answer={content.answer}
        onContinue={onContinue}
        // disabled={disabled}
      /> */}

        {/* <Les /> */}

        {topicState.status === "results" ? (
          <Results refName={ref} />
        ) : (
          <Fragment>
            <Progress />
            <LessonBody>
              <LessonQuestion />
              <LessonInsert />
              <LessonVariants />
              <LessonPairs />
            </LessonBody>
            <Footer />
          </Fragment>
        )}
      </LessonContainer>
    </SkillContext.Provider>
  );
}

function LessonQuestion({}) {
  const {
    content,
    topicState,
    setStateWrong,
    setStateRight,
    setCheckDisabled,
  } = useSkill();

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

  return content.stepType === "Question" ? (
    <QuestionAnswerPractice
      question={content.question}
      checkAnswer={checkAnswer}
      formDisabled={topicState.formDisabled}
      setCheckDisabled={setCheckDisabled}
    />
  ) : null;
}

function LessonInsert({}) {
  const { content } = useSkill();
  return content.stepType === "Insert" ? <InsertWords /> : null;
}

function LessonVariants({}) {
  const { content } = useSkill();
  return content.stepType === "Variants" ? <VariantsPractice /> : null;
}

function LessonPairs({}) {
  const { content } = useSkill();
  return content.stepType === "Variants" ? <Pairs /> : null;
}
