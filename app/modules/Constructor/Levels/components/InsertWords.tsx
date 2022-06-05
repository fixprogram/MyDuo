import { Fragment, useEffect, useState } from "react";
import { Textarea } from "~/components/lib";
import { LessonTitle, VariantItem } from "~/modules/Lesson/components/lib";
import { doesItemContainSign, isItemInArray, useFocus } from "~/utils";
import type { FieldsetType } from "../types";
import {
  InsertWordsInput,
  InsertWordsTextBlock,
  VariantItemInput,
} from "./lib";

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
  const [isChooseVariants, setChooseVariants] = useState(false);
  const [variants, setVariants] = useState([""]);
  const ref = useFocus();

  useEffect(() => {
    if (words.length === 1) {
      setVariants([...words]);
    }
    setReady(!!words.length);
  }, [words.length]);

  return (
    <fieldset style={{ padding: "0 25%" }}>
      <input
        type="hidden"
        name={`answer${number}`}
        defaultValue={words
          .map((word) => {
            const { newItem } = doesItemContainSign(word);

            return newItem + " ";
          })
          .join("")}
      />

      <input type="hidden" name={`type${number}`} value={"Insert"} />
      <input
        type="hidden"
        name={`isToChoose${number}`}
        defaultValue={isChooseVariants ? "1" : undefined}
      />

      <LessonTitle>Add missing words</LessonTitle>

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

      <InsertWordsTextBlock showText={showText} style={{ marginTop: -206 }}>
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
                <InsertWordsInput type="text" length={newItem.length} />
                <span>{sign}</span>
              </Fragment>
            );
          }

          return (
            <InsertWordsInput type="text" key={idx} length={newItem.length} />
          );
        })}

        {isChooseVariants && (
          <div style={{ width: "100%" }}>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {words.length === 1 ? (
                <Fragment>
                  <li>
                    <VariantItem
                      type="button"
                      isFocused={false}
                      onClick={() =>
                        setVariants((prevVars) => [...prevVars, ""])
                      }
                    >
                      Add variant
                    </VariantItem>
                  </li>
                  {variants.map((variant, idx) => (
                    <VariantItemInput
                      key={`insertwordvariant${idx}`}
                      type="text"
                      name={`variant${number}`}
                      placeholder="type variant"
                      autoComplete="off"
                      defaultValue={variant}
                      required
                    />
                  ))}
                </Fragment>
              ) : (
                words.map((word, idx: number) => (
                  <li
                    key={idx}
                    style={{ position: "relative", marginBottom: 8 }}
                  >
                    <VariantItem type="button" isFocused={false}>
                      {word}
                    </VariantItem>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
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
        <button
          type="button"
          onClick={() => setChooseVariants(!isChooseVariants)}
        >
          Set variants
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
