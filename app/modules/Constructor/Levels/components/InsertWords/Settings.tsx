import type { Dispatch, SetStateAction } from "react";
import { isItemInArray } from "~/utils";
import { SettingsContainer, Button, WordsItem, WordsList } from "./lib";

type BackendProps = {
  isEditingText: boolean;
  setEditingText: Function;
  setChooseVariants: Function;
  isChooseVariants: boolean;
  answer: string;
  indexes: number[];
  setIndexes: Dispatch<SetStateAction<number[]>>;
  text: string;
};

export default function Settings({
  isEditingText,
  setEditingText,
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
    <SettingsContainer>
      <WordsList>
        <li>
          <b style={{ display: "block", padding: "4px 0" }}>
            Choose words to be hidden:{" "}
          </b>
        </li>
        {words.map((word, wordIndex) => {
          const isActive = !!indexes
            .find((index) => index === wordIndex)
            ?.toString(); // We coerce value into string in order if index 0 is active as well
          return (
            <WordsItem
              isActive={isActive}
              key={wordIndex}
              onClick={() => {
                setIndexes((prevIndexes: number[]) => {
                  if (wordIndex === 0) {
                    let wasRemoved = false;
                    prevIndexes.forEach((prevIndex, ix) => {
                      if (prevIndex === 0) {
                        wasRemoved = true;
                        prevIndexes.splice(ix, 1);
                      }
                    });

                    if (wasRemoved) return [...prevIndexes];

                    return [...prevIndexes, wordIndex];
                  }

                  if (isItemInArray(prevIndexes, wordIndex)) {
                    prevIndexes.splice(prevIndexes.indexOf(wordIndex), 1);
                    return [...prevIndexes];
                  }

                  return [...prevIndexes, wordIndex];
                });

                setEditingText(false);
              }}
            >
              {word}
            </WordsItem>
          );
        })}
      </WordsList>

      <div style={{ display: "flex", alignItems: "end", marginTop: "auto" }}>
        <Button
          type="button"
          onClick={() => setEditingText(true)}
          disabled={isEditingText}
        >
          Edit text
        </Button>
        <Button
          type="button"
          onClick={() => setChooseVariants(!isChooseVariants)}
        >
          Set variants
        </Button>
      </div>
    </SettingsContainer>
  );
}
