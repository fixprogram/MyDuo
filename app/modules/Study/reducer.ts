export const initialState = {
  onText: false,
  content: [],
  contentForRepeat: [],
  previous: false,
};

export const reducer = (state = initialState, action: any) => {
  const { onText, content, contentForRepeat } = state;
  switch (action.type) {
    case "FOCUS_DOCUMENT": {
      return { ...state, onText: true };
    }
    case "BLUR_DOCUMENT": {
      return { ...state, onText: false };
    }
    case "ADD_SPACE": {
      return {
        ...state,
        content: [...content, { tag: "div", value: "" }],
        previous: false,
      };
    }
    case "ADD_CONTENT": {
      const { tag, value } = action.payload;
      return {
        ...state,
        onText: tag === "p" ? true : false,
        previous: tag === "h1",
        content: [...content, { tag, value }],
      };
    }
    case "REMOVE_LAST_CONTENT": {
      const newContent = content;
      const newContentForRepeat = contentForRepeat;
      newContent.splice(content.length - 1, 1);
      return {
        ...state,
        previous: true,
        content: [...newContent],
        contentForRepeat: [...newContentForRepeat],
      };
    }
    default: {
      throw new Error(`We don't know this action type: ${action.type}`);
    }
  }
};
