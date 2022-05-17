import {
  ResultsContainer,
  ResultsLeftBlock,
  ResultsSeparateLine,
  ResultsTitle,
} from "./lib";

export default function Results({ refName }: { refName: any }) {
  return (
    <ResultsContainer>
      <ResultsLeftBlock>
        <ResultsTitle>Right answers and mistakes</ResultsTitle>
      </ResultsLeftBlock>

      <ResultsSeparateLine />

      <ResultsLeftBlock />
      <form
        method="POST"
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
      </form>
    </ResultsContainer>
  );
}
