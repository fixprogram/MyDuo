import { useEffect } from "react";
import { Textarea } from "~/components/lib";
import { useConstructor } from "~/modules/Constructor";
import { Step } from "../../types";
import {
  LessonAnswerWrapper,
  LessonDuolingoPicture,
  LessonQuestion,
  LessonQuestionTriangle,
  LessonQuestionTriangleContainer,
  LessonTitle,
} from "~/modules/Skill/components/lib";
import Duo from "~/styles/duo.svg";
import Settings from "./Settings";
import { StepContent, StepInner } from "../lib";

const initialState: Omit<
  Step,
  "variants" | "parentLessonId" | "active" | "chapter"
> = {
  answer: "",
  id: "",
  stepType: "",
  options: {
    question: "",
    keywords: [],
  },
};

export default function QuestionAnswer({ state = initialState }) {
  const { options, answer, id, stepType } = state;
  const { question } = options as {
    question: string;
  };
  const { setStepReady, setStepOptions, setAnswer } = useConstructor();

  useEffect(() => {
    if (question && answer) {
      return setStepReady(true, id);
    }
    return setStepReady(false, id);
  }, [question, answer]);

  function setQuestion(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setStepOptions({ ...options, question: event.target.value });
  }

  return stepType === "Question" ? (
    <>
      <StepContent>
        <StepInner>
          <LessonTitle>Answer the question</LessonTitle>
          <LessonAnswerWrapper>
            <LessonDuolingoPicture src={Duo} alt="Duolingo picture" />
            <div style={{ position: "relative" }}>
              <LessonQuestion>
                <Textarea
                  placeholder="Set question"
                  style={{
                    border: "none",
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: 0,
                    minHeight: 0,
                    letterSpacing: 0,
                  }}
                  value={question === null ? "" : question}
                  onChange={setQuestion}
                  autoFocus={true}
                  required
                />
              </LessonQuestion>
              <LessonQuestionTriangleContainer>
                <LessonQuestionTriangle />
              </LessonQuestionTriangleContainer>
            </div>
          </LessonAnswerWrapper>

          <Textarea
            placeholder="Type answer"
            value={answer}
            onChange={(evt) => setAnswer(evt.target.value, id)}
            required
          />
        </StepInner>
      </StepContent>
      <Settings answer={answer} options={options} />
    </>
  ) : null;
}
