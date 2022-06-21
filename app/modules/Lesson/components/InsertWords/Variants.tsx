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
  topicState,
  keyDownCheck,
}: VariantsProps) {
  const myRef = useRef(null);

  useEffect(() => {
    if (topicState.status === "idle") {
      const timeout = setTimeout(() => {
        myRef.current?.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [topicState.status]);

  const KeyDownHandler = (e) => {
    variants.forEach((variant, idx) => {
      if (e.key == idx + 1) {
        setValues([variant.value]);
      }
    });
  };

  return (
    <VariantsContainer
      tabIndex={0}
      ref={myRef}
      onKeyDown={(e) => keyDownCheck(e, (e) => KeyDownHandler(e))}
    >
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
