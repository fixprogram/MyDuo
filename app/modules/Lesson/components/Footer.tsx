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
  ChangeDifficultyBtn,
} from "./lib";
import Easier from "~/styles/easier.svg";
import Harder from "~/styles/harder.svg";
import { doesItemContainSign } from "~/utils";

export default function Footer({
  checkAnswer = () => {},
}: {
  checkAnswer?: Function;
}) {
  const transition = useTransition();
  const { skillState, content, continueSkill, setStateWrong, setDifficulty } =
    useSkill();

  const { answer, text, difficulty } = content;
  const { status, buttonDisabled } = skillState;

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

  const getFooterText = (text: string | null, answer: string[]) => {
    if (text && answer.length) {
      if (answer.length === 1) {
        return doesItemContainSign(text.split(" ")[Number(answer[0])]).newItem;
      }
      return text;
    }
    return answer.join(" ");
  };

  const handleContinue = () => {
    if (
      buttonText === "Saving..." ||
      buttonText === "Saved!" ||
      skillState.buttonDisabled
    ) {
      return;
    }
    if (status === "idle") {
      return checkAnswer();
    }
    continueSkill();
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

        {difficulty && status === "idle" && (
          <ChangeDifficultyBtn
            onClick={() =>
              setDifficulty(difficulty === "easy" ? "hard" : "easy")
            }
          >
            <img
              src={difficulty === "easy" ? Harder : Easier}
              alt={difficulty}
              height={19}
              width={27}
              style={{ marginRight: 10 }}
            />
            <p>Make {difficulty === "easy" ? "harder" : "easier"}</p>
          </ChangeDifficultyBtn>
        )}

        <LessonFooterMessage status={status}>
          {(status === "right" || status === "wrong") && (
            <LessonFooterIcon status={status} />
          )}
          <div style={{ marginLeft: 16, width: "calc(100% - 209px)" }}>
            <LessonFooterTitle>
              {status === "wrong" ? "Right answer: " : "Great!"}
            </LessonFooterTitle>
            {status === "wrong" && (
              <LessonFooterText>{getFooterText(text, answer)}</LessonFooterText>
            )}
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
