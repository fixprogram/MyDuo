import { useEffect } from "react";
import { Legend } from "~/components/lib";
import type { Step as StepType } from "./types";
import QuestionAnswer from "./components/QuestionAnswer";
import { StepContent, StepHeader } from "./components/lib";
import Variants from "./components/Variants";
import MatchingPairs from "./components/MatchingPairs";
import InsertWords from "./components/InsertWords";
import ChooseStyleScreen from "./components/ChooseStyleScreen";
import { ScreenContainer } from "../components/lib";
import actionCreator, { Action } from "./actions";
import { useConstructor } from "..";
import CloseBtn from "../components/CloseBtn";
import Step from "./components/Step";

export default function Levels({
  // steps,
  setReady,
  screen,
}: // dispatch,
{
  // steps: Step[];
  setReady: Function;
  screen: string;
  // dispatch: React.Dispatch<Action>;
}) {
  const { steps, setStepsReady } = useConstructor();
  useEffect(() => {
    setReady(!steps.find((step: StepType) => step.ready === false));
    // }, [steps, setReady]);
  }, [steps, setStepsReady]);

  // const {
  //   setAnswer,
  //   setKeywords,
  //   setStepType,
  //   setStepReady,
  //   removeStepType,
  //   setQuestion,
  // } = actionCreator(dispatch);

  return (
    <ScreenContainer screen={screen} target="Steps">
      {steps.map((data: StepType, idx: number) => (
        <Step data={data} index={idx} key={data.id}>
          <QuestionAnswer />
          <InsertWords />
          <Variants />
          <MatchingPairs />
        </Step>
      ))}
    </ScreenContainer>
  );
}
