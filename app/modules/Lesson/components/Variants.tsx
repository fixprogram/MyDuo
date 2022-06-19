import { Lesson, Variant } from "@prisma/client";
import { Fragment } from "react";
import { VariantItemNumber } from "~/modules/Constructor/Levels/components/lib";
import { LessonTitle, VariantItem } from "./lib";

export default function VariantsPractice({
  userAnswer,
  // content,
  question,
  variants,
  setUserAnswer,
}: {
  userAnswer: string;
  // content: Lesson;
  question: string;
  variants: Variant[];
  setUserAnswer: Function;
}) {
  // const { definition, question, variants } = content;

  return (
    <Fragment>
      <LessonTitle>Choose right variant</LessonTitle>
      {/* <div>
        <p>{definition}</p>
      </div> */}
      <b>{question}</b>

      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {variants.map(({ value }, idx: number) => (
          <li
            key={idx}
            style={{ position: "relative", marginBottom: 8 }}
            onClick={() => setUserAnswer(value)}
          >
            <VariantItemNumber isFocused={value === userAnswer}>
              {idx + 1}
            </VariantItemNumber>
            <VariantItem type="button" isFocused={value === userAnswer}>
              {value}
            </VariantItem>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
