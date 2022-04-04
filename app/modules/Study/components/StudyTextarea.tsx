import { useEffect, useState, useRef } from "react";
import { StudyTextareaTemplate } from "./lib";

export default function StudyTextarea({
  addContent,
  addSpace,
  setFocusOnLastContent,
  height = "25px",
}) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    ref.current.focus();
  }, []);

  useEffect(() => {
    const match = /\r|\n/.exec(value);

    if (match) {
      if (value.length === 1) {
        addSpace();
      } else {
        addContent({ tag: "p", value: value });
      }
      setValue("");
    }

    if (value.startsWith("# ")) {
      setValue("");
      addContent({ tag: "h1", value: "" });
    }
  }, [value, addContent, setFocusOnLastContent]);

  return (
    <StudyTextareaTemplate
      ref={ref}
      value={value}
      onChange={(evt) => {
        setValue(evt.target.value);
        evt.target.style.height = `${evt.target.scrollHeight}px`;
      }}
      onKeyDown={(evt) => {
        const target = evt.target as HTMLInputElement;
        if (evt.code === "Backspace" && target.value.length === 0) {
          setFocusOnLastContent();
        }
      }}
      style={{ height }}
    />
  );
}
