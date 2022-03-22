/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useEffect, useReducer } from "react";
import { VisuallyHiddenInput } from "~/components/lib";
import { VariantItemNumber, VariantItemInput } from "./lib";

const basicState = {
  variants: [],
  pairs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SETUP": {
      const { count = 8 } = action.payload;
      const variants = [];
      for (let i = 1; i <= count; i++) {
        variants.push({
          type: i - 1 < count / 2 ? "left" : "right", // Dividing on halfs.
          value: "",
          active: false,
          index: i,
          //   showed: i - 1 < count / 2,
          connected: false,
        });
      }
      return { ...state, variants };
    }
    case "TYPE": {
      const { value, index } = action.payload;
      const newVariants = state.variants;
      newVariants[
        newVariants.indexOf(
          newVariants.find((item: any) => item.index === index)
        )
      ].value = value;
      return { ...state, variants: [...newVariants] };
    }
    case "CLICK": {
      const { index } = action.payload;
      const item = state.variants.find((item: any) => item.index === index);
      if (item.type === "left") {
        const newVariants = state.variants.map((variant: any) => ({
          ...variant,
          active: variant.index === index,
          //   showed: variant.type === "right",
        }));
        return { ...state, variants: newVariants };
      }
      const newVariants = state.variants.map((variant: any) => ({
        ...variant,
        active: variant.index === index,
        // showed: variant.type === "left",
      }));
      return { ...state, variants: newVariants };
    }
    case "CONNECT": {
      const { activeIndex, index } = action.payload;
      let newPairs = state.pairs;
      let exists = newPairs.find(
        (item: any) =>
          item.indexes.includes(activeIndex) || item.indexes.includes(index)
      );
      if (exists) {
        newPairs[newPairs.indexOf(exists)] = {
          indexes: `${activeIndex}${index}`,
        };
      } else {
        newPairs.push({ indexes: `${activeIndex}${index}` });
      }

      console.log("NEW: ", newPairs);

      return {
        ...state,
        variants: state.variants.map((variant) => ({
          ...variant,
          active: false,
          //   showed: false,
        })),
        pairs: newPairs,
      };
    }
    default: {
      throw new Error(`Omg we don't know this action type: `, action.type);
    }
  }
};

export default function MatchingPairs({
  number,
  answer,
  setAnswer,
  setStyles,
  count = 8,
}) {
  const [{ variants, pairs }, dispatch] = useReducer(reducer, basicState);

  useEffect(() => {
    dispatch({ type: "SETUP", payload: { count } });
  }, []);

  useEffect(() => {
    console.log(pairs);
    if (pairs.length === count / 2) {
      setAnswer(pairs);
    }
  }, [pairs]);

  return (
    <Fragment>
      <VisuallyHiddenInput name={`type${number}`} value={"Question"} readOnly />
      <div>
        <h2>Create and Connect pairs</h2>
        <button type="button" onClick={setStyles}>
          Back to Styles
        </button>
      </div>

      <fieldset
        css={{ padding: "0 10%", display: "flex", justifyContent: "center" }}
      >
        <ul
          css={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {variants.map((item, idx) => (
            <li key={item.index} css={{ marginBottom: 5 }}>
              <label css={{ position: "relative" }}>
                <VariantItemNumber
                  onClick={(e) => {
                    e.preventDefault();
                    const activeIndex = variants.filter(
                      (variant) => variant.active
                    )[0]?.index;
                    if (
                      variants.filter((variant) => variant.active).length ===
                        1 ||
                      item.active
                    ) {
                      dispatch({
                        type: "CONNECT",
                        payload: { activeIndex, index: item.index },
                      });
                    } else {
                      dispatch({
                        type: "CLICK",
                        payload: { index: item.index },
                      });
                    }
                  }}
                  connected={pairs.find((pair) =>
                    pair.indexes.includes(item.index)
                  )}
                  focused={item.active}
                >
                  {/* {pairs.find((pair) => pair.indexes.includes(item.index))
                    ? item.index
                    : item.active || item.showed
                    ? item.index
                    : null} */}
                  {item.index}
                </VariantItemNumber>
                <VariantItemInput
                  type="text"
                  name={`variant${number}`}
                  placeholder="type first variant"
                  value={item.value}
                  autoComplete="off"
                  connected={pairs.find((pair) =>
                    pair.indexes.includes(item.index)
                  )}
                  focused={item.active}
                  onChange={(e) =>
                    dispatch({
                      type: "TYPE",
                      payload: { value: e.target.value, index: item.index },
                    })
                  }
                />
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </Fragment>
  );
}
