import { Fragment, useEffect, useState } from "react";
import { InsertWordsTextBlock } from "~/modules/Constructor/Steps/components/lib";
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
  const [values, setValues] = useState<any[]>([
    ...Array(answer.length).fill(""),
  ]);

  useEffect(() => {
    if (formDisabled === true) {
      return;
    }

    setValues([...Array(answer.length).fill("")]);
  }, [formDisabled]);

  useEffect(() => {
    if (values.find((val) => val === "")) {
      return;
    }

    setAnswer(values);
  }, [values]);

  return (
    <Fragment>
      <LessonTitle>Insert words</LessonTitle>
      <InsertWordsTextBlock style={{ marginTop: 0 }}>
        {text.split(" ").map((item: string, idx: number) => {
          if (contentAnswer.includes(item)) {
            return contentAnswer.map((it: string, index: number) => {
              if (it === item) {
                return (
                  <input
                    type="text"
                    id={`input${0}`}
                    style={{
                      width: `${item.length * 20}px`,
                      margin: "0 7px",
                      border: "none",
                      borderBottom: "1px solid #e5e5e5",
                    }}
                    value={values[index]}
                    onChange={(e) => {
                      setValues((prevArr) => {
                        prevArr[index] = e.target.value;
                        return [...prevArr];
                      });
                    }}
                    disabled={formDisabled}
                    key={idx}
                  />
                );
              }
              return null;
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
