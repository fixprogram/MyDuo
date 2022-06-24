import { useTransition } from "@remix-run/react";
import React, { Fragment } from "react";
import { FormButton } from "~/components/lib";
import { useConstructor } from "../..";

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
    <Fragment>
      <h2>Sidebar</h2>
      <ul style={{ marginBottom: "auto" }}>
        <li>
          <button
            type="button"
            onClick={() => {
              changeCurrentScreen("Topic");
            }}
            style={{
              color: "#3c3c3c",
              display: "block",
              fontSize: 16,
              fontWeight: 700,
              overflow: "hidden",
              padding: "15px 20px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Topic Info
          </button>
        </li>
        {chapters.map((chapter) => (
          <li key={`chapter-${chapter}`}>
            <button
              type="button"
              onClick={() => {
                changeCurrentScreen("Steps");
                setStepActive(steps[steps.length - 1].id);
              }}
              style={{
                color: "#3c3c3c",
                display: "block",
                fontSize: 16,
                fontWeight: 700,
                overflow: "hidden",
                padding: "15px 20px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Chapter {chapter}
            </button>
            <ul>
              {steps.map(
                (stepsItem: any) =>
                  stepsItem.chapter === chapter && (
                    <li key={stepsItem.id}>
                      <button
                        type="button"
                        onClick={() => {
                          changeCurrentScreen("Steps");
                          setStepActive(stepsItem.id);
                        }}
                      >
                        Step {stepsItem.number + 1}
                      </button>
                      {stepsItem.number > 0 ? (
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
      </ul>
      {children}

      <FormButton
        type="submit"
        active={isSubmitActive}
        disabled={isSubmitDisabled}
      >
        {submitText}
      </FormButton>
    </Fragment>
  );
};

export default Sidebar;
