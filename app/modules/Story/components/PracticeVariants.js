import React from "react";
import { PracticeBodyVariant, PracticeBodyVariants } from "./lib";

const PracticeVariants = ({ variants, onCheck, variantsState }) => {
  return (
    <PracticeBodyVariants>
      {variants.map((item, idx) => (
        <PracticeBodyVariant
          key={idx}
          onClick={() => {
            onCheck(idx);
          }}
          active={variantsState.active === idx}
          correct={variantsState.correct === idx}
          incorrect={variantsState.incorrect === idx}
        >
          {item}
        </PracticeBodyVariant>
      ))}
    </PracticeBodyVariants>
  );
};

export default PracticeVariants;
