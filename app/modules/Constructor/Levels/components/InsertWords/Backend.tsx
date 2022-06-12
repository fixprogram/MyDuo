import { isItemInArray } from "~/utils";

export default function Backend({
  showText,
  setShowText,
  setChooseVariants,
  isChooseVariants,
  answer,
  words,
  setWords,
}) {
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
      {answer.split(" ").map((item, idx) => {
        return (
          <span
            style={{
              marginRight: 3,
              border: words.find((word) => word === item)
                ? "1px solid green"
                : "none",
            }}
            key={idx}
            onClick={() => {
              setWords(() => {
                if (isItemInArray(words, item)) {
                  words.splice(words.indexOf(item), 1);
                  return [...words];
                }

                return [...words, item];
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
