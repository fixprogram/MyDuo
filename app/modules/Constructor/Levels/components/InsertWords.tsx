import { Fragment, useEffect, useState } from "react";
import { Textarea } from "~/components/lib";
import { LessonTitle } from "~/modules/Lesson/components/lib";
import { doesItemContainSign, isItemInArray, useFocus } from "~/utils";
import type { FieldsetType } from "../types";
import { InsertWordsTextBlock } from "./lib";

type InsertWords = FieldsetType & {
  answer: string;
};

export default function InsertWords({
  number,
  answer,
  setAnswer,
  setReady,
}: InsertWords) {
  const [words, setWords] = useState<string[]>([]);
  const [showText, setShowText] = useState(false);
  const ref = useFocus();

  useEffect(() => {
    setReady(!!words.length);
  }, [words.length]);

  return (
    <fieldset style={{ padding: "0 25%" }}>
      <input
        type="hidden"
        name={`answer${number}`}
        value={words
          .map((word) => {
            const { newItem } = doesItemContainSign(word);

            return newItem + " ";
          })
          .join("")}
      />

      <input type="hidden" name={`type${number}`} value={"Insert"} />

      {/* <div>
        <h2>Type and choose to insert</h2>
      </div> */}
      <LessonTitle>Add missing words</LessonTitle>

      <Textarea
        name={`text${number}`}
        placeholder="Type text"
        value={answer}
        onChange={(evt) => {
          setAnswer(evt.target.value);
        }}
        ref={ref}
        // style={{ padding: "10px 0" }}
        required
      />

      <InsertWordsTextBlock
        showText={showText}
        style={{
          fontSize: 19,
          backgroundColor: "white",
          border: "none",
          fontFamily: "Roboto",
          padding: "10px 0",
        }}
      >
        {answer.split(" ").map((item, idx) => {
          const { newItem, sign } = doesItemContainSign(item);

          if (!isItemInArray(words, item)) {
            return (
              <span style={{ marginRight: 3 }} key={idx}>
                {item}
              </span>
            );
          }

          if (sign) {
            return (
              <Fragment key={idx}>
                <input
                  type="text"
                  style={{
                    width: `${newItem.length * 13}px`,
                    margin: "0 7px -2px",
                    border: "none",
                    borderBottom: "2px solid #afafaf",
                    fontSize: 19,
                  }}
                />
                <span>{sign}</span>
              </Fragment>
            );
          }

          return (
            <input
              type="text"
              key={idx}
              style={{
                width: `${newItem.length * 10}px`,
                margin: "0 7px",
                border: "none",
                borderBottom: "1px solid #e5e5e5",
              }}
            />
          );
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
        {answer.split(" ").map((item, idx) => {
          return (
            <span
              style={{
                marginRight: 3,
                border: words.find((word) => word === item)
                  ? "1px solid green"
                  : "none",
              }}
              key={idx}
              onClick={() => {
                setWords(() => {
                  if (isItemInArray(words, item)) {
                    words.splice(words.indexOf(item), 1);
                    return [...words];
                  }

                  return [...words, item];
                });
                setShowText(true);
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </fieldset>
  );
}
