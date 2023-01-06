import React, { Fragment, ReactElement } from "react";
import { Legend } from "~/components/lib";
import { STEP_TYPES } from "~/constants";
import { useConstructor } from "../..";
import CloseBtn from "../../components/CloseBtn";
import { Step as StepType } from "../types";
import { StepHeader, StepContent, ChooseStyle, StyleButton } from "./lib";

type StepProps = { data: StepType; index: number };

const Step: React.FC<StepProps> = ({ data, index, children }) => {
  const { parentLessonId, stepType, id, number } = data;
  const { activeStepId, removeStepType, setStepType } = useConstructor();

  return (
    <section className={`${activeStepId !== id && "visuallyHidden"}`}>
      <input type="hidden" name="step" value={index} />
      <input type="hidden" name={`parentLessonId`} value={parentLessonId} />
      <input type="hidden" name={`type${number}`} value={stepType} />
      <Legend>{stepType ? stepType : "Choose type"}</Legend>
      <StepHeader>
        {stepType !== "" && (
          <CloseBtn onClickHandler={() => removeStepType(id)} />
        )}
      </StepHeader>

      {/* <StepContent> */}
      {stepType === "" ? (
        <StepContent>
          <ChooseStyle>
            {STEP_TYPES.map((type, idx) => (
              <StyleButton
                type="button"
                onClick={() => setStepType(type, id)}
                key={idx}
              >
                {type}
              </StyleButton>
            ))}
          </ChooseStyle>
        </StepContent>
      ) : (
        <Fragment>
          {/* <StepContent> */}
          {React.Children.map(children, (child) => {
            if (child === null) {
              return;
            }
            return React.cloneElement(child as ReactElement, {
              state: data,
            });
          })}
          {/* </StepContent>
          <h2>Step settings</h2> */}
        </Fragment>
      )}
      {/* </StepContent> */}
    </section>
  );
};

export default Step;
