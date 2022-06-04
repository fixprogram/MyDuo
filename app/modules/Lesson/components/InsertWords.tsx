import { Variant } from "@prisma/client";
import { Fragment, useEffect, useState } from "react";
import {
  InsertWordsInput,
  InsertWordsTextBlock,
  VariantItemNumber,
} from "~/modules/Constructor/Levels/components/lib";
import { areArraysEqual, doesItemContainSign } from "~/utils";
import { LessonTitle, VariantItem } from "./lib";

export type InsertWordsType = {
  answer: string[];
  setValue: Function;
  changeDisabled: Function;
  text: string;
  contentAnswer: string[];
  formDisabled: boolean;
  isToChoose: boolean;
  variants: Variant[];
};

export default function InsertWords({
  answer,
  setValue,
  changeDisabled,
  text,
  contentAnswer,
  formDisabled,
  isToChoose,
  variants,
}: InsertWordsType) {
  // const [values, setValues] = useState<string[]>([""]);
  const [values, setValues] = useState([""]);

  useEffect(() => {
    if (areArraysEqual(answer, values) && !isToChoose) {
      return;
    }
    if (values.length !== contentAnswer.length) {
      return;
    }
    const isFieldEmpty = values.filter((val) => {
      if (val === "" || val === " ") {
        return true;
      }
    });
    changeDisabled(!!isFieldEmpty.length);
    setValue(values);
  }, [values]);

  useEffect(() => {
    // gets rid of focus if our lesson is only one and we solve it wrong
    if (!formDisabled) {
      setValues([""]);
    }
  }, [formDisabled]);

  useEffect(() => {
    if (isToChoose) {
      return;
    }
    if (answer[0].length) {
      setValues([...answer]);
    }
  }, [answer]);

  return (
    <Fragment>
      <LessonTitle>Add missing words</LessonTitle>
      <InsertWordsTextBlock>
        {text.split(" ").map((item: string, idx: number) => {
          const { newItem, sign } = doesItemContainSign(item);

          if (contentAnswer.includes(newItem)) {
            return contentAnswer.map((it: string, index: number) => {
              if (newItem !== it) {
                return null;
              }
              return (
                <Fragment key={idx}>
                  <InsertWordsInput
                    type="text"
                    id={`input${0}`}
                    style={{
                      cursor: isToChoose ? "pointer" : "text",
                    }}
                    length={newItem.length}
                    value={values[index]}
                    onChange={(e) => {
                      setValues((prevArray) => {
                        prevArray[index] = e.target.value;
                        return [...prevArray];
                      });
                    }}
                    onClick={(evt) => {
                      const target = evt.currentTarget;
                      if (target.value === "" || target.value === " ") {
                        return;
                      }
                      if (isToChoose) {
                        target.blur();
                        setValues((prevArray) => {
                          prevArray[index] = " ";
                          return [...prevArray];
                        });
                      }
                    }}
                    disabled={formDisabled}
                  />
                  <span style={{ marginRight: 4 }}>{sign}</span>
                </Fragment>
              );
            });
          }
          return (
            <span style={{ marginRight: 4 }} key={idx}>
              {item}
            </span>
          );
        })}
        {variants && (
          <div style={{ width: "100%", marginTop: "20px" }}>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {variants.map(({ value }, idx: number) => (
                <li
                  key={idx}
                  style={{
                    position: "relative",
                    marginBottom: 8,
                    width: "49%",
                  }}
                >
                  <VariantItemNumber isFocused={value === values[0]}>
                    {idx + 1}
                  </VariantItemNumber>
                  <VariantItem
                    type="button"
                    onClick={() => setValues([value])}
                    isFocused={value === values[0]}
                  >
                    {value}
                  </VariantItem>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isToChoose && (
          <div style={{ width: "100%" }}>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                margin: "30px 0 0",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {contentAnswer.map((answer, idx: number) => (
                <li
                  key={idx}
                  style={{
                    position: !!values.find((value) => value === answer)
                      ? "absolute"
                      : "relative",
                    margin: "0 16px 8px 0",
                    left: !!values.find((value) => value === answer)
                      ? "-10000px"
                      : 0,
                  }}
                >
                  <VariantItem
                    type="button"
                    isFocused={false}
                    onClick={() =>
                      setValues((prevArray) => {
                        const empty = prevArray.find(
                          (item) => item === " " || !!item === false
                        );
                        const inx = prevArray.indexOf(empty);
                        if (inx.toString() && inx !== -1) {
                          const newArr = prevArray;
                          newArr[inx] = answer;
                          return [...newArr];
                        }
                        return [...prevArray, answer];
                      })
                    }
                    disabled={
                      !!values.find((value) => value === answer)?.length
                    }
                  >
                    {answer}
                  </VariantItem>
                </li>
              ))}
            </ul>
          </div>
        )}
      </InsertWordsTextBlock>
    </Fragment>
  );
}
