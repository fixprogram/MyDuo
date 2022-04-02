import { VisuallyHiddenInput, Textarea } from "~/components/lib";
import { formatRef } from "../utils";
import { ContextItemsRef } from "..";
import { useContext, useState } from "react";

export default function SidebarConstructor() {
  const value = useContext(ContextItemsRef);
  console.log("Cont val: ", value);

  const blocks = formatRef(value);

  const [title, setTitle] = useState(() => value.title);
  return (
    <form method="POST">
      <VisuallyHiddenInput
        type="text"
        name="title"
        value={title}
        // onChange={(evt) => setTitle(evt.target.value)}
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
