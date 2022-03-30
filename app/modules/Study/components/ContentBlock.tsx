import StudyInput from "./StudyInput";

function formatContent(tag, value, refName, onRemove) {
  switch (tag) {
    case "h1":
      return (
        <h1>
          <StudyInput
            initialValue={value}
            placeholder="Enter main title"
            refName={refName}
          />
        </h1>
      );
    case "p":
      return (
        <p style={{ margin: 0 }}>
          <StudyInput initialValue={value} refName={refName} />
        </p>
      );
    default:
      throw new Error(`Unkown tag name: ${tag}`);
  }
}

export default function ContentBlock({ tag, value, refName, onRemove }) {
  return (
    <div
      onKeyDown={(evt) => {
        if (evt.code === "Backspace" && evt.target.value.length === 0) {
          onRemove();
        }
        if (evt.code === "Enter") {
          // console.log("ht");
        }
      }}
    >
      {formatContent(tag, value, refName, onRemove)}
    </div>
  );
}
