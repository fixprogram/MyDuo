import StudyInput from "./StudyInput";
import StudyText from "./StudyText";

function formatContent(
  tag: string,
  value: any,
  refName: any,
  onRemove: Function,
  setFocusOnPreviousContent: Function
) {
  switch (tag) {
    case "h1":
      return (
        <h1>
          <StudyInput
            initialValue={value}
            placeholder="Enter main title"
            name={tag}
            refName={refName}
          />
        </h1>
      );
    case "p":
      return (
        <p style={{ margin: 0 }}>
          <StudyText
            initialValue={value}
            refName={refName}
            name={tag}
            setFocusOnPreviousContent={setFocusOnPreviousContent}
          />
        </p>
      );
    case "div":
      return (
        <StudyText
          refName={refName}
          name={"space"}
          setFocusOnPreviousContent={setFocusOnPreviousContent}
        />
      );
    default:
      throw new Error(`Unkown tag name: ${tag}`);
  }
}

export default function ContentBlock({
  tag,
  value,
  refName,
  onRemove,
  onAdd,
  setFocusOnDocument,
  setFocusOnPreviousContent,
}: {
  tag: string;
  value: string;
  refName: any;
  onRemove: Function;
  onAdd: Function;
  setFocusOnDocument: Function;
  setFocusOnPreviousContent: Function;
}) {
  return (
    <div
      onKeyDown={(evt) => {
        const target = evt.target as HTMLInputElement;
        if (evt.code === "Backspace" && target.value.length === 0) {
          onRemove();
        }
        if (evt.code === "Enter") {
          evt?.preventDefault();
          onAdd();
        }
      }}
      tabIndex={0}
    >
      {formatContent(tag, value, refName, onRemove, setFocusOnPreviousContent)}
    </div>
  );
}
