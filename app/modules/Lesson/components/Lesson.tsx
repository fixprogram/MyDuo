import React, { useRef, useEffect, SyntheticEvent } from "react";
import { useFocus } from "~/utils";
import { useSkill } from "..";
import Footer from "./Footer";
import { LessonBody } from "./lib";

type LessonProps = {
  initialValue?: string | string[];
  userAnswer?: string | string[];
  setUserAnswer?: Function;
  checkAnswer?: () => void;
  keyDownHandle?: (event: SyntheticEvent) => void;
};

export const Lesson: React.FC<LessonProps> = ({
  initialValue = "",
  userAnswer,
  setUserAnswer,
  checkAnswer,
  keyDownHandle,
  children,
  ...props
}) => {
  const { topicState, continueTopic } = useSkill();
  const { status, formDisabled, buttonDisabled } = topicState;

  const lessonRef = useFocus(status);
  // const lessonRef = useRef(null);
  // useEffect(() => {
  //   // console.log("Before: ", document.activeElement);
  //   if (!document.activeElement) {
  //     lessonRef?.current?.focus();
  //   }
  // }, [topicState.formDisabled]);

  const onKeyDownHandle = (event: SyntheticEvent) => {
    if (keyDownHandle) {
      keyDownHandle(event);
    }
    if (event.key !== "Enter" || buttonDisabled) {
      return;
    }
    event.preventDefault();

    if (status === "idle" && checkAnswer) {
      return checkAnswer();
    }

    return continueTopic();
  };

  useEffect(() => {
    if (!formDisabled && setUserAnswer) {
      setUserAnswer(initialValue);
    }
  }, [formDisabled]);

  return (
    <div
      tabIndex={0}
      onKeyDown={onKeyDownHandle}
      ref={lessonRef}
      style={{
        display: "flex",
        flexDirection: "column",
        outline: "none",
        flexGrow: 1,
      }}
    >
      <LessonBody>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            userAnswer,
            setUserAnswer,
            keyDownCheck: onKeyDownHandle,
            ...props,
          });
        })}
      </LessonBody>
      <Footer checkAnswer={checkAnswer} />
    </div>
  );
};
