import { LessonStep } from "@prisma/client";
import { Fragment } from "react";
import { VariantItemNumber } from "~/modules/Constructor/Steps/components/lib";
import { LessonTitle, VariantItem } from "./lib";

export default function VariantsPractice({
  answer,
  content,
  setAnswer,
}: {
  answer: string[];
  content: LessonStep;
  setAnswer: Function;
}) {
  const { definition, question, variants } = content;

  return (
    <Fragment>
      <LessonTitle>Choose right variant</LessonTitle>
      <div>
        <p>{definition}</p>
      </div>
      <b>{question}</b>

      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {variants.map(({ value }, idx: number) => (
          <li key={idx} style={{ position: "relative", marginBottom: 8 }}>
            <VariantItemNumber isFocused={value === answer[0]}>
              {idx + 1}
            </VariantItemNumber>
            <VariantItem
              type="button"
              onClick={() => setAnswer([value])}
              isFocused={value === answer[0]}
            >
              {value}
            </VariantItem>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
