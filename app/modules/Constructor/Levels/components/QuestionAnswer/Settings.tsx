import { useConstructor } from "~/modules/Constructor";
import { SettingsContainer } from "~/modules/Constructor/components/lib";
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
    <SettingsContainer>
      <WordsList>
        <li>
          <b style={{ display: "block", padding: "4px 0", marginBottom: 3 }}>
            Choose words to be enough for answer:
          </b>
        </li>

        {!isEditing &&
          answer.split(" ").map((answerItem: string, idx: number) => {
            if (answerItem.includes(",")) {
              answerItem = answerItem.slice(0, -1);
            }
            if (!answerItem.length) {
              return;
            }
            console.log({ keywords, answerItem });
            return (
              <WordsItem
                key={idx}
                onClick={() => onWordHandler(answerItem)}
                isActive={isItemInArray(keywords, answerItem)}
              >
                {answerItem}
              </WordsItem>
            );
          })}
      </WordsList>
    </SettingsContainer>
  );
}
