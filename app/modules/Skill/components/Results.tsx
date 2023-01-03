import React, { ReactNode } from "react";
import { useFocus } from "~/hooks/useFocus";
import {
  ResultsContainer,
  ResultsHiddenForm,
  ResultsLeftBlock,
  ResultsSeparateLine,
  ResultsTitle,
} from "./lib";

type Props = {
  children?: ReactNode;
  onSubmit: () => void;
};

export type Ref = HTMLFormElement;

export const Results = React.forwardRef<Ref, Props>((props, ref) => {
  const containerRef = useFocus<HTMLDivElement>();

  return (
    <ResultsContainer
      ref={containerRef}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          props.onSubmit();
        }
      }}
      tabIndex={0}
    >
      <ResultsHiddenForm method="post" ref={ref}>
        <input type="text" name="exp" value="16" readOnly />
      </ResultsHiddenForm>

      <ResultsLeftBlock>
        <ResultsTitle>Right answers and mistakes</ResultsTitle>
      </ResultsLeftBlock>

      <ResultsSeparateLine />

      <ResultsLeftBlock />
    </ResultsContainer>
  );
});
