import { Fragment, useEffect, useState } from "react";
import { Textarea } from "~/components/lib";
import { useFocus } from "~/hooks/useFocus";
import { useConstructor } from "~/modules/Constructor";
import { LessonTitle } from "~/modules/Skill/components/lib";
import { doesItemContainSign, isItemInArray } from "~/utils";
import { InsertWordsInput, InsertWordsTextBlock, StepContent } from "../lib";
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
  const answer = state.answer ? state.answer[0].split(",") : [];
  const { setStepReady, setAnswer } = useConstructor();
  const [showText, setShowText] = useState(false);
  const [isChooseVariants, setChooseVariants] = useState(false);
  const [indexes, setIndexes] = useState(answer.map((item) => Number(item))); // Indexes of choosen words

  const ref = useFocus<HTMLTextAreaElement>();

  useEffect(() => {
    setStepReady(!!indexes.length, number);
  }, [indexes.length]);

  useEffect(() => {
    if (text) {
      setAnswer(text, number);
      // const newWords = text.split(" ").filter((txt) => {
      //   const { newItem } = doesItemContainSign(txt);
      //   return isItemInArray(answer.split(" "), newItem);
      // });
      setShowText(true);
    }

    setIndexes((prevIndexes) => {
      return prevIndexes.map((prevIndex) => Number(prevIndex));
    });
  }, []);

  const words = text ? text.split(" ") : state.answer.split(" ");
  const filteredWords = words.filter((word, idx) => {
    const isChoosen = indexes.find((index) => Number(index) === idx);
    if (isChoosen) {
      return word;
    }
  });

  return stepType === "Insert" ? (
    <Fragment>
      <StepContent>
        <fieldset style={{ padding: "0 25%" }}>
          <input
            type="hidden"
            name={`answer${number}`}
            defaultValue={indexes.join(",")}
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

            <InsertWordsTextBlock
              showText={showText}
              style={{ marginTop: -176 }}
            >
              {words.map((item, idx) => {
                const { newItem, sign } = doesItemContainSign(item);

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
                  <InsertWordsInput
                    type="text"
                    key={idx}
                    length={newItem.length}
                  />
                );
              })}

              {isChooseVariants && (
                <ChooseMissingWords words={filteredWords} number={number} />
              )}
            </InsertWordsTextBlock>
          </div>
        </fieldset>
      </StepContent>

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
    </Fragment>
  ) : null;
}
