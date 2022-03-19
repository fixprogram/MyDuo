import { useEffect, useState } from "react";
import Keyword from "./Keyword";

export default function Keywords({ answer, onSet }) {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    onSet(keywords);
  }, [keywords]);

  return (
    <div>
      {answer.split(" ").map((item, idx) => {
        if (item.includes(",")) {
          item = item.slice(0, -1);
        }
        return (
          <Keyword
            key={idx}
            onSet={(word: any) =>
              setKeywords((prevArr) => {
                console.log(prevArr);
                if (prevArr?.find((word) => word === item)) {
                  prevArr.splice(prevArr.indexOf(word), 1);
                  return prevArr;
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
