export type Action =
  | {
      type: "SETUP";
      payload: { variantsCount: number; variants: any; pairs: string[] };
    }
  | { type: "VARIANTS_SETUP"; payload: { variantsCount: number } }
  | { type: "VARIANT_SET_VALUE"; payload: { idx: number; value: string } }
  | { type: "TYPE"; payload: { value: string; idx: number } }
  | { type: "CHOOSE"; payload: { idx: number } }
  | { type: "VARIANT_CHOOSE"; payload: { idx: number } }
  | { type: "CONNECT"; payload: { activeIdx: string; idx: number } };

export const pairsSetup = (
  variantsCount: number,
  variants: any,
  pairs = []
): Action => ({
  type: "SETUP",
  payload: { variantsCount, variants, pairs },
});

export const variantsSetup = (variantsCount: number): Action => ({
  type: "VARIANTS_SETUP",
  payload: { variantsCount },
});

export const variantSetValue = (idx: number, value: string): Action => ({
  type: "VARIANT_SET_VALUE",
  payload: { idx, value },
});

export const pairsType = (value: string, idx: number): Action => ({
  type: "TYPE",
  payload: { value, idx },
});

export const pairsChoose = (idx: number): Action => ({
  type: "CHOOSE",
  payload: {
    idx,
  },
});

export const variantChoose = (idx: number): Action => ({
  type: "VARIANT_CHOOSE",
  payload: { idx },
});

export const pairsConnect = (activeIdx: string, idx: number): Action => ({
  type: "CONNECT",
  payload: { activeIdx, idx },
});
