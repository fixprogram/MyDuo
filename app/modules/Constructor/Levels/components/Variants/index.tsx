import { useEffect, useReducer, useState } from "react";
import { Textarea } from "~/components/lib";
import { VariantItemInput, VariantItemNumber } from "../lib";
import { reducer, Variant } from "../MatchingPairs/reducer";
import {
  variantChoose,
  variantSetValue,
  variantsSetup,
} from "../MatchingPairs/actions";
import { useConstructor } from "../../..";
import {
  VariantsItem,
  VariantsList,
} from "~/modules/Constructor/components/lib";
import { LessonTitle } from "~/modules/Lesson/components/lib";

const initialState = {
  variantsCount: 3,
  question: "",
  variants: [],
  number: 0,
  answer: "",
  stepType: "",
};

export default function Variants({ state = initialState }) {
  const { number, answer, stepType, variantsCount = 3 } = state;
  const initialQuestion = state.question;
  const initialVariants = state.variants;
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
    <>
      <input type="hidden" name={`answer${number}`} value={answer} />

      <fieldset style={{ padding: "0 25%" }}>
        <LessonTitle>Choose right variant</LessonTitle>

        <div style={{ marginTop: 30 }}>
          <Textarea
            name={`question${number}`}
            placeholder="Type question"
            style={{ minHeight: 100, marginBottom: 20 }}
            value={question === null ? "" : question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <VariantsList>
            {variants.map((variant: Variant, index) => (
              <VariantsItem
                key={variant.idx}
                style={{ marginBottom: 5, width: "100%" }}
              >
                <label style={{ position: "relative" }}>
                  <VariantItemNumber
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(variantChoose(index));
                      setAnswer(variant.value, number);
                    }}
                    isFocused={variant.isFocused || variant.value === answer[0]}
                  >
                    {variant.idx}
                  </VariantItemNumber>
                  <VariantItemInput
                    type="text"
                    name={`variant${number}`}
                    placeholder="Type variant"
                    value={variant.value}
                    onChange={(e) => {
                      dispatch(variantSetValue(index, e.target.value));

                      if (variant.isFocused) {
                        setAnswer(e.target.value, number);
                      }
                    }}
                    required
                  />
                </label>
              </VariantsItem>
            ))}
          </VariantsList>
        </div>
      </fieldset>
    </>
  ) : null;
}
