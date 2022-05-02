import { Fragment, useState } from "react";
import { LessonTitle, VariantItem } from "./lib";

export default function Pairs({
  contentAnswer,
  variants,
  checkAnswer,
}: {
  contentAnswer: string[];
  variants: any;
  checkAnswer: Function;
}) {
  const [active, setActive] = useState<string>("");

  const isDisabled = (idx: string) => {
    return !contentAnswer.find((answerItem: any) =>
      answerItem.includes(idx + 1)
    );
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
        {variants.map((item: string, idx: string) => (
          <li
            key={idx}
            style={{ marginBottom: 5, position: "relative", width: "48%" }}
            onClick={(evt) => {
              const target = evt.target as HTMLInputElement;
              if (isDisabled(idx)) {
                return;
              }
              if (!active) {
                return setActive(target.id);
              }
              checkAnswer([`${active}${target.id}`]);
              setActive("");
            }}
          >
            <VariantItem
              type="button"
              id={(idx + 1).toString()}
              style={{
                cursor: isDisabled(idx) ? "default" : "pointer",
                color:
                  active == idx + 1
                    ? "#1899d6"
                    : isDisabled(idx)
                    ? "#e5e5e5"
                    : "#4b4b4b",
                borderColor:
                  active == idx + 1
                    ? "#84d8ff"
                    : isDisabled(idx)
                    ? "#e5e5e5"
                    : "#e5e5e5",
                backgroundColor: active == idx + 1 ? "#ddf4ff" : "#fff",
              }}
              disabled={isDisabled(idx)}
            >
              {item}
            </VariantItem>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
