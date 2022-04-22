/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useEffect, useRef } from "react";
import {
  LabelText,
  Textarea,
  TextareaLabel,
  VisuallyHiddenInput,
} from "~/components/lib";
import Keywords from "../../components/Keywords";
import type { FieldsetType } from "../types";

type QA = FieldsetType & {
  question?: string;
  setQuestion: Function;
  setKeywords: Function;
  keywords: string[];
};

export default function QuestionAnswer({
  question,
  setQuestion,
  number,
  answer,
  setAnswer,
  setReady,
  setKeywords,
  keywords,
}: QA) {
  // const questionRef = useRef<HTMLInputElement>(null);
  // const answerRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (question && answer) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [question, answer]);

  return (
    <Fragment>
      <input type="hidden" name={`type${number}`} value={"Question"} />
      <div>
        <h2>Ask and Answer</h2>
      </div>
      <fieldset css={{ padding: "0 25%" }}>
        <input
          type="text"
          name={`question${number}`}
          placeholder="Set question"
          css={{
            border: "none",
            marginBottom: 10,
            width: "100%",
          }}
          value={question}
          onChange={(evt) => setQuestion(evt.target.value)}
          // ref={questionRef}
          required
        />

        <Textarea
          name={`answer${number}`}
          placeholder="Type answer"
          value={answer}
          onChange={(evt) => setAnswer(evt.target.value)}
          // ref={answerRef}
          required
        />
      </fieldset>
      <TextareaLabel htmlFor={`keywords${number}`}>
        <LabelText>Choose keywords</LabelText>
        <Keywords answer={answer} onSet={setKeywords} />

        <VisuallyHiddenInput
          id={`keywords${number}`}
          name={`keywords${number}`}
          placeholder="Type keywords"
          value={keywords}
          readOnly
        />
      </TextareaLabel>
    </Fragment>
  );
}
