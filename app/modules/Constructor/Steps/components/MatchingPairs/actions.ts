export type Action =
  | { type: "SETUP"; payload: { variantsCount: number } }
  | { type: "TYPE"; payload: { value: string; idx: string } }
  | { type: "CHOOSE"; payload: { idx: string } }
  | { type: "CONNECT"; payload: { activeIdx: string; idx: string } };

export const pairsSetup = (variantsCount: number): Action => ({
  type: "SETUP",
  payload: { variantsCount },
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

export const pairsConnect = (activeIdx: string, idx: string): Action => ({
  type: "CONNECT",
  payload: { activeIdx, idx },
});
