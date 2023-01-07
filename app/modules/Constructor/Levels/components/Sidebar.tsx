import { useTransition } from "@remix-run/react";
import { FormButton } from "~/components/lib";
import { useConstructor } from "../..";
import { ConstructorSidebar } from "../../components/lib";
import { SidebarBtn, SidebarList } from "./lib";

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

  const transition = useTransition();
  const submitText = transition.state === "submitting" ? "Saving" : "Save";

  const isSubmitActive = stepsReady === true && basicInfoReady === true;
  const isSubmitDisabled =
    stepsReady === false || basicInfoReady === false || submitText !== "Save";

  const lessonSteps = steps.filter(
    (step) => step.parentLessonId === activeLessonId
  );

  return (
    <ConstructorSidebar>
      <SidebarList>
        <li>
          <SidebarBtn
            type="button"
            onClick={() => {
              changeCurrentScreen("Skill");
            }}
            isActive={currentScreen === "Skill"}
          >
            Skill Info
          </SidebarBtn>
        </li>
        {lessons.map((lesson, idx) => (
          <li key={lesson.id}>
            <SidebarBtn
              type="button"
              onClick={() => {
                changeCurrentScreen("Steps");
                setLessonActive(lesson.id);
              }}
              isActive={
                lesson.id === activeLessonId && currentScreen === "Steps"
              }
            >
              Lesson {idx + 1}
            </SidebarBtn>
          </li>
        ))}

        <button
          type="button"
          onClick={() => {
            if (currentScreen !== "Steps") {
              changeCurrentScreen("Steps");
            }
            addLesson();
          }}
        >
          Add lesson
        </button>
      </SidebarList>

      <SidebarList>
        {lessonSteps.map((step, index) => (
          <li key={step.id} style={{ display: "flex" }}>
            <button
              type="button"
              onClick={() => {
                changeCurrentScreen("Steps");
                setStepActive(step.id);
              }}
              style={{
                color:
                  step.id === activeStepId && currentScreen === "Steps"
                    ? "#1cb0f6"
                    : "#3c3c3c",
              }}
            >
              Step {index + 1}
            </button>
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
          </li>
        ))}
        <button
          type="button"
          onClick={() => {
            addStep();
            if (currentScreen !== "Steps") {
              changeCurrentScreen("Steps");
            }
          }}
        >
          Add step
        </button>
      </SidebarList>

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
