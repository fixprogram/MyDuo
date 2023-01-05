import { doesItemContainSign } from "~/utils";
import { useSkill } from "../..";
import { VariantItem } from "../lib";
import { PuzzleContainer, PuzzleItem, PuzzleList } from "./lib";

type PuzzleProps = {
  values: string[];
  setValues: Function;
};

export default function Puzzle({ values, setValues }: PuzzleProps) {
  const { content } = useSkill();
  const { answer: contentAnswer, text, difficulty, isToChoose } = content;
  const insertText = text as string;
  const selectVariant = (variant: string) => {
    setValues((prevArray: string[]) => {
      const empty = prevArray.find((item) => {
        if (item === " " || item.length === 0 || !!item === false) {
          return item;
        }
      });
      const inx = prevArray.indexOf(empty as string);
      if (inx.toString() && inx !== -1) {
        const newArr = prevArray;
        newArr[inx] = variant;
        return [...newArr];
      }
      return [...prevArray, variant];
    });
  };

  const indexes =
    contentAnswer.length === 1 ? contentAnswer[0].split(",") : contentAnswer;

  const words = indexes.map((idx) => {
    const textItem = insertText.split(" ")[Number(idx)];

    return doesItemContainSign(textItem).newItem;
  });

  return isToChoose && difficulty === "easy" ? (
    <PuzzleContainer>
      <PuzzleList>
        {/* {contentAnswer.map((answer, idx: number) => { */}
        {words.map((answer, idx: number) => {
          const alreadyChoosen = !!values.find((value) => value === answer);
          return (
            <PuzzleItem alreadyChoosen={alreadyChoosen} key={idx}>
              <VariantItem
                type="button"
                isFocused={false}
                onClick={() => selectVariant(answer)}
                disabled={alreadyChoosen}
              >
                {answer}
              </VariantItem>
            </PuzzleItem>
          );
        })}
      </PuzzleList>
    </PuzzleContainer>
  ) : null;
}
