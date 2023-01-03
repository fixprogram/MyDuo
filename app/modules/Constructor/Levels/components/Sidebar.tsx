import { useTransition } from "@remix-run/react";
import React from "react";
import { FormButton } from "~/components/lib";
import { useConstructor } from "../..";
import { ConstructorSidebar } from "../../components/lib";
import { SidebarBtn, SidebarList } from "./lib";

const Sidebar: React.FC = ({ children }) => {
  const {
    steps,
    currentScreen,
    chapters,
    changeCurrentScreen,
    stepsReady,
    basicInfoReady,
    setStepActive,
    removeStep,
    addChapter,
    addStep,
  } = useConstructor();

  const transition = useTransition();
  const submitText = transition.state === "submitting" ? "Saving" : "Save";

  const isSubmitActive = stepsReady === true && basicInfoReady === true;
  const isSubmitDisabled =
    stepsReady === false || basicInfoReady === false || submitText !== "Save";

  return (
    <ConstructorSidebar>
      <SidebarList>
        <li>
          <SidebarBtn
            type="button"
            onClick={() => {
              changeCurrentScreen("Skill");
            }}
          >
            Skill Info
          </SidebarBtn>
        </li>
        {chapters.map((chapter) => (
          <li key={`chapter-${chapter}`}>
            <SidebarBtn
              type="button"
              onClick={() => {
                changeCurrentScreen("Steps");
                setStepActive(steps[steps.length - 1].id);
              }}
            >
              Chapter {chapter}
            </SidebarBtn>
            <ul>
              {steps.map(
                (stepsItem, index) =>
                  stepsItem.chapter === chapter && (
                    <li key={stepsItem.id}>
                      <button
                        type="button"
                        onClick={() => {
                          changeCurrentScreen("Steps");
                          setStepActive(stepsItem.id);
                        }}
                        style={{
                          border: stepsItem.active ? "1px solid" : "none",
                        }}
                      >
                        Step {index + 1}
                      </button>
                      {index > 0 ? (
                        <button
                          type="button"
                          onClick={() => {
                            removeStep(stepsItem.id);
                          }}
                        >
                          Remove step
                        </button>
                      ) : null}
                    </li>
                  )
              )}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    addStep(chapter);
                    if (currentScreen !== "Steps") {
                      changeCurrentScreen("Steps");
                    }
                  }}
                >
                  Add step
                </button>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => {
                if (currentScreen !== "Steps") {
                  changeCurrentScreen("Steps");
                }
                addChapter();
              }}
            >
              Add chapter
            </button>
          </li>
        ))}
      </SidebarList>

      {children}

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
