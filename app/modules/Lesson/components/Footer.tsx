import { useTransition } from "@remix-run/react";
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
  stateRight,
  stateWrong,
  isResult,
  answer,
  disabled,
  onContinue,
  setValue,
}: {
  stateRight: boolean;
  stateWrong: boolean;
  isResult: boolean;
  answer: string[];
  disabled: boolean;
  onContinue: Function;
  setValue: Function;
}) {
  const transition = useTransition();

  const buttonText =
    transition.state === "submitting"
      ? "Saving..."
      : transition.state === "loading"
      ? "Saved!"
      : stateRight
      ? "Next"
      : stateWrong || isResult
      ? "Continue"
      : "Check";
  const buttonDisabled = !disabled;
  return (
    <LessonFooter stateRight={stateRight} stateWrong={stateWrong}>
      <LessonFooterInner>
        <LessonFooterMessage stateRight={stateRight} stateWrong={stateWrong}>
          {stateRight ||
            (stateWrong && (
              <LessonFooterIcon
                stateRight={stateRight}
                stateWrong={stateWrong}
              />
            ))}
          <div style={{ marginLeft: 16, width: "calc(100% - 209px)" }}>
            <LessonFooterTitle>
              {stateWrong ? "Right answer: " : "Great!"}
            </LessonFooterTitle>
            {stateWrong && (
              <LessonFooterText> {answer.join(" ")}</LessonFooterText>
            )}
          </div>
        </LessonFooterMessage>
        <LessonButton
          active={buttonDisabled}
          stateRight={stateRight}
          stateWrong={stateWrong}
          onClick={(e) => {
            if (buttonText === "Saving..." || buttonText === "Saved!") {
              e.preventDefault();
            }
            onContinue();
            if (stateRight || stateWrong) {
              setValue([""]);
            }
          }}
          disabled={buttonText === "Saving..." || buttonText === "Saved!"}
        >
          {buttonText}
        </LessonButton>
      </LessonFooterInner>
    </LessonFooter>
  );
}
