/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { Textarea, VisuallyHiddenInput } from "~/components/lib";
import type { FieldsetType } from "../types";
import { InsertWordsTextBlock } from "./lib";

export default function InsertWords({
  number,
  answer,
  setAnswer,
  setStyle,
}: FieldsetType) {
  const [words, setWords] = useState([]);
  const [showText, setShowText] = useState(false);

  return (
    <fieldset css={{ padding: "0 25%" }}>
      <VisuallyHiddenInput name={`answer${number}`} value={words} readOnly />

      <VisuallyHiddenInput name={`type${number}`} value={"Insert"} readOnly />

      <div>
        <h2>Type and choose to insert</h2>
        <button type="button" onClick={() => setStyle()}>
          Back to Styles
        </button>
      </div>

      <Textarea
        name={`text${number}`}
        placeholder="Type text"
        value={answer}
        onChange={(evt) => {
          setAnswer(evt.target.value);
        }}
        required
      />

      <InsertWordsTextBlock showText={showText}>
        {answer.split(" ").map((item, idx) => {
          if (words.find((word) => word === item)) {
            return (
              <input
                type="text"
                key={idx}
                css={{
                  width: `${item.length * 10}px`,
                  margin: "0 7px",
                  border: "none",
                  borderBottom: "1px solid #e5e5e5",
                }}
              />
            );
          } else {
            return (
              <span css={{ marginRight: 3 }} key={idx}>
                {item}
              </span>
            );
          }
        })}
      </InsertWordsTextBlock>

      <div>
        <h3>Mark words which should be hidden</h3>
        <button
          type="button"
          css={{ display: showText ? "block" : "none" }}
          onClick={() => setShowText(false)}
        >
          Edit text
        </button>
        {answer.split(" ").map((item, idx) => (
          <span
            css={{
              marginRight: 3,
              border: words.find((word) => word === item)
                ? "1px solid green"
                : "none",
            }}
            key={idx}
            onClick={() => {
              setWords((prevArr) => {
                if (prevArr?.find((word) => word === item)) {
                  prevArr.splice(prevArr.indexOf(item), 1);
                  return [...prevArr];
                } else {
                  return [...prevArr, item];
                }
              });
              setShowText(true);
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </fieldset>
  );
}
