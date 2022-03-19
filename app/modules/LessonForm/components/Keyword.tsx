import { useState } from "react";
import { KeywordTemplate } from "../../../components/lib";

export default function Keyword({ onSet, children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <KeywordTemplate
      active={isActive}
      onClick={() => {
        onSet(children);
        setIsActive(!isActive);
      }}
    >
      {children}
    </KeywordTemplate>
  );
}
