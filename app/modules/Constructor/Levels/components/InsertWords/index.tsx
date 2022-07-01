import { Fragment, useEffect, useState } from "react";
import { Textarea } from "~/components/lib";
import { useFocus } from "~/hooks/useFocus";
import { useConstructor } from "~/modules/Constructor";
import { LessonTitle } from "~/modules/Lesson/components/lib";
import { doesItemContainSign, isItemInArray } from "~/utils";
import { InsertWordsInput, InsertWordsTextBlock } from "../lib";
import Backend from "./Backend";
import ChooseMissingWords from "./ChooseMissingWords";

const initialState = {
  text: "",
  number: 0,
  answer: "",
  stepType: "",
};

export default function InsertWords({ state = initialState }) {
  const { text, number, answer, stepType } = state;
  const { setStepReady, setAnswer } = useConstructor();
  const [words, setWords] = useState<string[]>([]);
  const [showText, setShowText] = useState(false);
  const [isChooseVariants, setChooseVariants] = useState(false);
  const ref = useFocus<HTMLTextAreaElement>();

  const defaultAnswer = words
    .map((word) => {
      const { newItem } = doesItemContainSign(word);

      return newItem + " ";
    })
    .join("");

  useEffect(() => {
    setStepReady(!!words.length, number);
  }, [words.length]);

  useEffect(() => {
    if (text) {
      setAnswer(text, number);
      const newWords = text.split(" ").filter((txt) => {
        const { newItem } = doesItemContainSign(txt);
        return isItemInArray(answer.split(" "), newItem);
      });
      setWords(newWords);
      setShowText(true);
    }
  }, []);

  return stepType === "Insert" ? (
    <fieldset style={{ padding: "0 25%" }}>
      <input
        type="hidden"
        name={`answer${number}`}
        defaultValue={defaultAnswer}
      />
      {/* <input type="hidden" name={`type${number}`} value={"Insert"} /> */}
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
          setAnswer(evt.target.value, number);
        }}
        ref={ref}
        required
      />

      <InsertWordsTextBlock showText={showText} style={{ marginTop: -176 }}>
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
  ) : null;
}
