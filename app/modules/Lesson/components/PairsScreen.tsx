import { Variant } from "@prisma/client";
import { Fragment, useState } from "react";
import { LessonTitle, VariantItem } from "./lib";

type PairsScreenProps = {
  variants: Variant[];
  checkAnswer: Function;
  userAnswer: string[];
};

export default function PairsScreen({
  variants,
  checkAnswer,
  userAnswer,
}: PairsScreenProps) {
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  const isVariantDisabled = (idx: number) => {
    if (
      userAnswer.find((answerItem) => answerItem.includes((idx + 1).toString()))
    ) {
      return true;
    }
    return false;
  };

  return (
    <Fragment>
      <LessonTitle>Connect pairs</LessonTitle>

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {variants.map(({ value, isFocused }, idx: number) => (
          <li
            key={idx}
            style={{ marginBottom: 5, position: "relative", width: "48%" }}
            onClick={(evt) => {
              const target = evt.target as HTMLInputElement;
              if (isVariantDisabled(idx)) {
                return;
              }
              if (activeIdx === -1) {
                return setActiveIdx(Number(target.id));
              }
              checkAnswer(`${activeIdx}${target.id}`);
              setActiveIdx(-1);
            }}
          >
            <VariantItem
              type="button"
              id={(idx + 1).toString()}
              style={{
                cursor: isVariantDisabled(idx) ? "default" : "pointer",
                color:
                  activeIdx === idx + 1
                    ? "#1899d6"
                    : isVariantDisabled(idx)
                    ? "#e5e5e5"
                    : "#4b4b4b",
                borderColor:
                  activeIdx === idx + 1
                    ? "#84d8ff"
                    : isVariantDisabled(idx)
                    ? "#e5e5e5"
                    : "#e5e5e5",
                backgroundColor: activeIdx === idx + 1 ? "#ddf4ff" : "#fff",
              }}
              disabled={isVariantDisabled(idx)}
              isFocused={isFocused}
            >
              {value}
            </VariantItem>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}