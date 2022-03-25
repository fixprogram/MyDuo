/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useState } from "react";
import { RepeatTitle, VariantItem } from "./lib";

export default function Pairs({ content, checkAnswer }) {
  const [active, setActive] = useState("");

  const isDisabled = (idx) => {
    return !content.answer.find((ans) => ans.includes(idx + 1));
  };

  return (
    <Fragment>
      <RepeatTitle>Connect pairs</RepeatTitle>

      <ul
        css={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {content.variants.map((item, idx) => (
          <li
            key={idx}
            css={{ marginBottom: 5, position: "relative", width: "48%" }}
            onClick={(evt) => {
              if (!isDisabled(idx)) {
                if (active) {
                  checkAnswer(`${active}${evt.target.id}`);
                  setActive("");
                } else {
                  setActive(evt.target.id);
                }
              }
            }}
          >
            <VariantItem
              type="button"
              id={idx + 1}
              css={{
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
