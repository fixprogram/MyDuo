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

enum ActionKind {
  Focus = "FOCUS_DOCUMENT",
  Blur = "BLUR_DOCUMENT",
  AddSpace = "ADD_SPACE",
  AddContent = "ADD_CONTENT",
  RemoveLastContent = "REMOVE_LAST_CONTENT",
  SetTitle = "SET_TITLE",
}

type Action = {
  type: ActionKind;
  payload: {
    tag: string;
    value: any;
  };
};

// const increaseAction: Action = {
//   type: ActionKind.Increase,
//   payload: 1
// }

// const decreaseAction: Action = {
//   type: ActionKind.Decrease,
//   payload: 1
// }

export const reducer = (state: State, action: Action) => {
  const { content } = state;
  switch (action.type) {
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
    case ActionKind.RemoveLastContent: {
      const newContent = content;
      newContent.splice(content.length - 1, 1);
      return {
        ...state,
        previous: true,
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
