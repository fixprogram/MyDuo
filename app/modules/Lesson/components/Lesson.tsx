import React, { ReactElement, useEffect, useState } from "react";
import { useFocus } from "~/utils";
import { useSkill } from "..";
import Footer from "./Footer";
import { LessonBody } from "./lib";

type LessonProps = {
  initialValue?: string | string[];
  checkAnswer: Function;
  disabledCondition: Function | null;
  keyDownHandle?: (event: React.KeyboardEvent, callback?: Function) => void;
};

export const Lesson: React.FC<LessonProps> = ({
  initialValue = "",
  disabledCondition,
  checkAnswer,
  keyDownHandle,
  children,
  ...props
}) => {
  const { topicState, continueTopic, setCheckDisabled } = useSkill();
  const { status, formDisabled, buttonDisabled } = topicState;
  const [userAnswer, setUserAnswer] = useState(initialValue);

  const lessonRef = useFocus<HTMLDivElement>(status);

  useEffect(() => {
    if (disabledCondition === null) {
      return;
    }
    if (disabledCondition(userAnswer)) {
      return setCheckDisabled(false);
    }
    return setCheckDisabled(true);
  }, [userAnswer]);

  const onKeyDownHandle = (event: React.KeyboardEvent) => {
    if (keyDownHandle) {
      keyDownHandle(event, setUserAnswer);
    }
    if (event.key !== "Enter" || buttonDisabled) {
      return;
    }
    event.preventDefault();

    if (status === "idle") {
      return checkAnswer(userAnswer);
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
          return React.cloneElement(child as ReactElement, {
            userAnswer,
            setUserAnswer,
            keyDownCheck: onKeyDownHandle,
            checkAnswer: (uAnswer: string | string[]) =>
              checkAnswer(uAnswer, setUserAnswer),
            ...props,
          });
        })}
      </LessonBody>
      <Footer checkAnswer={() => checkAnswer(userAnswer)} />
    </div>
  );
};
