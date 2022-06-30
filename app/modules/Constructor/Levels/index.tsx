import { useEffect } from "react";
import type { Step as StepType } from "./types";
import Variants from "./components/Variants";
import MatchingPairs from "./components/MatchingPairs";
import InsertWords from "./components/InsertWords";
import { ScreenContainer } from "../components/lib";
import { useConstructor } from "..";
import Step from "./components/Step";
import QuestionAnswer from "./components/QuestionAnswer";

export default function Levels() {
  const { steps, setStepsReady, currentScreen } = useConstructor();
  useEffect(() => {
    setStepsReady(!steps.find((step: StepType) => step.ready === false));
  }, [steps]);

  return (
    <ScreenContainer screen={currentScreen} target="Steps">
      {steps.map((data: StepType, idx: number) => (
        <Step data={data} index={idx} key={data.id}>
          {data.stepType === "Question" ? <QuestionAnswer /> : null}
          {data.stepType === "Insert" ? <InsertWords /> : null}
          {data.stepType === "Variants" ? <Variants /> : null}
          {data.stepType === "Pairs" ? <MatchingPairs /> : null}
        </Step>
      ))}
    </ScreenContainer>
  );
}
