import * as React from "react";
import Progress from "~/components/Progress";
import { useSkill } from "../..";
import { useSkillReducer } from "../../reducer";
import Footer from "../Footer";
import InsertWords from "../InsertWords";
import { LessonBody } from "../lib";
import Pairs from "../Pairs";
import QuestionAnswerPractice from "../QuestionAnswer";
import VariantsPractice from "../Variants";
// import {Switch} from '../switch'

const LessonContext = React.createContext();
LessonContext.displayName = "LessonContext";

export function Les({}) {
  const { content, topicState, progress, continueTopic } = useSkill();

  return (
    <LessonContext.Provider value={{ content }}>
      {/* {children} */}

      <Progress />

      <LessonBody>
        <LessonQuestion />
        <LessonInsert />
        <LessonVariants />
        <LessonPairs />
      </LessonBody>

      <Footer />
    </LessonContext.Provider>
  );
}

export function useLesson() {
  const context = React.useContext(LessonContext);
  if (context === undefined) {
    throw new Error("useToggle must be used within a <Lesson />");
  }
  return context;
}

function LessonQuestion({}) {
  const { content } = useLesson();
  return content.stepType === "Question" ? (
    <QuestionAnswerPractice question={content.question} />
  ) : null;
}

function LessonInsert({}) {
  const { content } = useLesson();
  return content.stepType === "Insert" ? <InsertWords /> : null;
}

function LessonVariants({}) {
  const { content } = useLesson();
  return content.stepType === "Variants" ? <VariantsPractice /> : null;
}

function LessonPairs({}) {
  const { content } = useLesson();
  return content.stepType === "Variants" ? <Pairs /> : null;
}

// function App() {
//   return (
//     <div>
//       <Lesson>

//       </Lesson>
//     </div>
//   )
// }

// export default App
