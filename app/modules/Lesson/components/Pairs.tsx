import { Variant } from "@prisma/client";
import { Fragment, useState } from "react";
import { LessonTitle, VariantItem } from "./lib";

export default function Pairs({
  answer,
  variants,
  checkAnswer,
  setUserAnswer,
}: {
  answer: string[];
  variants: Variant[];
  checkAnswer: Function;
  setUserAnswer: Function;
}) {
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  const isDisabled = (idx: number) => {
    return answer.find((answerItem) =>
      answerItem.includes((idx + 1).toString())
    );
    // return false;
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
              if (isDisabled(idx)) {
                return;
              }
              if (activeIdx === -1) {
                return setActiveIdx(Number(target.id));
              }
              // setUserAnswer([`${activeIdx}${target.id}`]);
              // checkAnswer([`${activeIdx}${target.id}`]);

              // setUserAnswer(`${activeIdx}${target.id}`);
              checkAnswer(`${activeIdx}${target.id}`);
              setActiveIdx(-1);
            }}
          >
            <VariantItem
              type="button"
              id={(idx + 1).toString()}
              style={{
                cursor: isDisabled(idx) ? "default" : "pointer",
                color:
                  activeIdx === idx + 1
                    ? "#1899d6"
                    : isDisabled(idx)
                    ? "#e5e5e5"
                    : "#4b4b4b",
                borderColor:
                  activeIdx === idx + 1
                    ? "#84d8ff"
                    : isDisabled(idx)
                    ? "#e5e5e5"
                    : "#e5e5e5",
                backgroundColor: activeIdx === idx + 1 ? "#ddf4ff" : "#fff",
              }}
              disabled={isDisabled(idx)}
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
