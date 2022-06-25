import { Fragment, useEffect, useReducer } from "react";
import { useConstructor } from "~/modules/Constructor";
import { FieldsetType } from "../../types";
import { VariantItemNumber, VariantItemInput } from "../lib";
import { pairsChoose, pairsConnect, pairsSetup, pairsType } from "./actions";
import { reducer, Variant } from "./reducer";

type MP = FieldsetType & {
  variantsCount: number;
  initialVariants: Variant[];
};

export default function MatchingPairs({
  // number,
  // answer,
  // setAnswer,
  variantsCount = 4,
  // setReady,
  initialVariants = [],
  initialState,
}: MP) {
  const { number, answer, stepType } = initialState;
  const { setStepReady, setAnswer } = useConstructor();

  const [{ variants, pairs }, dispatch] = useReducer(reducer, {
    variants: initialVariants,
    pairs: [],
  });

  useEffect(() => {
    dispatch(pairsSetup(variantsCount, initialVariants, answer as string[]));
  }, []);

  useEffect(() => {
    if (pairs.length === variantsCount / 2) {
      setAnswer(pairs);
      setStepReady(true, number);
    }
    if (pairs.length !== variantsCount / 2) {
      setStepReady(false, number);
    }
  }, [pairs.length, pairs]);

  return stepType === "Pairs" ? (
    <Fragment>
      <input type="hidden" name={`type${number}`} value={"Pairs"} />
      <input type="hidden" name={`answer${number}`} value={answer} />
      <div style={{ marginBottom: "20px" }}>
        <h2>Create and Connect pairs</h2>
      </div>

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        {variants.map((variant: Variant) => (
          <li key={variant.idx} style={{ marginBottom: 5 }}>
            <label style={{ position: "relative" }}>
              <VariantItemNumber
                onClick={(e) => {
                  e.preventDefault();
                  const activeIdx = variants.filter(
                    (variantItem: Variant) => variantItem.isFocused
                  )[0]?.idx;
                  if (
                    variants.filter(
                      (variantItem: Variant) => variantItem.isFocused
                    ).length === 1 ||
                    variant.isFocused
                  ) {
                    dispatch(pairsConnect(activeIdx, variant.idx));
                  } else {
                    dispatch(pairsChoose(variant.idx));
                  }
                }}
                isConnected={variant.isConnected}
                isFocused={variant.isFocused}
              >
                {variant.idx}
              </VariantItemNumber>
              <VariantItemInput
                type="text"
                name={`variant${number}`}
                placeholder="type first variant"
                value={variant.value}
                autoComplete="off"
                onChange={(e) =>
                  dispatch(pairsType(e.target.value, variant.idx))
                }
                required
              />
            </label>
          </li>
        ))}
        <button
          type="button"
          onClick={() => dispatch({ type: "ADD_PAIR" })}
          style={{ display: "block", width: "100%" }}
        >
          Add pair
        </button>
      </ul>
    </Fragment>
  ) : null;
}
