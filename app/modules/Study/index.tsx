import { createContext, useEffect, useReducer, useRef } from "react";
import { Link } from "remix";
import ContentBlock from "./components/ContentBlock";
import { StudyContainer } from "./components/lib";
import StudyTextarea from "./components/StudyTextarea";
import { initialState, reducer } from "./reducer";

export const ContextItemsRef = createContext([]);

export const Study: React.FC = ({
  data,
  children,
}: {
  data: { title: ""; content: [] };
  children: any;
}) => {
  const [{ onText, content, previous, title }, dispatch] = useReducer(reducer, {
    ...initialState,
    content: data ? data.content : [],
    title: data ? data.title : "",
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
    <section style={{ display: "flex", width: "100%", padding: "0 0 0 40px" }}>
      <StudyContainer>
        <form method="POST">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(evt) => {
              dispatch({
                type: "SET_TITLE",
                payload: { value: evt.target.value },
              });
            }}
            placeholder="Type list title"
          />
          {content?.map(({ tag, value }: any, idx: number) => {
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
              addContent={(payload) =>
                dispatch({ type: "ADD_CONTENT", payload })
              }
              addSpace={() => dispatch({ type: "ADD_SPACE" })}
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
          <button type="submit">Save changes</button>
        </form>
      </StudyContainer>

      <Link to={`transform-repeat`}>Transform Repeat</Link>

      <ContextItemsRef.Provider value={itemsRef.current}>
        {children}
      </ContextItemsRef.Provider>
    </section>
  );
};
