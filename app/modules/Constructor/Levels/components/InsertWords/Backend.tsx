import { isItemInArray } from "~/utils";

type BackendProps = {
  showText: Function;
  setShowText: Function;
  setChooseVariants: Function;
  isChooseVariants: boolean;
  answer: string;
  indexes: number[];
  setIndexes: Function;
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
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h3>Mark words which should be hidden</h3>
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
      {words.map((item, idx) => {
        // {answer.split(" ").map((item, idx) => {
        return (
          <span
            style={{
              marginRight: 3,
              border: !!indexes.filter((i) => i === idx).length
                ? "1px solid #78C83D"
                : "none",
            }}
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
          </span>
        );
      })}
    </div>
  );
}
