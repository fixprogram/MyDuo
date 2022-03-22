/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useEffect, useState } from "react";
import { PracticeBody, PracticeBodyResults } from "./lib";
import { Textarea, TextareaLabel } from "~/components/lib";
import { InsertWordsTextBlock } from "~/modules/Form/Steps/components/lib";

const Body = ({
  step,
  maxSteps,
  content,
  setValue,
  formDisabled,
  value,
  text,
}) => {
  const [values, setValues] = useState([]);
  return (
    <PracticeBody>
      <div
        css={{
          paddingTop: 50,
          height: "calc(100% - 240px)",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        {step === maxSteps + 1 ? (
          <PracticeBodyResults>Results Screen</PracticeBodyResults>
        ) : (
          <Fragment>
            <h2>{content.question}</h2>
            {!content.text ? (
              <TextareaLabel>
                <Textarea
                  id={`answer`}
                  name="answer"
                  placeholder="Enter answer"
                  value={value}
                  onChange={(e) => setValue(e.target.value.trim())}
                  disabled={formDisabled}
                />
              </TextareaLabel>
            ) : (
              <InsertWordsTextBlock css={{ marginTop: 0 }}>
                {content.text.split(" ").map((item: any, idx: number) =>
                  content.answer.find((it: any) => it === item) ? (
                    <input
                      type="text"
                      id={`input${idx}`}
                      css={{
                        width: `${item.length * 10}px`,
                        margin: "0 7px",
                        border: "none",
                        borderBottom: "1px solid #e5e5e5",
                      }}
                      onChange={(e) => {
                        let newItem;
                        if (values.length === 0) {
                          setValues([
                            { id: e.target.id, value: e.target.value },
                          ]);
                          setValue([
                            { id: e.target.id, value: e.target.value },
                          ]);
                        } else {
                          newItem = values.find((item) => {
                            return item.id === e.target.id;
                          });

                          let newArr = values;
                          if (newItem) {
                            newArr.splice(values.indexOf(newItem), 1);
                            newItem.value = e.target.value;
                            setValues(() => [...newArr, newItem]);
                            setValue([...newArr, newItem]);
                          } else {
                            setValues(() => [
                              ...newArr,
                              { id: e.target.id, value: e.target.value },
                            ]);
                            setValue([
                              ...newArr,
                              { id: e.target.id, value: e.target.value },
                            ]);
                          }
                        }
                      }}
                      disabled={formDisabled}
                      key={idx}
                    />
                  ) : (
                    <span key={idx} css={{ marginRight: 4 }}>
                      {item}
                    </span>
                  )
                )}
              </InsertWordsTextBlock>
            )}
          </Fragment>
        )}
      </div>
    </PracticeBody>
  );
};

export default Body;
