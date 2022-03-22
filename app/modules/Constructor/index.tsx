/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FormButton, Legend, VisuallyHiddenInput } from "~/components/lib";
import BasicInfo from "./components/BasicInfo";
import Steps from "./Steps";

export default function Form() {
  //   const [{ steps, active }, dispatch] = useReducer(reducer, basicState);
  // create active state when the form is fulfilled

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
      <Legend>Basic info</Legend>

      <VisuallyHiddenInput
        type="text"
        name="formType"
        value="lesson"
        readOnly
      />

      <BasicInfo />

      {/* <Fieldset>
        <TextareaLabel htmlFor="description">
          <LabelText>Description</LabelText>
          <Textarea
            id="description"
            name="description"
            placeholder="Add description of this lesson"
          />
        </TextareaLabel>
      </Fieldset> */}

      <Steps />

      <FormButton type="submit" active={true}>
        Save lesson
      </FormButton>
    </form>
  );
}
