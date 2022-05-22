import { Fragment, useEffect, useState } from "react";
import { InsertWordsTextBlock } from "~/modules/Constructor/Levels/components/lib";
import { doesItemContainSign } from "~/utils";
import { LessonTitle } from "./lib";

export default function InsertWords({
  answer,
  text,
  contentAnswer,
  setAnswer,
  formDisabled,
}: {
  answer: string[];
  text: string;
  contentAnswer: string[];
  setAnswer: Function;
  formDisabled: boolean;
}) {
  const [values, setValues] = useState<string[]>([
    ...Array(contentAnswer.length).fill(""),
  ]);

  useEffect(() => {
    if (formDisabled === true) {
      return;
    }

    setValues([...Array(contentAnswer.length).fill("")]);
  }, [formDisabled]);

  useEffect(() => {
    if (values.find((val) => val === "")) {
      return;
    }
    setAnswer(values);
  }, [values]);

  return (
    <Fragment>
      <LessonTitle>Add missing words</LessonTitle>
      <InsertWordsTextBlock
        style={{
          marginTop: 0,
          fontSize: 19,
          backgroundColor: "white",
          padding: 0,
          border: "none",
        }}
      >
        {text.split(" ").map((item: string, idx: number) => {
          const { newItem, sign } = doesItemContainSign(item);

          if (contentAnswer.includes(newItem)) {
            return contentAnswer.map((it: string, index: number) => {
              if (newItem !== it) {
                return null;
              }
              return (
                <Fragment key={idx}>
                  <input
                    type="text"
                    id={`input${0}`}
                    style={{
                      width: `${newItem.length * 13}px`,
                      margin: "0 7px -2px",
                      border: "none",
                      borderBottom: "2px solid #afafaf",
                      fontSize: 19,
                    }}
                    value={values[index]}
                    onChange={(e) => {
                      setValues((prevArray) => {
                        prevArray[index] = e.target.value;
                        return [...prevArray];
                      });
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
      </InsertWordsTextBlock>
    </Fragment>
  );
}
