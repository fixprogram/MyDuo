import { Fragment, useEffect, useState } from "react";
import { VariantItem } from "~/modules/Lesson/components/lib";
import { VariantItemInput } from "../lib";

export default function ChooseMissingWords({ words, number }) {
  const [variants, setVariants] = useState(() =>
    words.length ? [...words] : [""]
  );

  return (
    <div style={{ width: "100%" }}>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {words.length === 1 ? (
          <Fragment>
            <li>
              <VariantItem
                type="button"
                isFocused={false}
                onClick={() => setVariants((prevVars) => [...prevVars, ""])}
              >
                Add variant
              </VariantItem>
            </li>
            {variants.map((variant, idx) => (
              <VariantItemInput
                key={`insertwordvariant${idx}`}
                type="text"
                name={`variant${number}`}
                placeholder="type variant"
                defaultValue={variant}
                required
              />
            ))}
          </Fragment>
        ) : (
          words.map((word, idx: number) => (
            <li key={idx} style={{ position: "relative", marginBottom: 8 }}>
              <VariantItem type="button" isFocused={false}>
                {word}
              </VariantItem>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
