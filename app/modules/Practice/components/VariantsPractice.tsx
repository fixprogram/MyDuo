import { useEffect } from "react";
import { VariantItemNumber } from "~/modules/Constructor/Steps/components/lib";
import { VariantItem } from "./lib";

export default function VariantsPractice({ content, setValue, formDisabled }) {
  //   const;
  useEffect(() => {
    console.log(content);
  }, []);
  return (
    <section>
      <div>
        <p>{content.definition}</p>
      </div>
      <b>{content.question}</b>

      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {content.variants.map((variant, idx) => (
          <li key={idx} style={{ position: "relative" }}>
            <VariantItemNumber> {idx + 1} </VariantItemNumber>
            <VariantItem type="button" onClick={() => setValue(variant)}>
              {variant}
            </VariantItem>
          </li>
        ))}
      </ul>
    </section>
  );
}
