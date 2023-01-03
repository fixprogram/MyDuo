import { useEffect } from "react";
import { LabelText, Textarea, TextareaLabel } from "~/components/lib";
import { doesItemContainSign } from "~/utils";
import { useConstructor } from "~/modules/Constructor";
import Keywords from "~/modules/Constructor/components/Keywords";
import { Step } from "../../types";
import {
  LessonQuestion,
  LessonQuestionTriangle,
  LessonQuestionTriangleContainer,
  LessonTitle,
} from "~/modules/Skill/components/lib";
import Duo from "~/styles/duo.svg";

const initialState: Omit<Step, "id" | "variants" | "active" | "chapter"> = {
  question: "",
  answer: "",
  number: 0,
  keywords: [""],
  stepType: "",
};

export default function QuestionAnswer({ state = initialState }) {
  const { question, answer, number, keywords, stepType } = state;
  const { setStepReady, setKeywords, setQuestion, setAnswer } =
    useConstructor();

  useEffect(() => {
    if (question && answer) {
      return setStepReady(true, number);
    }
    return setStepReady(false, number);
  }, [question, answer]);

  useEffect(() => {
    setKeywords(keywords, number);
  }, []);

  return stepType === "Question" ? (
    <>
      <fieldset style={{ padding: "0 25%" }}>
        <LessonTitle>Answer the question</LessonTitle>
        <div
          style={{ display: "flex", alignItems: "center", margin: "30px 0" }}
        >
          <img src={Duo} alt="Duo" height={150} style={{ marginBottom: -50 }} />
          <div style={{ position: "relative" }}>
            <LessonQuestion>
              <input
                type="text"
                name={`question${number}`}
                placeholder="Set question"
                style={{
                  border: "none",
                  width: "100%",
                }}
                value={question === null ? "" : question}
                onChange={(evt) => setQuestion(evt.target.value, number)}
                autoFocus={true}
                required
              />
            </LessonQuestion>
            <LessonQuestionTriangleContainer>
              <LessonQuestionTriangle />
            </LessonQuestionTriangleContainer>
          </div>
        </div>

        <Textarea
          name={`answer${number}`}
          placeholder="Type answer"
          value={answer}
          onChange={(evt) => setAnswer(evt.target.value, number)}
          required
        />
      </fieldset>
      <TextareaLabel htmlFor={`keywords${number}`}>
        <LabelText>Choose keywords</LabelText>
        <Keywords
          answer={answer as string}
          initialKeywords={keywords}
          onSet={(kwords: string[]) => setKeywords(kwords, number)}
        />

        <input
          type="hidden"
          id={`keywords${number}`}
          name={`keywords${number}`}
          placeholder="Type keywords"
          value={keywords.map(
            (keyword) => doesItemContainSign(keyword).newItem
          )}
          readOnly
        />
      </TextareaLabel>
    </>
  ) : null;
}
