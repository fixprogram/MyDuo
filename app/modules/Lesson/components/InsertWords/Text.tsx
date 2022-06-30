import { Fragment, SyntheticEvent, useEffect, useRef } from "react";
import { InsertWordsInput } from "~/modules/Constructor/Levels/components/lib";
import { doesItemContainSign } from "~/utils";
import { useSkill } from "../..";

type TextProps = {
  values: string[];
  setValues: Function;
};

export default function Text({ values, setValues }: TextProps) {
  const { content, skillState } = useSkill();
  const { text, isToChoose, variants, answer, difficulty } = content;
  useEffect(() => {
    // gets rid of focus if our lesson is only one and we solve it wrong
    if (!skillState.formDisabled) {
      setValues([...new Array(answer.length).fill(" ")]);
    }
  }, [skillState.formDisabled]);

  const myRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (skillState.status === "idle" && !isToChoose && !variants.length) {
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
    <section>
      {text?.split(" ").map((textItem: string, idx: number) => {
        const { newItem, sign } = doesItemContainSign(textItem);

        if (answer.includes(newItem)) {
          return answer.map((answerItem: string, index: number) => {
            if (newItem !== answerItem) {
              // sets position for inputs
              return null;
            }
            firstInput = firstInput && index;
            return (
              <Fragment key={index}>
                {difficulty === "easy" && variants ? (
                  <InsertWordsInput
                    type="text"
                    length={newItem.length}
                    disabled={true}
                  />
                ) : (
                  <InsertWordsInput
                    type="text"
                    id={`input${0}`}
                    isToChoose={isToChoose as boolean}
                    length={newItem.length}
                    value={values[index]}
                    onChange={(evt) => handleChange(evt, index)}
                    onClick={(evt) => handleInputClick(evt, index)}
                    disabled={skillState.formDisabled}
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
    </section>
  );
}
