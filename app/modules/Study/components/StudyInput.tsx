import { useState } from "react";
import { StudyInputTemplate } from "./lib";

export default function StudyInput({
  initialValue,
  placeholder,
  refName,
  name,
}: {
  initialValue: string;
  placeholder?: string;
}) {
  const [value, setValue] = useState(initialValue);
  return (
    <StudyInputTemplate
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder={placeholder}
      ref={refName}
      name={name}
    />
  );
}
