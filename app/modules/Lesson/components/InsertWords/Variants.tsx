import { Variant } from "@prisma/client";
import { useEffect, useRef } from "react";
import { VariantItemNumber } from "~/modules/Constructor/Levels/components/lib";
import { useSkill } from "../..";
import { VariantItem } from "../lib";
import { VariantsContainer, VariantsItem, VariantsList } from "./lib";

type VariantsProps = {
  values: string[];
  setValues: Function;
  keyDownCheck: Function;
};

export default function Variants({
  values,
  setValues,
  keyDownCheck,
}: VariantsProps) {
  const myRef = useRef<HTMLDivElement>(null);
  const { content, skillState } = useSkill();
  const { variants, difficulty } = content;

  useEffect(() => {
    if (skillState.status === "idle") {
      const timeout = setTimeout(() => {
        myRef.current?.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [skillState.status]);

  const KeyDownHandler = (e: KeyboardEvent) => {
    variants.forEach((variant, idx) => {
      if (Number(e.key) === idx + 1) {
        setValues([variant.value]);
      }
    });
  };

  return variants && difficulty === "easy" ? (
    <VariantsContainer
      tabIndex={0}
      ref={myRef}
      onKeyDown={(e) =>
        keyDownCheck(e, (e: KeyboardEvent) => KeyDownHandler(e))
      }
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
  ) : null;
}
