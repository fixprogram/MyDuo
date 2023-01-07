import { Fragment, useEffect, useState } from "react";
import { Textarea } from "~/components/lib";
import { useFocus } from "~/hooks/useFocus";
import { useConstructor } from "~/modules/Constructor";
import { LessonTitle } from "~/modules/Skill/components/lib";
import { doesItemContainSign, isItemInArray } from "~/utils";
import { InsertWordsInput, InsertWordsTextBlock, StepContent } from "../lib";
import Settings from "./Settings";
import ChooseMissingWords from "./ChooseMissingWords";
import { Step } from "../../types";

// const initialState = {
//   // text: "",
//   number: 0,
//   answer: "",
//   stepType: "",
//   id: "",
//   options: {
//     text: "",
//   },
// };

export default function InsertWords() {
  // export default function InsertWords({ state = initialState }) {
  // const { options, id, stepType } = state;
  const { steps, activeStepId } = useConstructor();

  const activeStep = steps.find((step) => step.id === activeStepId) as Step;
  const { answer, id, stepType, options } = activeStep;

  const defaultIndexes = answer ? answer[0]?.split(",") : [];
  const { setStepReady, setAnswer, setStepOptions } = useConstructor();
  const [isEditingText, setEditingText] = useState(true);
  const [isChooseVariants, setChooseVariants] = useState(false);
  const [indexes, setIndexes] = useState(
    defaultIndexes.map((item) => Number(item))
  ); // Indexes of choosen words

  const ref = useFocus<HTMLTextAreaElement>();

  useEffect(() => {
    setAnswer(JSON.stringify(indexes), id);
    setStepReady(!!indexes.length, id);
  }, [indexes.length]);

  useEffect(() => {
    if (options.text) {
      // setAnswer(text, id);

      // const newWords = text.split(" ").filter((txt) => {
      //   const { newItem } = doesItemContainSign(txt);
      //   return isItemInArray(answer.split(" "), newItem);
      // });
      setEditingText(false);
    }

    setIndexes((prevIndexes) => {
      return prevIndexes.map((prevIndex) => Number(prevIndex));
    });
  }, []);

  const words = options.text ? options.text.split(" ") : answer.split(" ");
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
          {/* <input
            type="hidden"
            name={`answer${number}`}
            defaultValue={indexes.join(",")}
          />
          <input
            type="hidden"
            name={`isToChoose${number}`}
            defaultValue={isChooseVariants ? "1" : undefined}
          /> */}

          <LessonTitle>Add missing words</LessonTitle>

          <div style={{ marginTop: 30 }}>
            <Textarea
              // name={`text${number}`}
              placeholder="Type text and choose words which should be hidden"
              value={options.text}
              // value={state.answer}
              onChange={(evt) => {
                setStepOptions({ text: evt.target.value });
                // setAnswer(evt.target.value, id);
              }}
              ref={ref}
              required
            />

            <InsertWordsTextBlock
              isEditingText={isEditingText}
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

              {isChooseVariants && !isEditingText && (
                <ChooseMissingWords words={filteredWords} />
              )}
            </InsertWordsTextBlock>
          </div>
        </fieldset>
      </StepContent>

      {/* {state.answer.length > 0 && ( */}
      <Settings
        text={options.text}
        // answer={answer}
        answer={answer}
        indexes={indexes}
        setIndexes={setIndexes}
        isEditingText={isEditingText}
        setChooseVariants={setChooseVariants}
        setEditingText={setEditingText}
        isChooseVariants={isChooseVariants}
      />
      {/* )} */}
    </Fragment>
  ) : null;
}
