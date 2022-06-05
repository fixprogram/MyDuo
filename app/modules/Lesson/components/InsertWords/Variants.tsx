import { Variant } from "@prisma/client";
import { VariantItemNumber } from "~/modules/Constructor/Levels/components/lib";
import { VariantItem } from "../lib";

export default function Variants({
  variants,
  values,
  setValues,
}: {
  variants: Variant[];
  values: string[];
  setValues: Function;
}) {
  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {variants.map(({ value }, idx: number) => (
          <li
            key={idx}
            style={{
              position: "relative",
              marginBottom: 8,
              width: "49%",
            }}
          >
            <VariantItemNumber isFocused={value === values[0]}>
              {idx + 1}
            </VariantItemNumber>
            <VariantItem
              type="button"
              onClick={() => setValues([value])}
              isFocused={value === values[0]}
            >
              {value}
            </VariantItem>
          </li>
        ))}
      </ul>
    </div>
  );
}
