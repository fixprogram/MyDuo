type State = {
  onText: boolean;
  content: any[];
  previous: boolean;
  title: string;
};

export const initialState: State = {
  onText: false,
  content: [],
  previous: false,
  title: "",
};

export enum ActionKind {
  Focus = "FOCUS_DOCUMENT",
  Blur = "BLUR_DOCUMENT",
  AddSpace = "ADD_SPACE",
  AddContent = "ADD_CONTENT",
  RemoveContent = "REMOVE_CONTENT",
  SetTitle = "SET_TITLE",
  SetContent = "SET_CONTENT",
}

type Action = {
  type: ActionKind;
  payload: {
    tag: string;
    value: any;
    title: string;
    content: any;
    idx: number;
  };
};

export const reducer = (state: State, action: Action) => {
  const { content } = state;
  switch (action.type) {
    case ActionKind.SetContent: {
      const { title, content } = action.payload;
      return { ...state, title, content };
    }
    case ActionKind.Focus: {
      return { ...state, onText: true };
    }
    case ActionKind.Blur: {
      return { ...state, onText: false };
    }
    case ActionKind.AddSpace: {
      return {
        ...state,
        content: [...content, { tag: "div", value: "" }],
        previous: false,
      };
    }
    case ActionKind.AddContent: {
      const { tag, value } = action.payload;
      return {
        ...state,
        onText: tag === "p" ? true : false,
        previous: tag === "h1",
        content: [...content, { tag, value }],
      };
    }
    case ActionKind.RemoveContent: {
      const { idx } = action.payload;
      const newContent = content;
      newContent.splice(idx, 1);
      return {
        ...state,
        // previous: true,
        content: [...newContent],
      };
    }
    case ActionKind.SetTitle: {
      const { value } = action.payload;
      return { ...state, title: value };
    }
    default: {
      throw new Error(`We don't know this action type: ${action.type}`);
    }
  }
};
