import { Variant } from "@prisma/client";
import { Fragment, useEffect, useState } from "react";
import { useSkill } from "..";
import { Lesson } from "./Lesson";
import { LessonTitle, VariantItem } from "./lib";
import PairsScreen from "./PairsScreen";

export default function Pairs({}: // answer,
// variants,
// checkAnswer,
// setUserAnswer,
{
  // answer: string[];
  // variants: Variant[];
  // checkAnswer: Function;
  // setUserAnswer: Function;
}) {
  // const [activeIdx, setActiveIdx] = useState<number>(-1);

  // const isDisabled = (idx: number) => {
  //   return answer.find((answerItem) =>
  //     answerItem.includes((idx + 1).toString())
  //   );
  //   // return false;
  // };

  const { content, setStateRight, updateState, topicState } = useSkill();
  const { answer, variants } = content;
  const initialValue = [""];
  const [userAnswer, setUserAnswer] = useState(initialValue);

  const checkAnswer = (uAns: string) => {
    let idx = 0;
    if (
      answer.find((answerItem: string, id: number) => {
        idx = id;
        return (
          answerItem === uAns ||
          answerItem.split("").reverse().join("") === uAns
        );
      })
    ) {
      const newContent = content;
      newContent.answer.splice(idx, 1);
      setUserAnswer((prevUserAnswer) => [...prevUserAnswer, uAns]);
      return updateState({ content: newContent });
    } else {
      setUserAnswer((prevUserAnswer) => [...prevUserAnswer]);
      return updateState({
        topicState: { ...topicState, buttonDisabled: true },
      });
    }
  };
  useEffect(() => {
    if (answer.length === 0) {
      return setStateRight();
    }
  }, [userAnswer]);

  return content.stepType === "Pairs" ? (
    <Lesson initialValue={initialValue} setUserAnswer={setUserAnswer}>
      <PairsScreen
        answer={userAnswer}
        variants={variants}
        checkAnswer={checkAnswer}
      />
    </Lesson>
  ) : null;
}
