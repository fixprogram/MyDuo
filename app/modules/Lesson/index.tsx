import React, {
  useEffect,
  useRef,
  Fragment,
  useContext,
  createContext,
  useState,
  useCallback,
} from "react";

import Progress from "~/components/Progress";
import { useSkillReducer } from "./reducer";
import { useSubmit, useTransition } from "@remix-run/react";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { LessonBody, LessonContainer } from "./components/lib";
import { Lesson as LessonType } from "@prisma/client";
import InsertWords from "./components/InsertWords";
import Pairs from "./components/Pairs";
import QuestionAnswerPractice from "./components/QuestionAnswer";
import VariantsPractice from "./components/Variants";
import { areArraysEqual, doesArrayContainItems } from "~/utils";
import { Lesson } from "./components/Lesson";

const SkillContext = createContext({});
SkillContext.displayName = "SkillContext";

export function useSkill() {
  const context = useContext(SkillContext);
  if (context === undefined) {
    throw new Error("useSkill must be used within a <Lesson />");
  }
  return context;
}

export default function Skill({ steps }: { steps: LessonType[] }) {
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
    updateState,
  } = useSkillReducer();
  const submit = useSubmit();
  const transition = useTransition();
  const submitting = transition.state !== "idle";

  useEffect(() => {
    // if (steps) {
    setup(steps); // Ones the data is loaded, we set the it in reducer
    // }
  }, []);

  // useEffect(() => {
  //   if (topicState.status === "results") {
  //     return sectionRef.current?.focus();
  //   }
  // }, [topicState.status]);

  const onContinue = () => {
    if (topicState.status === "results") {
      if (submitting) {
        return;
      }
      return submit(ref.current, { replace: true });
    }
    return continueTopic();
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
    updateState,
  };

  return (
    <SkillContext.Provider value={cox}>
      <LessonContainer>
        {topicState.status === "results" ? (
          <div
            ref={sectionRef}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onContinue();
              }
            }}
            style={{ outline: "none" }}
          >
            <Results refName={ref} />
            <Footer />
          </div>
        ) : (
          <Fragment>
            <Progress />
            <QuestionAnswerPractice />
            <InsertWords />
            {/* <LessonInsert /> */}
            <LessonVariants />
            <LessonPairs />
          </Fragment>
        )}
      </LessonContainer>
    </SkillContext.Provider>
  );
}
function LessonInsert({}) {
  // const { content, setStateRight, setStateWrong, topicState } = useSkill();
  // const lessonRef = useRef(null);
  // const [userAnswer, setUserAnswer] = useState([""]);
  // useEffect(() => {
  //   lessonRef?.current?.focus();
  // }, [topicState.buttonDisabled]);
  // const checkAnswer = () => {
  //   const { formatted } = doesArrayContainItems(content.answer, userAnswer);
  //   if (areArraysEqual(content.answer, formatted)) {
  //     return setStateRight();
  //   }
  //   return setStateWrong();
  // };
  // const onKeyDownHandle = (e) => {
  //   if (e.key !== "Enter" || topicState.buttonDisabled) {
  //     return;
  //   }
  //   e.preventDefault();
  //   checkAnswer(userAnswer);
  // };
  // return content.stepType === "Insert" ? (
  //   <Lesson
  //     userAnswer={userAnswer}
  //     setUserAnswer={setUserAnswer}
  //     checkAnswer={checkAnswer}
  //   >
  //     <InsertWords />
  //   </Lesson>
  // ) : null;
}

function LessonVariants({}) {
  const {
    content,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
    topicState,
  } = useSkill();
  const { question, variants } = content;

  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    if (!topicState.formDisabled) {
      setUserAnswer("");
    }
  }, [topicState.formDisabled]);

  useEffect(() => {
    if (userAnswer.length) {
      return setCheckDisabled(false);
    }
    return setCheckDisabled(true);
  }, [userAnswer]);

  const checkAnswer = () => {
    if (userAnswer === content.answer[0]) {
      return setStateRight();
    }
    return setStateWrong();
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "1") {
      return setUserAnswer(variants[0].value);
    }
    if (e.key === "2") {
      return setUserAnswer(variants[1].value);
    }
    if (e.key === "3") {
      return setUserAnswer(variants[2].value);
    }
  };

  return content.stepType === "Variants" ? (
    <Lesson
      userAnswer={userAnswer}
      setUserAnswer={setUserAnswer}
      checkAnswer={checkAnswer}
      keyDownHandle={handleOnKeyDown}
    >
      <VariantsPractice question={question} variants={variants} />
    </Lesson>
  ) : null;
}

function LessonPairs({}) {
  const { content, setStateRight, updateState, topicState } = useSkill();
  const { answer, variants } = content;

  const [userAnswer, setUserAnswer] = useState([]);

  const checkAnswer = (uAns) => {
    let idx = 0;
    if (
      answer.find((answerItem: string, id: number) => {
        idx = id;
        return (
          answerItem === uAns ||
          answerItem.split("").reverse().join("") === uAns
        );
      })
    ) {
      const newContent = content;
      newContent.answer.splice(idx, 1);
      setUserAnswer((prevUserAnswer) => [...prevUserAnswer, uAns]);
      return updateState({ content: newContent });
    } else {
      setUserAnswer((prevUserAnswer) => [...prevUserAnswer]);
      return updateState({
        topicState: { ...topicState, buttonDisabled: true },
      });
    }
  };
  useEffect(() => {
    if (answer.length === 0) {
      return setStateRight();
    }
  }, [userAnswer]);

  return content.stepType === "Pairs" ? (
    <Lesson setUserAnswer={setUserAnswer}>
      <Pairs
        answer={userAnswer}
        variants={variants}
        checkAnswer={checkAnswer}
      />
    </Lesson>
  ) : null;
}
