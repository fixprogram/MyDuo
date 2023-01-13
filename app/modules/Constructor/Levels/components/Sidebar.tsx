import { useFetcher } from "@remix-run/react";
import { Fragment } from "react";
import { FormButton } from "~/components/lib";
import { useScrollRefs } from "~/hooks/useScrollRefs";
import { useConstructor } from "../..";
import { ConstructorSidebar } from "../../components/lib";
import {
  SidebarBtn,
  SidebarBtnAdd,
  SidebarList,
  SidebarListItem,
  SidebarStepsButton,
  SidebarStepsList,
  SidebarStepsListItem,
} from "./lib";

const Sidebar = () => {
  const {
    steps,
    currentScreen,
    lessons,
    stepsReady,
    basicInfoReady,
    activeLessonId,
    activeStepId,
    changeCurrentScreen,
    setStepActive,
    setLessonActive,
    removeStep,
    addLesson,
    addStep,
  } = useConstructor();

  const fetcher = useFetcher();
  const submitText = fetcher.state === "submitting" ? "Saving" : "Save";

  const isSubmitActive = stepsReady === true && basicInfoReady === true;
  const isSubmitDisabled =
    stepsReady === false || basicInfoReady === false || submitText !== "Save";

  const lessonSteps = steps.filter(
    (step) => step.parentLessonId === activeLessonId
  );

  const { itemsRefs: lessonsRefs, elementRef: addLessonRef } = useScrollRefs(
    lessons.length
  );

  const { itemsRefs: stepsRefs, elementRef: addStepRef } = useScrollRefs(
    lessons.length
  );

  function onLessonClick(id: string, idx: number) {
    changeCurrentScreen("Steps");
    setLessonActive(id);

    lessonsRefs.current[idx]?.scrollIntoView();
  }

  function onStepClick(id: string, idx: number) {
    changeCurrentScreen("Steps");
    setStepActive(id);

    stepsRefs.current[idx]?.scrollIntoView();
  }

  return (
    <ConstructorSidebar>
      <SidebarList>
        <SidebarListItem>
          <SidebarBtn
            type="button"
            onClick={() => {
              changeCurrentScreen("Skill");
            }}
            isActive={currentScreen === "Skill"}
          >
            Skill Info
          </SidebarBtn>
        </SidebarListItem>
        {lessons.map((lesson, index) => (
          <SidebarListItem key={lesson.id}>
            <SidebarBtn
              type="button"
              onClick={() => onLessonClick(lesson.id, index)}
              isActive={
                lesson.id === activeLessonId && currentScreen === "Steps"
              }
              ref={(el) => (lessonsRefs.current[index] = el)}
            >
              Lesson {index + 1}
            </SidebarBtn>
          </SidebarListItem>
        ))}

        <SidebarBtnAdd
          type="button"
          onClick={() => {
            if (currentScreen !== "Steps") {
              changeCurrentScreen("Steps");
            }
            addLesson();
          }}
          ref={addLessonRef}
        >
          Add lesson
        </SidebarBtnAdd>
      </SidebarList>

      <SidebarStepsList>
        {lessonSteps.map((step, index) => (
          <SidebarStepsListItem key={step.id}>
            <SidebarStepsButton
              type="button"
              onClick={() => onStepClick(step.id, index)}
              isActive={step.id === activeStepId && currentScreen === "Steps"}
              ref={(el) => (stepsRefs.current[index] = el)}
            >
              Step {index + 1}
            </SidebarStepsButton>
            {lessonSteps.length > 1 && step.id === activeStepId ? (
              <button
                type="button"
                onClick={() => {
                  removeStep();
                }}
              >
                x
              </button>
            ) : null}
            {step.id === activeStepId && (
              <SidebarBtnAdd
                type="button"
                onClick={() => {
                  addStep();
                  if (currentScreen !== "Steps") {
                    changeCurrentScreen("Steps");
                  }
                }}
                ref={addStepRef}
              >
                +
              </SidebarBtnAdd>
            )}
          </SidebarStepsListItem>
        ))}
      </SidebarStepsList>

      <FormButton
        type="submit"
        active={isSubmitActive}
        disabled={isSubmitDisabled}
      >
        {submitText}
      </FormButton>
    </ConstructorSidebar>
  );
};

export default Sidebar;
