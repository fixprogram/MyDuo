import { Fragment, useEffect } from "react";
import { InsertWordsInput } from "~/modules/Constructor/Levels/components/lib";
import { doesItemContainSign } from "~/utils";

type TextProps = {
  text: string;
  contentAnswer: string[];
  isToChoose: boolean;
  values: string[];
  setValues: Function;
  formDisabled: boolean;
};

export default function Text({
  text,
  contentAnswer,
  isToChoose,
  values,
  setValues,
  formDisabled,
}: TextProps) {
  useEffect(() => {
    // gets rid of focus if our lesson is only one and we solve it wrong
    if (!formDisabled) {
      setValues([...new Array(contentAnswer.length).fill(" ")]);
      //   setValues([" ", " ", " "]);
    }
  }, [formDisabled]);

  return (
    <Fragment>
      {text.split(" ").map((item: string, idx: number) => {
        const { newItem, sign } = doesItemContainSign(item);

        if (contentAnswer.includes(newItem)) {
          return contentAnswer.map((it: string, index: number) => {
            if (newItem !== it) {
              // sets position for inputs
              return null;
            }
            return (
              <Fragment key={index}>
                <InsertWordsInput
                  type="text"
                  id={`input${0}`}
                  isToChoose={isToChoose}
                  length={newItem.length}
                  value={values[index]}
                  onChange={(e) => {
                    setValues((prevArray: string[]) => {
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
                      setValues((prevArray: string[]) => {
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
          <span style={{ marginRight: 4 }} key={`text${idx}`}>
            {item}
          </span>
        );
      })}
    </Fragment>
  );
}
