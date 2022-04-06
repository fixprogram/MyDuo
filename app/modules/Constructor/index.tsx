import { FormButton } from "~/components/lib";
import BasicInfo from "./components/BasicInfo";
import Steps from "./Steps";

export default function Constructor() {
  return (
    <form
      method="POST"
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        maxWidth: "70%",
        position: "relative",
      }}
    >
      <BasicInfo />

      <Steps />

      <FormButton type="submit" active={true}>
        Save repeat
      </FormButton>
    </form>
  );
}
