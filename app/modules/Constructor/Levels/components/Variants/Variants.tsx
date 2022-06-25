import { Fragment, useEffect, useReducer, useState } from "react";
import { Textarea } from "~/components/lib";
import { FieldsetType } from "../../types";
import { VariantItemInput, VariantItemNumber } from "../lib";
import { reducer, Variant } from "../MatchingPairs/reducer";
import {
  variantChoose,
  variantSetValue,
  variantsSetup,
} from "../MatchingPairs/actions";
import { useConstructor } from "../../..";

type VariantsProps = FieldsetType & {
  initialQuestion: string | null;
  initialVariants: Variant[] | undefined;
  variantsCount: number;
};

export default function Variants({
  initialQuestion = "",
  initialVariants = [],
  variantsCount = 3,
  initialState,
}: VariantsProps) {
  const { number, answer, stepType } = initialState;
  const { setStepReady, setAnswer } = useConstructor();
  const [{ variants }, dispatch] = useReducer(reducer, {
    variants: initialVariants,
    pairs: [],
  });
  const [question, setQuestion] = useState(initialQuestion);

  useEffect(() => {
    if (variants.length === 0) {
      dispatch(variantsSetup(variantsCount));
    }
  }, [variantsCount]);

  useEffect(() => {
    if (
      variants.filter((variant: Variant) => variant.value.length === 0).length
    ) {
      return setStepReady(false, number);
    }

    if (
      variants.find(
        (variant: Variant) => variant.isFocused || variant.value === answer[0]
      )
    ) {
      setStepReady(true, number);
    } else {
      return setStepReady(false, number);
    }

    if (question?.length) {
      setStepReady(true, number);
    } else {
      setStepReady(false, number);
    }
  }, [variants, question]);

  return stepType === "Variants" ? (
    <Fragment>
      <input type="hidden" name={`answer${number}`} value={answer} />
      <input type="hidden" name={`type${number}`} value={"Variants"} />

      <div>
        <h2>Read and Respond</h2>
      </div>

      <Textarea
        name={`question${number}`}
        placeholder="Type question"
        style={{ minHeight: 100 }}
        value={question === null ? "" : question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <ul>
        {variants.map((variant: Variant, index) => (
          <li key={variant.idx} style={{ marginBottom: 5 }}>
            <label style={{ position: "relative" }}>
              <VariantItemNumber
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(variantChoose(index));
                  setAnswer(variant.value);
                }}
                isFocused={variant.isFocused || variant.value === answer[0]}
              >
                {variant.idx}
              </VariantItemNumber>
              <VariantItemInput
                type="text"
                name={`variant${number}`}
                placeholder="type first variant"
                autoComplete="off"
                value={variant.value}
                onChange={(e) => {
                  dispatch(variantSetValue(index, e.target.value));

                  if (variant.isFocused) {
                    setAnswer(e.target.value);
                  }
                }}
                required
              />
            </label>
          </li>
        ))}
      </ul>
    </Fragment>
  ) : null;
}
