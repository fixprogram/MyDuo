/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { FormButton, VisuallyHiddenInput } from "~/components/lib";
import BasicInfo from "./components/BasicInfo";
import { ConstructorMenu } from "./components/lib";
import Steps from "./Steps";

export default function Form() {
  //   const [{ steps, active }, dispatch] = useReducer(reducer, basicState);
  // create active state when the form is fulfilled

  const [state, setState] = useState("Basic");

  return (
    <form
      method="POST"
      css={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        maxWidth: "70%",
      }}
    >
      {state === "Basic" ? <BasicInfo /> : <Steps />}

      <ConstructorMenu>
        <button type="button" onClick={() => setState("Basic")}>
          Basic info
        </button>
        <button type="button" onClick={() => setState("Steps")}>
          Steps
        </button>
        <button type="button">Results screen</button>

        <FormButton type="submit" active={true}>
          Save repeat
        </FormButton>
      </ConstructorMenu>
    </form>
  );
}
