import { Fragment } from "react";
import { VariantItemNumber } from "~/modules/Constructor/Steps/components/lib";
import { LessonTitle, VariantItem } from "./lib";

export default function VariantsPractice({
  content,
  setValue,
}: {
  content: any;
  setValue: Function;
}) {
  return (
    <Fragment>
      <LessonTitle>Choose right variant</LessonTitle>
      <div>
        <p>{content.definition}</p>
      </div>
      <b>{content.question}</b>

      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {content.variants.map((variant, idx) => (
          <li key={idx} style={{ position: "relative" }}>
            <VariantItemNumber>{idx + 1}</VariantItemNumber>
            <VariantItem type="button" onClick={() => setValue(variant)}>
              {variant}
            </VariantItem>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
