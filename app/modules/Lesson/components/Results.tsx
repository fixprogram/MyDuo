import { Form } from "remix";
import {
  ResultsContainer,
  ResultsLeftBlock,
  ResultsSeparateLine,
  ResultsTitle,
} from "./lib";

export default function Results({ refName }: { refName: HTMLFormElement }) {
  // export default function Results() {
  return (
    <ResultsContainer>
      <ResultsLeftBlock>
        <ResultsTitle>Right answers and mistakes</ResultsTitle>
      </ResultsLeftBlock>

      <ResultsSeparateLine />

      <ResultsLeftBlock />
      <Form
        method="post"
        ref={refName}
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          top: -1000,
          left: -1000,
        }}
      >
        <input type="text" name="exp" value="16" readOnly />
      </Form>
    </ResultsContainer>
  );
}
