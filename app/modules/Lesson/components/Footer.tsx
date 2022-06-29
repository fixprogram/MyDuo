import { useTransition } from "@remix-run/react";
import { useSkill } from "..";
import {
  LessonFooter,
  LessonFooterInner,
  LessonFooterMessage,
  LessonFooterIcon,
  LessonFooterTitle,
  LessonFooterText,
  LessonButton,
} from "./lib";

export default function Footer({
  checkAnswer = () => {},
}: {
  checkAnswer?: Function;
}) {
  const transition = useTransition();
  const { topicState, content, continueTopic, setStateWrong, setDifficulty } =
    useSkill();

  const { answer, difficulty } = content;
  const { status, buttonDisabled } = topicState;

  const buttonText =
    transition.state === "submitting"
      ? "Saving..."
      : transition.state === "loading"
      ? "Saved!"
      : status === "right"
      ? "Next"
      : status !== "idle"
      ? "Continue"
      : "Check";

  const handleContinue = () => {
    if (
      buttonText === "Saving..." ||
      buttonText === "Saved!" ||
      topicState.buttonDisabled
    ) {
      return;
    }
    if (status === "idle") {
      return checkAnswer();
    }
    continueTopic();
  };

  const handleSkip = () => {
    setStateWrong();
  };

  return (
    <LessonFooter status={status}>
      <LessonFooterInner>
        <LessonButton
          onClick={handleSkip}
          skip={true}
          hidden={status !== "idle" || content.stepType === "Pairs"}
        >
          Skip
        </LessonButton>
        <LessonButton
          skip={true}
          hidden={status !== "idle" || content.stepType === "Pairs"}
          style={{
            borderWidth: 0,
            width: "auto",
          }}
          onClick={() => setDifficulty(difficulty === "easy" ? "hard" : "easy")}
        >
          Make {difficulty === "easy" ? "harder" : "easier"}
        </LessonButton>

        <LessonFooterMessage status={status}>
          {(status === "right" || status === "wrong") && (
            <LessonFooterIcon status={status} />
          )}
          <div style={{ marginLeft: 16, width: "calc(100% - 209px)" }}>
            <LessonFooterTitle>
              {status === "wrong" ? "Right answer: " : "Great!"}
            </LessonFooterTitle>
            <LessonFooterText> {answer.join(" ")}</LessonFooterText>
          </div>
        </LessonFooterMessage>

        <LessonButton
          active={!buttonDisabled}
          stateRight={status === "right"}
          stateWrong={status === "wrong"}
          onClick={handleContinue}
          disabled={
            buttonText === "Saving..." ||
            buttonText === "Saved!" ||
            buttonDisabled
          }
          style={{
            marginLeft:
              status === "results" || content.stepType === "Pairs" ? "auto" : 0,
          }}
        >
          {buttonText}
        </LessonButton>
      </LessonFooterInner>
    </LessonFooter>
  );
}
