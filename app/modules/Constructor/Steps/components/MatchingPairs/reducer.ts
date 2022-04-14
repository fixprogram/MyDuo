import { Action } from "./actions";

export type Variant = {
  type: string;
  value: string;
  idx: string;
  isFocused: boolean;
  isConnected: boolean;
};

type MP_State = {
  variants: Variant[];
  pairs: string[];
};

export const basicState: MP_State = {
  variants: [],
  pairs: [],
};

export const reducer = (state: MP_State, action: Action) => {
  const { variants, pairs } = state;
  switch (action.type) {
    case "SETUP": {
      const { variantsCount } = action.payload;
      const variants = [];
      for (let i = 1; i <= variantsCount; i++) {
        variants.push({
          type: i - 1 < variantsCount / 2 ? "left" : "right", // Dividing on halfs.
          value: "",
          isFocused: false,
          idx: i,
          isConnected: false,
        });
      }
      return { ...state, variants };
    }
    case "TYPE": {
      const { value, idx } = action.payload;
      const newVariants = variants;
      newVariants[
        newVariants.indexOf(newVariants.find((variant) => variant.idx === idx))
      ].value = value;
      return { ...state, variants: [...newVariants] };
    }
    case "CHOOSE": {
      const { idx } = action.payload;
      const variantItem = variants.find((variant) => variant.idx === idx);
      if (variantItem?.type === "left") {
        const newVariants = variants.map((variant) => ({
          ...variant,
          isFocused: variant.idx === idx,
        }));
        return { ...state, variants: newVariants };
      }
      const newVariants = variants.map((variant) => ({
        ...variant,
        isFocused: variant.idx === idx,
      }));
      return { ...state, variants: newVariants };
    }
    case "CONNECT": {
      const { activeIdx, idx } = action.payload;
      let newPairs = pairs;
      let exists = newPairs.find(
        (item) => item.includes(activeIdx) || item.includes(idx)
      );
      if (exists) {
        newPairs[newPairs.indexOf(exists)] = `${activeIdx}${idx}`;
      } else {
        newPairs.push(`${activeIdx}${idx}`);
      }
      return {
        ...state,
        variants: variants.map((variant) => ({
          ...variant,
          isFocused: false,
          isConnected: newPairs.filter((pair) => pair.includes(variant.idx))
            .length,
        })),
        pairs: newPairs,
      };
    }
    default: {
      throw new Error(`Omg we don't know this action type`);
    }
  }
};
