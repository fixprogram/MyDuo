import { Fragment, useEffect, useState } from "react";
import { Textarea } from "~/components/lib";
import { LessonTitle, VariantItem } from "~/modules/Lesson/components/lib";
import { doesItemContainSign, isItemInArray, useFocus } from "~/utils";
import type { FieldsetType } from "../../types";
import {
  InsertWordsInput,
  InsertWordsTextBlock,
  VariantItemInput,
} from "../lib";
import Backend from "./Backend";
import ChooseMissingWords from "./ChooseMissingWords";

type InsertWords = FieldsetType & {
  text: string;
  answer: string;
};

export default function InsertWords({
  text,
  number,
  answer,
  setAnswer,
  setReady,
}: InsertWords) {
  console.log("text: ", text);
  console.log("answer: ", answer);
  const [words, setWords] = useState<string[]>([]);
  const [showText, setShowText] = useState(false);
  const [isChooseVariants, setChooseVariants] = useState(false);
  // const [variants, setVariants] = useState([""]);
  const ref = useFocus();

  const defaultAnswer = words
    .map((word) => {
      const { newItem } = doesItemContainSign(word);

      return newItem + " ";
    })
    .join("");

  useEffect(() => {
    // if (words.length === 1) {
    //   setVariants([...words]);
    // }
    setReady(!!words.length);
  }, [words.length]);

  useEffect(() => {
    if (text) {
      setAnswer(text);
      const newWords = text.split(" ").filter((txt) => {
        const { newItem } = doesItemContainSign(txt);
        return isItemInArray(answer.split(" "), newItem);
      });
      setWords(newWords);
      setShowText(true);
    }
    // }, [text]);
  }, []);

  return (
    <fieldset style={{ padding: "0 25%" }}>
      <input
        type="hidden"
        name={`answer${number}`}
        defaultValue={defaultAnswer}
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
        // value={text}
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
          <ChooseMissingWords words={words} number={number} />
        )}
      </InsertWordsTextBlock>

      <Backend
        words={words}
        answer={answer}
        setWords={setWords}
        showText={setShowText}
        setChooseVariants={setChooseVariants}
        setShowText={setShowText}
        isChooseVariants={isChooseVariants}
      />
    </fieldset>
  );
}
