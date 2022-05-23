import { useEffect, useRef, useState } from "react";
import { Form, useTransition } from "remix";
import {
  LessonProgress,
  LessonProgressInner,
  LessonTitle,
  LessonBlockMenu,
  LessonBlockMenuTriangle,
  LessonBlockMenuTriangleContent,
  LessonBlockInner,
  LessonBlockLink,
  LessonBlockButton,
  LessonBlock,
  LessonsContainer,
} from "./lib";
import Bin from "~/styles/bin.svg";
import useOnClickOutside from "~/hooks/useOnClickOutside";
import { Topic } from "@prisma/client";

type LessonItem = Topic & {
  link: string;
};

export default function LessonItem({
  id,
  title,
  currentChapter,
  chapters,
  link,
}: LessonItem) {
  const [isOpened, setIsOpened] = useState(false);
  const transition = useTransition();
  const isDisabled = transition.state !== "idle";
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsOpened(false));

  useEffect(() => {
    if (transition.state === "loading") {
      setIsOpened(false);
    }
  }, [transition.state]);

  return (
    <LessonsContainer>
      <LessonBlock ref={ref}>
        <button
          key={id}
          aria-labelledby={title}
          onClick={() => {
            if (isOpened) {
              return setIsOpened(false);
            }
            return setIsOpened(true);
          }}
        >
          <LessonProgress exp={((currentChapter / chapters) * 100).toString()}>
            <LessonProgressInner>{`${
              (currentChapter / chapters) * 100
            }%`}</LessonProgressInner>
          </LessonProgress>
          <LessonTitle>{title}</LessonTitle>
        </button>
        <LessonBlockMenu isOpened={isOpened}>
          <LessonBlockMenuTriangle>
            <LessonBlockMenuTriangleContent />
          </LessonBlockMenuTriangle>
          <LessonBlockInner>
            <div style={{ display: "flex" }}>
              <LessonBlockLink to={link}>Edit</LessonBlockLink>
              <Form method="post">
                <input type="hidden" name="lessonId" value={id} />
                <LessonBlockButton type="submit" disabled={isDisabled}>
                  <img src={Bin} alt="delete" width={20} height={20} />
                </LessonBlockButton>
              </Form>
            </div>
            {/* If the topic is 100% done, then we just repeat all lessons from it */}
            {/* Otherwise we study lessons only from next chapter */}
            <LessonBlockLink
              to={`/skill/${title}/${
                currentChapter / chapters === 1
                  ? "practice"
                  : currentChapter + 1
              }`}
            >
              Start +16 XP
            </LessonBlockLink>
          </LessonBlockInner>
        </LessonBlockMenu>
      </LessonBlock>
    </LessonsContainer>
  );
}
