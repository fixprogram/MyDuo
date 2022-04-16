export type Action =
  | { type: "SETUP"; payload: { variantsCount: number } }
  | { type: "VARIANTS_SETUP"; payload: { variantsCount: number } }
  | { type: "VARIANT_SET_VALUE"; payload: { idx: string; value: string } }
  | { type: "TYPE"; payload: { value: string; idx: string } }
  | { type: "CHOOSE"; payload: { idx: string } }
  | { type: "VARIANT_CHOOSE"; payload: { idx: string } }
  | { type: "CONNECT"; payload: { activeIdx: string; idx: string } };

export const pairsSetup = (variantsCount: number): Action => ({
  type: "SETUP",
  payload: { variantsCount },
});

export const variantsSetup = (variantsCount: number): Action => ({
  type: "VARIANTS_SETUP",
  payload: { variantsCount },
});

export const variantSetValue = (idx: string, value: string): Action => ({
  type: "VARIANT_SET_VALUE",
  payload: { idx, value },
});

export const pairsType = (value: string, idx: string): Action => ({
  type: "TYPE",
  payload: { value, idx },
});

export const pairsChoose = (idx: string): Action => ({
  type: "CHOOSE",
  payload: {
    idx,
  },
});

export const variantChoose = (idx: string): Action => ({
  type: "VARIANT_CHOOSE",
  payload: { idx },
});

export const pairsConnect = (activeIdx: string, idx: string): Action => ({
  type: "CONNECT",
  payload: { activeIdx, idx },
});
