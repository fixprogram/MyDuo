import { useState } from "react";
import { FormButton } from "~/components/lib";
import BasicInfo from "./components/BasicInfo";
import Steps from "./Steps";

export default function Constructor() {
  const [basicInfoReady, setBasicInfoReady] = useState(false);
  const [stepsReady, setStepsReady] = useState(false);
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
      <BasicInfo setReady={(val: boolean) => setBasicInfoReady(val)} />

      <Steps setReady={(val: boolean) => setStepsReady(val)} />

      <FormButton
        type="submit"
        active={stepsReady === true && basicInfoReady === true}
        disabled={stepsReady === false || basicInfoReady === false}
      >
        Save repeat
      </FormButton>
    </form>
  );
}
