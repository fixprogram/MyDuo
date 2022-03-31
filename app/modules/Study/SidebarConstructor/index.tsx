import { VisuallyHiddenInput, Textarea } from "~/components/lib";
import { formatRef } from "../utils";
import { ContextItemsRef } from "..";
import { useContext } from "react";

export default function SidebarConstructor() {
  const value = useContext(ContextItemsRef);
  const blocks = formatRef(value);
  return (
    <form method="POST">
      <VisuallyHiddenInput
        type="text"
        name="title"
        value={"Test title"}
        readOnly
      />

      {blocks?.map((item, index) => (
        <fieldset key={index}>
          <VisuallyHiddenInput type="text" name="step" value={index} readOnly />
          <VisuallyHiddenInput
            name={`type${index}`}
            value={"Question"}
            readOnly
          />
          <input
            type="text"
            name={`question${index}`}
            value={item.question}
            style={{
              border: "none",
              marginBottom: 10,
              width: "100%",
            }}
            readOnly
          />

          <Textarea name={`answer${index}`} value={item.answer} readOnly />
        </fieldset>
      ))}

      <button type="submit">Save repeat</button>
    </form>
  );
}
