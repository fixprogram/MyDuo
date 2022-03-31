import { useContext, useState } from "react";
import SidebarConstructor from "../SidebarConstructor";
import { formatRef } from "../utils";
import { ContextItemsRef } from "..";

export default function StudySidebar() {
  const [isCreateRepeat, setIsCreateRepeat] = useState(false);
  const value = useContext(ContextItemsRef);
  const blocks = formatRef(value);
  return isCreateRepeat ? (
    <SidebarConstructor />
  ) : (
    <section>
      <ul>
        {blocks?.map((item, index) => (
          <li key={index}>{item.question}</li>
        ))}
      </ul>
      <button type="button" onClick={() => setIsCreateRepeat(!isCreateRepeat)}>
        {isCreateRepeat ? "back" : "create repeat"}
      </button>
    </section>
  );
}
