/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { Textarea } from "~/components/lib";
import {
  RepeatQuestion,
  RepeatQuestionTriangle,
  RepeatQuestionTriangleContainer,
  RepeatTitle,
} from "./lib";
import Duo from "~/styles/duo.svg";

export default function QuestionAnswerPractice({
  value,
  content,
  setValue,
  formDisabled,
}) {
  return (
    <Fragment>
      <RepeatTitle>Answer the question</RepeatTitle>
      <div css={{ display: "flex", alignItems: "center" }}>
        <img src={Duo} alt="Duo" height={150} css={{ marginBottom: -60 }} />
        <div css={{ position: "relative" }}>
          <RepeatQuestion>{content.question}</RepeatQuestion>
          <RepeatQuestionTriangleContainer>
            <RepeatQuestionTriangle />
          </RepeatQuestionTriangleContainer>
        </div>
      </div>
      <Textarea
        id={`answer`}
        name="answer"
        placeholder="Enter answer"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={formDisabled}
      />
    </Fragment>
  );
}
