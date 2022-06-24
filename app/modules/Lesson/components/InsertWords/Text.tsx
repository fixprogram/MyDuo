import { Variant } from "@prisma/client";
import { Fragment, SyntheticEvent, useEffect, useRef } from "react";
import {
  InsertWordsAnswerField,
  InsertWordsInput,
} from "~/modules/Constructor/Levels/components/lib";
import { doesItemContainSign } from "~/utils";

type TextProps = {
  text: string;
  contentAnswer: string[];
  isToChoose: boolean;
  values: string[];
  setValues: Function;
  formDisabled: boolean;
  variants: Variant[];
  topicState: { status: string; formDisabled: boolean };
};

export default function Text({
  text,
  contentAnswer,
  isToChoose,
  values,
  setValues,
  topicState,
  variants,
}: TextProps) {
  useEffect(() => {
    // gets rid of focus if our lesson is only one and we solve it wrong
    if (!topicState.formDisabled) {
      setValues([...new Array(contentAnswer.length).fill(" ")]);
    }
  }, [topicState.formDisabled]);

  const myRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (topicState.status === "idle" && !isToChoose && !variants.length) {
      const timeout = setTimeout(() => {
        myRef.current?.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [topicState.status]);

  const handleChange = (evt, index: number) => {
    const target = evt.target as HTMLInputElement;
    setValues((prevArray: string[]) => {
      const newArray = prevArray;
      newArray[index] = target.value;
      return [...newArray];
    });
  };

  const handleInputClick = (evt, index: number) => {
    const target = evt.currentTarget;
    if (target.value === "" || target.value === " ") {
      return;
    }
    if (isToChoose || variants) {
      target.blur();
      setValues((prevArray: string[]) => {
        prevArray[index] = " ";
        return [...prevArray];
      });
    }
  };

  let firstInput = 0;

  return (
    <Fragment>
      {text.split(" ").map((textItem: string, idx: number) => {
        const { newItem, sign } = doesItemContainSign(textItem);

        if (contentAnswer.includes(newItem)) {
          return contentAnswer.map((answerItem: string, index: number) => {
            if (newItem !== answerItem) {
              // sets position for inputs
              return null;
            }
            firstInput = firstInput && index;
            return (
              <Fragment key={index}>
                {variants ? (
                  <InsertWordsInput
                    type="text"
                    length={newItem.length}
                    disabled={!!variants}
                  />
                ) : (
                  <InsertWordsInput
                    type="text"
                    id={`input${0}`}
                    isToChoose={isToChoose}
                    length={newItem.length}
                    value={values[index]}
                    onChange={(evt) => handleChange(evt, index)}
                    onClick={(evt) => handleInputClick(evt, index)}
                    disabled={topicState.formDisabled || variants}
                    ref={firstInput === index ? myRef : null}
                  />
                )}

                <span style={{ marginRight: 4 }}>{sign}</span>
              </Fragment>
            );
          });
        }
        return (
          <span style={{ marginRight: 4 }} key={`text${idx}`}>
            {textItem}
          </span>
        );
      })}
    </Fragment>
  );
}
