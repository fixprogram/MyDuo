import {
  useEffect,
  Fragment,
  useContext,
  createContext,
  createRef,
} from "react";

import Progress from "~/components/Progress";
import { useSkillReducer, defaultSkillContextState } from "./reducer";
import { useSubmit } from "@remix-run/react";
import { Results } from "./components/Results";
import Footer from "./components/Footer";
import { LessonContainer } from "./components/lib";
import { Lesson as LessonType } from "@prisma/client";
import InsertWords from "./components/InsertWords";
import Pairs from "./components/Pairs";
import QuestionAnswerPractice from "./components/QuestionAnswer";
import VariantsPractice from "./components/Variants";
import { SkillContextType } from "./types";

const SkillContext = createContext<SkillContextType>(defaultSkillContextState);
SkillContext.displayName = "SkillContext";

export function useSkill() {
  const context = useContext(SkillContext);
  if (context === undefined) {
    throw new Error("useSkill must be used within a <Lesson />");
  }
  return context;
}

export default function Skill({ steps }: { steps: LessonType[] }) {
  const resultsFormRef = createRef<HTMLFormElement>();

  const value = useSkillReducer();
  const submit = useSubmit();

  const { setup, skillState, continueSkill } = value;
  const { status } = skillState;

  useEffect(() => {
    setup(steps); // Once the data is loaded, we set the it in reducer
  }, []);

  const onContinue = () => {
    if (status === "results") {
      return submit(resultsFormRef.current, { replace: true });
    }
    return continueSkill();
  };

  return (
    <SkillContext.Provider value={{ ...value, continueSkill: onContinue }}>
      <LessonContainer>
        {status === "results" ? (
          <Fragment>
            <Results onSubmit={onContinue} ref={resultsFormRef} />
            <Footer />
          </Fragment>
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
