import { ChooseStyle, StyleButton } from "./lib";

export default function ChooseStyleScreen({ setStepType, id }) {
  return (
    <ChooseStyle>
      <StyleButton type="button" onClick={() => setStepType("Question", id)}>
        Question / Answer
      </StyleButton>
      <StyleButton type="button" onClick={() => setStepType("Insert", id)}>
        Insert words
      </StyleButton>
      <StyleButton type="button" onClick={() => setStepType("Variants", id)}>
        Choose right variant
      </StyleButton>
      <StyleButton type="button" onClick={() => setStepType("Pairs", id)}>
        Matching pairs
      </StyleButton>
    </ChooseStyle>
  );
}
