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
  const { text, number, stepType } = state;
  const answer = "";
  const { setStepReady, setAnswer } = useConstructor();
  // const [words, setWords] = useState<string[]>([]);
  const [showText, setShowText] = useState(false);
  const [isChooseVariants, setChooseVariants] = useState(false);
  const [indexes, setIndexes] = useState(
    state.answer ? state.answer[0].split(",") : []
  );

  const ref = useFocus<HTMLTextAreaElement>();

  // useEffect(() => {
  //   if (answer.length && text.length) {
  //     setAnswer(text, number);
  //   }
  // }, []);

  // const defaultAnswer = words
  // const defaultAnswer = indexes
  //   .map((word) => {
  //     const { newItem } = doesItemContainSign(word);

  //     return newItem + " ";
  //   })
  //   .join("");
  // const defaultAnswer = indexes
  //   .map((idx) => {
  //     const answerItem = answer.split(" ")[idx];
  //     const { newItem } = doesItemContainSign(answerItem);

  //     return newItem + " ";
  //   })
  //   .join("");

  useEffect(() => {
    // setStepReady(!!words.length, number);
    setStepReady(!!indexes.length, number);
    // }, [words.length]);
  }, [indexes.length]);

  useEffect(() => {
    if (text) {
      setAnswer(text, number);
      const newWords = text.split(" ").filter((txt) => {
        const { newItem } = doesItemContainSign(txt);
        return isItemInArray(answer.split(" "), newItem);
      });
      // setWords(newWords);
      setShowText(true);
    }

    setIndexes((prevIndexes) => {
      return prevIndexes.map((prevIndex) => Number(prevIndex));
    });
  }, []);

  // const chosenWords = answer[0].split(",").filter((word, idx) => {
  //   if (indexes.find((i: number) => i === idx)) {
  //     return word;
  //   }
  // });

  const words2 = text ? text.split(" ") : state.answer.split(" ");
  const words = words2.filter((wordItem, idx) => {
    const word = indexes.filter((index) => Number(index) === idx)[0];
    if (word) {
      return wordItem;
    }
  });

  return stepType === "Insert" ? (
    <fieldset style={{ padding: "0 25%" }}>
      <input
        type="hidden"
        name={`answer${number}`}
        // defaultValue={defaultAnswer}
        defaultValue={indexes}
      />
      <input
        type="hidden"
        name={`isToChoose${number}`}
        defaultValue={isChooseVariants ? "1" : undefined}
      />

      <LessonTitle>Add missing words</LessonTitle>

      <div style={{ marginTop: 30 }}>
        <Textarea
          name={`text${number}`}
          placeholder="Type text"
          value={state.answer}
          onChange={(evt) => {
            setAnswer(evt.target.value, number);
          }}
          ref={ref}
          required
        />

        <InsertWordsTextBlock showText={showText} style={{ marginTop: -176 }}>
          {/* {answer.split(" ").map((item, idx) => { */}
          {/* {text.split(" ").map((item, idx) => { */}
          {words2.map((item, idx) => {
            const { newItem, sign } = doesItemContainSign(item);

            // if (!isItemInArray(words, item)) {
            // if (!isItemInArray(chosenWords, item)) {
            //   return (
            //     <span style={{ marginRight: 3 }} key={idx}>
            //       {item}
            //     </span>
            //   );
            // }

            if (!isItemInArray(indexes, idx)) {
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
          text={text}
          // answer={answer}
          answer={state.answer}
          indexes={indexes}
          setIndexes={setIndexes}
          showText={setShowText}
          setChooseVariants={setChooseVariants}
          setShowText={setShowText}
          isChooseVariants={isChooseVariants}
        />
      </div>
    </fieldset>
  ) : null;
}
