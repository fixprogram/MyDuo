import { Variant } from "@prisma/client";
import { Fragment, SyntheticEvent, useEffect, useState } from "react";
import { VariantItemNumber } from "~/modules/Constructor/Levels/components/lib";
import VariantsScreen from "~/modules/Constructor/Levels/components/VariantsScreen";
import { useSkill } from "..";
import { Lesson } from "./Lesson";
import { LessonTitle, VariantItem } from "./lib";

export default function VariantsPractice({}: // userAnswer,
// // content,
// question,
// variants,
// setUserAnswer,
{
  // userAnswer: string;
  // // content: Lesson;
  // question: string;
  // variants: Variant[];
  // setUserAnswer: Function;
}) {
  // const { definition, question, variants } = content;

  const {
    content,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
    topicState,
  } = useSkill();
  const { question, variants, stepType } = content;

  // const [userAnswer, setUserAnswer] = useState("");

  // useEffect(() => {
  //   if (!topicState.formDisabled) {
  //     setUserAnswer("");
  //   }
  // }, [topicState.formDisabled]);

  // useEffect(() => {
  //   if (userAnswer.length) {
  //     return setCheckDisabled(false);
  //   }
  //   return setCheckDisabled(true);
  // }, [userAnswer]);

  const checkAnswer = (userAnswer: string) => {
    if (userAnswer === content.answer[0]) {
      return setStateRight();
    }
    return setStateWrong();
  };

  const handleOnKeyDown = (e: SyntheticEvent, setUserAnswer: Function) => {
    if (e.key === "1") {
      return setUserAnswer(variants[0].value);
    }
    if (e.key === "2") {
      return setUserAnswer(variants[1].value);
    }
    if (e.key === "3") {
      return setUserAnswer(variants[2].value);
    }
  };

  return stepType === "Variants" ? (
    <Lesson
      // userAnswer={userAnswer}
      // setUserAnswer={setUserAnswer}
      disabledCondition={(userAnswer: string) => userAnswer.length}
      checkAnswer={checkAnswer}
      keyDownHandle={handleOnKeyDown}
    >
      <VariantsScreen question={question} variants={variants} />
    </Lesson>
  ) : null;
}

// return content.stepType === "Variants" ? (
//   <Lesson
//     userAnswer={userAnswer}
//     setUserAnswer={setUserAnswer}
//     checkAnswer={checkAnswer}
//     keyDownHandle={handleOnKeyDown}
//   >
//     <VariantsPractice question={question} variants={variants} />
//   </Lesson>
// ) : null;
