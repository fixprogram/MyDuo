import React, { ReactElement } from "react";
import { Legend } from "~/components/lib";
import { useConstructor } from "../..";
import CloseBtn from "../../components/CloseBtn";
import ChooseStyleScreen from "./ChooseStyleScreen";
import { StepHeader, StepContent } from "./lib";

export default function Step({ data, index, children }) {
  const { active, chapter, stepType, id } = data;
  const { removeStepType, setStepType, setQuestion, setAnswer } =
    useConstructor();

  return (
    <section className={`${!active && "visuallyHidden"}`}>
      <input type="hidden" name="step" value={index} />
      <input type="hidden" name={`chapter`} value={chapter} />
      <Legend>{stepType ? stepType : "Choose type"}</Legend>
      <StepHeader>
        {stepType !== "" && (
          <CloseBtn onClickHandler={() => removeStepType(id)} />
        )}
      </StepHeader>

      <StepContent>
        {stepType === "" ? (
          <ChooseStyleScreen setStepType={setStepType} id={id} />
        ) : (
          React.Children.map(children, (child) => {
            return React.cloneElement(child as ReactElement, {
              initialState: data,
              setQuestion,
              setAnswer,
            });
          })
        )}
      </StepContent>
    </section>
  );
}
