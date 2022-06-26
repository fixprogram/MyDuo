import React, { ReactElement } from "react";
import { Legend } from "~/components/lib";
import { useConstructor } from "../..";
import CloseBtn from "../../components/CloseBtn";
import { Step } from "../types";
import { StepHeader, StepContent, ChooseStyle, StyleButton } from "./lib";
import Variants from "./Variants";

const STEP_TYPES = ["Question", "Insert", "Variants", "Pairs"];

type StepProps = { data: Step; index: number };

const Step: React.FC<StepProps> = ({ data, index, children }) => {
  const {
    active,
    chapter,
    stepType,
    id,
    number,
    variants,
    text,
    answer,
    question,
  } = data;
  const { removeStepType, setStepType, setQuestion, setAnswer } =
    useConstructor();

  // const Component = stepType;

  return (
    <section className={`${!active && "visuallyHidden"}`}>
      <input type="hidden" name="step" value={index} />
      <input type="hidden" name={`chapter`} value={chapter} />
      <input type="hidden" name={`type${number}`} value={stepType} />
      <Legend>{stepType ? stepType : "Choose type"}</Legend>
      <StepHeader>
        {stepType !== "" && (
          <CloseBtn onClickHandler={() => removeStepType(id)} />
        )}
      </StepHeader>

      <StepContent>
        {stepType === "" ? (
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
        ) : (
          React.Children.map(children, (child) => {
            if (child === null) {
              return;
            }
            return React.cloneElement(child as ReactElement, {
              state: data,
            });
          })
        )}
      </StepContent>
    </section>
  );
};

export default Step;
