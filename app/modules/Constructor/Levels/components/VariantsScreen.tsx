import { Variant } from "@prisma/client";
import { Fragment } from "react";
import { LessonTitle } from "~/components/lib";
import { VariantItem } from "~/modules/Lesson/components/lib";
import { VariantItemNumber } from "./lib";

type VariantsScreenProps = {
  question: string;
  variants: Variant[];
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
};

export default function VariantsScreen({
  question,
  variants,
  userAnswer,
  setUserAnswer,
}: VariantsScreenProps) {
  return (
    <Fragment>
      <LessonTitle>Choose right variant</LessonTitle>
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
