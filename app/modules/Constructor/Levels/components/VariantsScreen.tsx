import { Fragment } from "react";
import { LessonTitle } from "~/components/lib";
import { VariantItem } from "~/modules/Lesson/components/lib";
import { VariantItemNumber } from "./lib";

export default function VariantsScreen({
  question,
  variants,
  userAnswer,
  setUserAnswer,
}) {
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
