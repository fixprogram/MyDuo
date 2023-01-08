import type { Dispatch, SetStateAction } from "react";
import { SettingsContainer } from "~/modules/Constructor/components/lib";
import { cleanWordFromSigns, isItemInArray } from "~/utils";
import { Button } from "../lib";
import { WordsItem, WordsList } from "./lib";

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

function getWordsOutOfText(text: string) {
  const wordsWithPossibleSigns = text.split(" ");
  const words = wordsWithPossibleSigns.map(
    (word) => cleanWordFromSigns(word).newWord
  );
  return words;
}

export default function Settings({
  isEditingText,
  setEditingText,
  setIndexes,
  indexes,
  text,
}: BackendProps) {
  const words: string[] = text ? getWordsOutOfText(text) : [];

  //  ---------
  //  Filter words from dots, commas etc
  //  ---------

  function handleOnWordClick(wordIndex: number) {
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
  }

  return (
    <SettingsContainer>
      <WordsList>
        <li>
          <b style={{ display: "block", padding: "4px 0", marginBottom: 3 }}>
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
              onClick={() => handleOnWordClick(wordIndex)}
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

        {/** Try to generate variants right in Skill module instead on manually puting them */}
        {/* <Button
          type="button"
          onClick={() => setChooseVariants(!isChooseVariants)}
        >
          Set variants
        </Button> */}
      </div>
    </SettingsContainer>
  );
}
