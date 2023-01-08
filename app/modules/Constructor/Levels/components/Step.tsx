import React, { Fragment, ReactElement } from "react";
import { Legend } from "~/components/lib";
import { STEP_TYPES } from "~/constants";
import { useConstructor } from "../..";
import CloseBtn from "../../components/CloseBtn";
import { Step as StepType } from "../types";
import {
  StepHeader,
  StepContent,
  ChooseStyle,
  StyleButton,
  StepContainer,
} from "./lib";

type StepProps = { data: StepType; index: number };

const Step: React.FC<StepProps> = ({ data, index, children }) => {
  const { stepType, id } = data;
  const { activeStepId, removeStepType, setStepType } = useConstructor();

  return (
    <StepContainer className={`${activeStepId !== id && "visuallyHidden"}`}>
      <Legend>{stepType ? stepType : "Choose type"}</Legend>
      <StepHeader>
        {stepType !== "" && (
          <CloseBtn onClickHandler={() => removeStepType(id)} />
        )}
      </StepHeader>

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
          {React.Children.map(children, (child) => {
            if (child === null) {
              return;
            }
            return React.cloneElement(child as ReactElement, {
              state: data,
            });
          })}
        </Fragment>
      )}
    </StepContainer>
  );
};

export default Step;
