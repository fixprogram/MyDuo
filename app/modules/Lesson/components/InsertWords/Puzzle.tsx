import { VariantItem } from "../lib";

export default function Puzzle({
  contentAnswer,
  values,
  setValues,
}: {
  contentAnswer: string[];
  values: string[];
  setValues: Function;
}) {
  return (
    <div style={{ width: "100%" }}>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: "30px 0 0",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
        }}
      >
        <li style={{ marginLeft: "auto" }}></li>

        {contentAnswer.map((answer, idx: number) => (
          <li
            key={idx}
            style={{
              position: !!values.find((value) => value === answer)
                ? "absolute"
                : "relative",
              margin: "0 16px 8px 0",
              left: !!values.find((value) => value === answer) ? "-10000px" : 0,
            }}
          >
            <VariantItem
              type="button"
              isFocused={false}
              onClick={() =>
                setValues((prevArray: string[]) => {
                  const empty = prevArray.find((item) => {
                    if (item === " " || item.length === 0 || !!item === false) {
                      return item;
                    }
                  });
                  //   if (!empty) {
                  //     return [...prevArray, answer];
                  //   }
                  const inx = prevArray.indexOf(empty as string);
                  if (inx.toString() && inx !== -1) {
                    const newArr = prevArray;
                    newArr[inx] = answer;
                    return [...newArr];
                  }
                  return [...prevArray, answer];
                })
              }
              disabled={!!values.find((value) => value === answer)?.length}
            >
              {answer}
            </VariantItem>
          </li>
        ))}
      </ul>
    </div>
  );
}
