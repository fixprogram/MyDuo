import {
  useEffect,
  useRef,
  Fragment,
  useContext,
  createContext,
  RefObject,
} from "react";

import Progress from "~/components/Progress";
import { useSkillReducer } from "./reducer";
import { useSubmit, useTransition } from "@remix-run/react";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { LessonContainer } from "./components/lib";
import { Lesson, Lesson as LessonType } from "@prisma/client";
import InsertWords from "./components/InsertWords";
import Pairs from "./components/Pairs";
import QuestionAnswerPractice from "./components/QuestionAnswer";
import VariantsPractice from "./components/Variants";

type SkillContextType = {
  content: Lesson;
  progress: number;
  topicState: {
    status: string;
    formDisabled: boolean;
    buttonDisabled: boolean;
  };
  stepNumber: number;
  maxSteps: number;
  setup: Function;
  continueTopic: Function;
  showResults: Function;
  setStateRight: Function;
  setStateWrong: Function;
  setCheckDisabled: Function;
  updateState: Function;
};

const SkillContext = createContext<SkillContextType>({});
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
  const sectionRef = useRef<HTMLDivElement>(null);

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
    setup(steps); // Ones the data is loaded, we set the it in reducer
  }, []);

  useEffect(() => {
    if (topicState.status === "results") {
      return sectionRef.current?.focus();
    }
  }, [topicState.status]);

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
            <VariantsPractice />
            <Pairs />
          </Fragment>
        )}
      </LessonContainer>
    </SkillContext.Provider>
  );
}
