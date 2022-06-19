import React, {
  useRef,
  useState,
  useEffect,
  EventHandler,
  SyntheticEvent,
} from "react";
import { useSkill } from "..";
import Footer from "./Footer";
import { LessonBody } from "./lib";

type LessonProps = {
  userAnswer: string | string[];
  setUserAnswer: () => void;
  checkAnswer: () => void;
  keyDownHandle?: (event: SyntheticEvent) => void;
};

export const Lesson: React.FC<LessonProps> = ({
  userAnswer,
  setUserAnswer,
  checkAnswer,
  keyDownHandle,
  children,
  ...props
}) => {
  const { topicState, continueTopic } = useSkill();

  const lessonRef = useRef(null);
  useEffect(() => {
    lessonRef?.current?.focus();
  }, [topicState.formDisabled]);

  const onKeyDownHandle = (event: SyntheticEvent) => {
    if (keyDownHandle) {
      keyDownHandle(event);
    }
    // if (event.key === "Enter") {
    // }
    if (event.key !== "Enter" || topicState.buttonDisabled) {
      return;
    }
    event.preventDefault();

    if (topicState.status === "idle") {
      return checkAnswer();
    }

    return continueTopic();
  };

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
            ...props,
          });
        })}
      </LessonBody>
      <Footer checkAnswer={checkAnswer} />
    </div>
  );
};
