import { Variant } from "@prisma/client";
import { useEffect, useRef } from "react";
import { VariantItemNumber } from "~/modules/Constructor/Levels/components/lib";
import { VariantItem } from "../lib";
import { VariantsContainer, VariantsItem, VariantsList } from "./lib";

type VariantsProps = {
  variants: Variant[];
  values: string[];
  setValues: Function;
};

export default function Variants({
  variants,
  values,
  setValues,
}: VariantsProps) {
  return (
    <VariantsContainer onKeyDown={(e) => console.log(e.key)}>
      <VariantsList>
        {variants.map(({ value }, idx: number) => (
          <VariantsItem key={idx} onClick={() => setValues([value])}>
            <VariantItemNumber isFocused={value === values[0]}>
              {idx + 1}
            </VariantItemNumber>
            <VariantItem type="button" isFocused={value === values[0]}>
              {value}
            </VariantItem>
          </VariantsItem>
        ))}
      </VariantsList>
    </VariantsContainer>
  );
}
