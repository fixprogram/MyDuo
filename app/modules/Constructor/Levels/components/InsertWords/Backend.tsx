import { isItemInArray } from "~/utils";
import { WordsItem, WordsList } from "./lib";

type BackendProps = {
  showText: Function;
  setShowText: Function;
  setChooseVariants: Function;
  isChooseVariants: boolean;
  answer: string;
  indexes: number[];
  setIndexes: (indexes: number[]) => void;
  text: string;
};

export default function Backend({
  showText,
  setShowText,
  setChooseVariants,
  isChooseVariants,
  answer,
  setIndexes,
  indexes,
  text,
}: BackendProps) {
  const words = text ? text.split(" ") : answer.split(" ");

  //  ---------
  //  Filter words from dots, commas etc
  //  ---------

  return (
    <div style={{ padding: 30 }}>
      <WordsList>
        <li>
          <b>Choose words to be hidden: </b>
        </li>
        {words.map((item, idx) => {
          // {answer.split(" ").map((item, idx) => {
          const isActive = !!indexes.find((i) => i === idx);
          return (
            <WordsItem
              isActive={isActive}
              key={idx}
              onClick={() => {
                setIndexes((prevIndexes) => {
                  if (idx === 0) {
                    let wasRemoved = false;
                    prevIndexes.forEach((i, ix) => {
                      if (i === 0) {
                        wasRemoved = true;
                        prevIndexes.splice(ix, 1);
                      }
                    });

                    if (wasRemoved) return [...prevIndexes];

                    return [...prevIndexes, idx];
                  }

                  if (isItemInArray(prevIndexes, idx)) {
                    prevIndexes.splice(prevIndexes.indexOf(idx), 1);
                    return [...prevIndexes];
                  }

                  return [...prevIndexes, idx];
                });

                setShowText(true);
              }}
            >
              {item}
            </WordsItem>
          );
        })}
      </WordsList>

      <button
        type="button"
        style={{ display: showText ? "block" : "none" }}
        onClick={() => setShowText(false)}
      >
        Edit text
      </button>
      <button
        type="button"
        onClick={() => setChooseVariants(!isChooseVariants)}
      >
        Set variants
      </button>
    </div>
  );
}
