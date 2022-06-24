import React, { ReactElement } from "react";
import { Legend } from "~/components/lib";
import { useConstructor } from "../..";
import CloseBtn from "../../components/CloseBtn";
import ChooseStyleScreen from "./ChooseStyleScreen";
import InsertWords from "./InsertWords";
import { StepHeader, StepContent } from "./lib";
import MatchingPairs from "./MatchingPairs";
import QuestionAnswer from "./QuestionAnswer";
import Variants from "./Variants";

export default function Step({ data, index, children }) {
  const { active, chapter, stepType, id } = data;
  const { removeStepType, setStepType } = useConstructor();

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
        {stepType === "" && (
          <ChooseStyleScreen setStepType={setStepType} id={id} />
        )}

        {React.Children.map(children, (child) => {
          return React.cloneElement(child as ReactElement, {
            initialState: data,
          });
        })}

        {/* {stepType === "Question" ? (
        <QuestionAnswer
          question={question}
          number={number}
          answer={
            typeof answer !== "string" ? answer.join(" ") : answer
          }
          keywords={keywords}
        />
      ) : stepType === "Insert" ? (
        <InsertWords
          text={text}
          number={number}
          answer={
            typeof answer !== "string" ? answer.join(" ") : answer
          }
        />
      ) : stepType === "Variants" ? (
        <Variants
          initialQuestion={question}
          initialVariants={variants}
          number={number}
          answer={answer}
          setAnswer={(answer: string) => setAnswer(answer, number)}
          setReady={(isReady: boolean) => setStepReady(isReady, number)}
          variantsCount={3}
        />
      ) : stepType === "Pairs" ? (
        <MatchingPairs
          number={number}
          answer={answer}
          setAnswer={(answer: string) => setAnswer(answer, number)}
          variantsCount={4}
          setReady={(isReady: boolean) => setStepReady(isReady, number)}
          initialVariants={variants}
        />
      ) : null} */}
      </StepContent>
    </section>
  );
}
