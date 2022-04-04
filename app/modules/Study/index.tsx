import { createContext, useEffect, useReducer, useRef } from "react";
import { Link } from "@remix-run/react";
import ContentBlock from "./components/ContentBlock";
import { StudyContainer } from "./components/lib";
import StudyTextarea from "./components/StudyTextarea";
import { ActionKind, initialState, reducer } from "./reducer";

export const ContextItemsRef = createContext([]);

export const Study: React.FC = ({
  data,
  children,
}: {
  data: { title: ""; content: [{}] };
  children: any;
}) => {
  const [{ onText, content, previous, title }, dispatch] = useReducer(reducer, {
    ...initialState,
  });
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  console.log(content);

  useEffect(() => {
    if (data) {
      dispatch({
        type: ActionKind.SetContent,
        payload: { title: data?.title, content: data?.content },
      });
    }
  }, [data]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, content?.length);
    if (previous) {
      setFocusOnLastContent();
    }
  }, [content]);

  function setFocusOnLastContent() {
    itemsRef.current[content?.length - 1]?.focus();
  }

  function setFocusOnNextContent(idx: number) {
    itemsRef.current[idx + 1]?.focus();
  }

  function setFocusOnPreviousContent(idx: number) {
    if (itemsRef.current[idx - 1]) {
      itemsRef.current[idx - 1]?.focus();
    }
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
                type: ActionKind.SetTitle,
                payload: { value: evt.target.value },
              });
            }}
            placeholder="Type list title"
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: 25,
              fontFamily: "Montserrat",
              marginBottom: 20,
              border: "none",
            }}
          />
          {content?.map(({ tag, value }: any, idx: number) => {
            return (
              <ContentBlock
                tag={tag}
                value={value}
                key={idx + value}
                onRemove={() => {
                  dispatch({
                    type: ActionKind.RemoveContent,
                    payload: { idx },
                  });
                }}
                onAdd={() => {
                  dispatch({ type: ActionKind.AddSpace });
                  setFocusOnNextContent(idx);
                }}
                refName={(el) => (itemsRef.current[idx] = el)}
                setFocusOnNextContent={() => setFocusOnNextContent(idx)}
                setFocusOnPreviousContent={() => setFocusOnPreviousContent(idx)}
                setFocusOnDocument={() => dispatch({ type: ActionKind.Focus })}
              />
            );
          })}

          {onText ? (
            <StudyTextarea
              addContent={(payload: any) =>
                dispatch({ type: ActionKind.AddContent, payload })
              }
              addSpace={() => dispatch({ type: ActionKind.AddSpace })}
              setFocusOnLastContent={setFocusOnLastContent}
              height={"calc(100vh - 95px"}
            />
          ) : (
            <div
              style={{ height: "100vh" }}
              onClick={() => {
                dispatch({ type: ActionKind.Focus });
              }}
            ></div>
          )}
          <button onClick={() => {}}>Save changes</button>
        </form>
      </StudyContainer>

      <Link to={`transform-repeat`}>Transform Repeat</Link>

      <ContextItemsRef.Provider value={itemsRef.current}>
        {children}
      </ContextItemsRef.Provider>
    </section>
  );
};
