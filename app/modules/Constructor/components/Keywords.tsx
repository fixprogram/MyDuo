import { useEffect, useState } from "react";
import { isItemInArray } from "~/utils";
import Keyword from "./Keyword";

export default function Keywords({
  answer,
  onSet,
}: {
  answer: string;
  onSet: Function;
}) {
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    onSet(keywords);
  }, [keywords]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {answer.split(" ").map((item: string, idx: number) => {
        if (item.includes(",")) {
          item = item.slice(0, -1);
        }
        return (
          <Keyword
            key={idx}
            onSet={(word: string) =>
              setKeywords((prevArr: string[]) => {
                if (isItemInArray(prevArr, item)) {
                  prevArr.splice(prevArr.indexOf(word), 1);
                  return [...prevArr];
                } else {
                  return [...prevArr, word];
                }
              })
            }
          >
            {item}
          </Keyword>
        );
      })}
    </div>
  );
}
