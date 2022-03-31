import StudyInput from "./StudyInput";

function formatContent(tag, value, refName, onRemove) {
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
          <StudyInput initialValue={value} refName={refName} name={tag} />
        </p>
      );
    case "div":
      return (
        <StudyInput
          style={{ margin: "20px 0" }}
          refName={refName}
          name={"space"}
        />
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
          // console.log("ht"); // Make it real so tapping Enter inside an input we go futher
        }
      }}
    >
      {formatContent(tag, value, refName, onRemove)}
    </div>
  );
}
