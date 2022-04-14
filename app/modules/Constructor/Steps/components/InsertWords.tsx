import { useState } from "react";
import { Textarea, VisuallyHiddenInput } from "~/components/lib";
import { useFocus } from "~/utils";
import type { FieldsetType } from "../types";
import { InsertWordsTextBlock } from "./lib";

export default function InsertWords({
  number,
  answer,
  setAnswer,
}: FieldsetType) {
  const [words, setWords] = useState([]);
  const [showText, setShowText] = useState(false);
  const ref = useFocus();

  return (
    <fieldset style={{ padding: "0 25%" }}>
      <VisuallyHiddenInput name={`answer${number}`} value={words} readOnly />

      <VisuallyHiddenInput name={`type${number}`} value={"Insert"} readOnly />

      <div>
        <h2>Type and choose to insert</h2>
      </div>

      <Textarea
        name={`text${number}`}
        placeholder="Type text"
        value={answer}
        onChange={(evt) => {
          setAnswer(evt.target.value);
        }}
        ref={ref}
        required
      />

      <InsertWordsTextBlock showText={showText}>
        {answer.split(" ").map((item, idx) => {
          if (words.find((word) => word === item)) {
            return (
              <input
                type="text"
                key={idx}
                style={{
                  width: `${item.length * 10}px`,
                  margin: "0 7px",
                  border: "none",
                  borderBottom: "1px solid #e5e5e5",
                }}
              />
            );
          } else {
            return (
              <span style={{ marginRight: 3 }} key={idx}>
                {item}
              </span>
            );
          }
        })}
      </InsertWordsTextBlock>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h3>Mark words which should be hidden</h3>
        <button
          type="button"
          style={{ display: showText ? "block" : "none" }}
          onClick={() => setShowText(false)}
        >
          Edit text
        </button>
        {answer.split(" ").map((item, idx) => (
          <span
            style={{
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
