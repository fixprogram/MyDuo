import { useEffect, useReducer, useRef } from "react";
import ContentBlock from "./components/ContentBlock";
import { StudyContainer } from "./components/lib";
import StudyTextarea from "./components/StudyTextarea";

const reducer = (state, action) => {
  const { onText, content } = state;
  switch (action.type) {
    case "FOCUS_DOCUMENT": {
      return { ...state, onText: true };
    }
    case "BLUR_DOCUMENT": {
      return { ...state, onText: false };
    }
    case "ADD_CONTENT": {
      const { tag, value } = action.payload;
      return {
        ...state,
        onText: tag === "p" ? true : false,
        content: [...content, { tag, value }],
      };
    }
    case "REMOVE_LAST_CONTENT": {
      const newContent = content;
      newContent.splice(content.length - 1, 1);

      return {
        ...state,
        previous: true,
        content: [...newContent],
      };
    }
    default: {
      throw new Error(`We don't know this action type: ${action.type}`);
    }
  }
};

export default function Study() {
  const [{ onText, content, previous }, dispatch] = useReducer(reducer, {
    onText: false,
    content: [],
  });
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, content.length);
    if (previous) {
      setFocusOnLastContent();
    }
  }, [content]);

  function setFocusOnLastContent() {
    itemsRef.current[content.length - 1]?.focus();
  }

  return (
    <StudyContainer>
      {content?.map(({ tag, value }: any, idx) => {
        return (
          <ContentBlock
            tag={tag}
            value={value}
            key={idx + value}
            onRemove={() => {
              dispatch({ type: "REMOVE_LAST_CONTENT" });
            }}
            refName={(el) => (itemsRef.current[idx] = el)}
          />
        );
      })}

      {onText ? (
        <StudyTextarea
          addContent={(payload) => dispatch({ type: "ADD_CONTENT", payload })}
          setFocusOnLastContent={setFocusOnLastContent}
        />
      ) : (
        <div
          style={{ height: "100vh" }}
          onClick={() => {
            dispatch({ type: "FOCUS_DOCUMENT" });
          }}
        ></div>
      )}
    </StudyContainer>
  );
}
