import { VisuallyHiddenInput, Textarea } from "~/components/lib";
import { formatRef } from "../utils";
import { ContextItemsRef } from "..";
import { useContext, useState } from "react";

export default function SidebarConstructor() {
  const value: any = useContext(ContextItemsRef);

  const blocks = formatRef(value);

  const [title, setTitle] = useState(() => value.title);

  return (
    <form method="POST">
      <h3>Lesson title</h3>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        placeholder="Enter lesson title"
        required
        style={{ marginBottom: "20px" }}
      />

      {blocks?.map(
        (item: { question: string; answer: string }, idx: number) => (
          <fieldset key={idx}>
            <VisuallyHiddenInput type="text" name="step" value={idx} readOnly />
            <VisuallyHiddenInput
              name={`type${idx}`}
              value={"Question"}
              readOnly
              required
            />
            <input
              type="text"
              name={`question${idx}`}
              value={item.question}
              style={{
                border: "none",
                marginBottom: 10,
                width: "100%",
              }}
              readOnly
              required
            />

            <Textarea name={`answer${idx}`} value={item.answer} readOnly />
          </fieldset>
        )
      )}

      <button type="submit">Save repeat</button>
    </form>
  );
}
