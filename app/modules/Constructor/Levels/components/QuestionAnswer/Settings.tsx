import { TextareaLabel, LabelText } from "~/components/lib";
import { useConstructor } from "~/modules/Constructor";
import Keywords from "~/modules/Constructor/components/Keywords";
import { isItemInArray } from "~/utils";
import { StepOptions } from "../../types";
import { WordsItem, WordsList } from "./lib";

export default function Settings({
  options,
  answer,
}: {
  options: StepOptions;
  answer: string;
}) {
  const { setStepOptions } = useConstructor();

  const { keywords } = options as { keywords: string[] };

  // console.log({ keywords });

  function setKeywords(keywords: string[]) {
    setStepOptions({ ...options, keywords });
  }

  function onWordHandler(word: string) {
    const newKeywords = keywords;
    if (isItemInArray(keywords, word)) {
      newKeywords.splice(newKeywords.indexOf(word), 1);
      return setKeywords(newKeywords);
    }
    return setKeywords([...newKeywords, word]);
  }

  const isEditing = Boolean(Array.isArray(answer));

  return (
    <TextareaLabel htmlFor={`keywords`}>
      {/* <LabelText>Choose keywords</LabelText> */}
      {/* <Keywords
        answer={answer}
        initialKeywords={keywords}
        onSet={setKeywords}
      /> */}
      <WordsList>
        <li>
          <b style={{ display: "block", padding: "4px 0" }}>
            Choose words to be enough for answer:
          </b>
        </li>

        {!isEditing &&
          answer.split(" ").map((answerItem: string, idx: number) => {
            if (answerItem.includes(",")) {
              answerItem = answerItem.slice(0, -1);
            }
            return (
              <WordsItem
                key={idx}
                onClick={() => onWordHandler(answerItem)}
                isActive={isItemInArray(keywords, answerItem)}
                //   initiallyActive={!!keywords.find((keyword) => keyword === answerItem)}
              >
                {answerItem}
              </WordsItem>
            );
          })}
      </WordsList>
    </TextareaLabel>
  );
}
