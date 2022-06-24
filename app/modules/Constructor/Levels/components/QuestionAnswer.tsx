import { Fragment, useEffect } from "react";
import { LabelText, Textarea, TextareaLabel } from "~/components/lib";
import Keywords from "../../components/Keywords";
import { doesItemContainSign } from "~/utils";
import type { FieldsetType } from "../types";
import { useConstructor } from "../..";

// type QA = FieldsetType & {
//   question?: string | null;
//   setQuestion: Function;
//   setKeywords: Function;
//   keywords: string[];
// };

export default function QuestionAnswer({
  // question,
  // setQuestion,
  // number,
  // answer,
  // setAnswer,
  // setReady,
  // setKeywords,
  // keywords,

  initialState,
}) {
  const { question, answer, number, keywords, stepType } = initialState;
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
    <Fragment>
      <input type="hidden" name={`type${number}`} value={"Question"} />

      <fieldset style={{ padding: "0 25%" }}>
        <input
          type="text"
          name={`question${number}`}
          placeholder="Set question"
          style={{
            border: "none",
            marginBottom: 10,
            width: "100%",
          }}
          value={question === null ? "" : question}
          onChange={(evt) => setQuestion(evt.target.value, number)}
          autoFocus={true}
          required
        />

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
          onSet={setKeywords}
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
    </Fragment>
  ) : null;
}
