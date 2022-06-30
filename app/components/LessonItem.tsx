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
import { Skill } from "@prisma/client";

type LessonItem = Skill & {
  editLink: string;
};

export default function LessonItem({
  id,
  title,
  currentChapter,
  chapters,
  editLink,
}: LessonItem) {
  const [isOpened, setIsOpened] = useState(false);
  const transition = useTransition();
  const ref = useRef(null);

  useEffect(() => {
    if (transition.state === "loading") {
      setIsOpened(false);
    }
  }, [transition.state]);
  useOnClickOutside(ref, () => setIsOpened(false));

  const isDisabled = transition.state !== "idle";
  const exp = ((currentChapter / chapters) * 100).toString();
  const skillLink = `/skill/${title}/${
    currentChapter / chapters === 1 ? "practice" : currentChapter + 1
  }`;

  function toggleMenu() {
    setIsOpened(!isOpened);
  }

  return (
    <LessonsContainer>
      <LessonBlock ref={ref}>
        <button key={id} aria-labelledby={title} onClick={toggleMenu}>
          <LessonProgress exp={exp}>
            <LessonProgressInner />
          </LessonProgress>
          <LessonTitle>{title}</LessonTitle>
        </button>
        <LessonBlockMenu isOpened={isOpened}>
          <LessonBlockMenuTriangle>
            <LessonBlockMenuTriangleContent />
          </LessonBlockMenuTriangle>
          <LessonBlockInner>
            <div style={{ display: "flex" }}>
              <LessonBlockLink to={editLink}>Edit</LessonBlockLink>
              <Form method="post">
                <input type="hidden" name="lessonId" value={id} />
                <LessonBlockButton
                  type="submit"
                  disabled={isDisabled}
                  title="Delete skill"
                >
                  <img src={Bin} alt="delete" width={20} height={20} />
                </LessonBlockButton>
              </Form>
            </div>
            {/* If the skill is 100% done, then we just repeat all lessons from it */}
            {/* Otherwise we study lessons only from next chapter */}
            <LessonBlockLink to={skillLink}>Start +16 XP</LessonBlockLink>
          </LessonBlockInner>
        </LessonBlockMenu>
      </LessonBlock>
    </LessonsContainer>
  );
}
