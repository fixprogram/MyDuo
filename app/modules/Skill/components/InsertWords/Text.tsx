import { Fragment, SyntheticEvent, useEffect, useRef, useState } from "react";
import { InsertWordsInput } from "~/modules/Constructor/Levels/components/lib";
import { doesItemContainSign } from "~/utils";
import { useSkill } from "../..";

type TextProps = {
  values: string[];
  setValues: Function;
};

export default function Text({ values, setValues }: TextProps) {
  const { content, skillState } = useSkill();
  const { options, answer: correctIndexes, difficulty } = content;
  const { text, variants, isToChoose } = options;

  useEffect(() => {
    // gets rid of focus if our lesson is only one and we solve it wrong
    if (!skillState.formDisabled) {
      setValues([...new Array(correctIndexes.length).fill("")]);
    }
  }, [skillState.formDisabled]);

  const myRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (skillState.status === "idle" && !isToChoose && !variants?.length) {
      const timeout = setTimeout(() => {
        myRef.current?.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [skillState.status]);

  const handleChange = (evt: SyntheticEvent, index: number) => {
    const target = evt.target as HTMLInputElement;
    setValues((prevArray: string[]) => {
      const newArray = prevArray;
      newArray[index] = target.value;
      return [...newArray];
    });
  };

  const handleInputClick = (evt: SyntheticEvent, index: number) => {
    const target = evt.target as HTMLInputElement;
    if (target.value === " " || target.value.length === 0) {
      return;
    }
    target.blur();
    setValues((prevArray: string[]) => {
      prevArray[index] = " ";
      return [...prevArray];
    });
  };

  return (
    <section>
      {text?.split(" ").map((textItem: string, textItemIndex: number) => {
        const { newItem, sign } = doesItemContainSign(textItem);
        if (correctIndexes.filter((item) => item === textItemIndex).length) {
          return correctIndexes.map((indexItem: string, index: number) => {
            if (textItemIndex !== Number(indexItem)) {
              // sets position for inputs
              return null;
            }

            return (
              <Fragment key={index}>
                {difficulty === "easy" && correctIndexes.length === 1 ? (
                  <InsertWordsInput
                    type="text"
                    length={newItem.length}
                    disabled={true}
                    value={values[index]}
                    style={{ color: "#fff" }}
                  />
                ) : difficulty === "easy" && correctIndexes.length > 1 ? (
                  <InsertWordsInput
                    type="text"
                    length={newItem.length}
                    value={values[index]}
                    onClick={(evt) => {
                      handleInputClick(evt, index);
                    }}
                    style={{ cursor: "pointer" }}
                    readOnly
                  />
                ) : (
                  <InsertWordsInput
                    type="text"
                    id={`input${0}`}
                    isToChoose={isToChoose as boolean}
                    length={newItem.length}
                    value={values[index]}
                    onChange={(evt) => handleChange(evt, index)}
                    disabled={skillState.formDisabled}
                    ref={correctIndexes.indexOf(indexItem) === 0 ? myRef : null}
                  />
                )}

                <span style={{ marginRight: 4 }}>{sign}</span>
              </Fragment>
            );
          });
        }
        return (
          <span style={{ marginRight: 4 }} key={`text${textItemIndex}`}>
            {textItem}
          </span>
        );
      })}
    </section>
  );
}
