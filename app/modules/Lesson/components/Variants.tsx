import { Fragment } from "react";
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
  console.log(answer);
  return (
    <Fragment>
      <LessonTitle>Choose right variant</LessonTitle>
      <div>
        <p>{content.definition}</p>
      </div>
      <b>{content.question}</b>

      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {content.variants.map((variant: { value: string }, idx: string) => (
          <li key={idx} style={{ position: "relative", marginBottom: 8 }}>
            <VariantItemNumber isFocused={variant.value === answer[0]}>
              {idx + 1}
            </VariantItemNumber>
            <VariantItem
              type="button"
              onClick={() => setAnswer([variant.value])}
              isFocused={variant.value === answer[0]}
            >
              {variant.value}
            </VariantItem>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
