import { Fragment, useState } from "react";
import { VariantItemNumber } from "~/modules/Constructor/Steps/components/lib";
import { LessonTitle, VariantItem } from "./lib";

export default function VariantsPractice({
  answer,
  content,
  setAnswer,
}: {
  answer: string;
  content: any;
  setAnswer: Function;
}) {
  return (
    <Fragment>
      <LessonTitle>Choose right variant</LessonTitle>
      <div>
        <p>{content.definition}</p>
      </div>
      <b>{content.question}</b>

      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {content.variants.map((variant: string, idx: string) => (
          <li key={idx} style={{ position: "relative", marginBottom: 8 }}>
            <VariantItemNumber isFocused={variant === answer[0]}>
              {idx + 1}
            </VariantItemNumber>
            <VariantItem type="button" onClick={() => setAnswer([variant])}>
              {variant}
            </VariantItem>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
