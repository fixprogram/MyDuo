import { Fragment, useEffect, useReducer } from "react";
import { FieldsetType } from "../../types";
import { VariantItemNumber, VariantItemInput } from "../lib";
import { pairsChoose, pairsConnect, pairsSetup, pairsType } from "./actions";
import { reducer, basicState, Variant, State } from "./reducer";

type MP = FieldsetType & {
  variantsCount: number;
  initialVariants: Variant[];
};

export default function MatchingPairs({
  number,
  answer,
  setAnswer,
  variantsCount = 8,
  setReady,
  initialVariants = [],
}: MP) {
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
      setReady(true);
    }
    if (pairs.length !== variantsCount / 2) {
      setReady(false);
    }
  }, [pairs.length, pairs]);

  return (
    <Fragment>
      <input type="hidden" name={`type${number}`} value={"Pairs"} />
      <input type="hidden" name={`answer${number}`} value={answer} />
      <div>
        <h2>Create and Connect pairs</h2>
      </div>

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          // margin: "0 10%",
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
      </ul>
    </Fragment>
  );
}
