import { useState } from "react";
import { KeywordTemplate } from "~/components/lib";

const Keyword: React.FC<{ onSet: Function }> = ({ onSet, children }) => {
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
};

export default Keyword;
