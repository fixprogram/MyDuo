import { useState } from "react";
import { Form } from "remix";
import { FormButton } from "~/components/lib";
import BasicInfo from "./components/BasicInfo";
import Steps from "./Steps";

export default function Constructor() {
  const [basicInfoReady, setBasicInfoReady] = useState(false);
  const [stepsReady, setStepsReady] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("Basic");
  return (
    <Form
      method="post"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          position: "relative",
        }}
      >
        <BasicInfo
          setReady={(val: boolean) => setBasicInfoReady(val)}
          screen={currentScreen}
        />

        <Steps
          setReady={(val: boolean) => setStepsReady(val)}
          screen={currentScreen}
        />
      </div>
      <div
        style={{
          maxWidth: "25%",
          display: "flex",
          flexDirection: "column",
          paddingBottom: 71,
          position: "relative",
        }}
      >
        <h2>Sidebar</h2>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => {
                setCurrentScreen("Basic");
              }}
              style={{
                color: "#3c3c3c",
                display: "block",
                fontSize: 16,
                fontWeight: 700,
                overflow: "hidden",
                padding: "15px 20px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Basic Info
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setCurrentScreen("Steps");
              }}
              style={{
                color: "#3c3c3c",
                display: "block",
                fontSize: 16,
                fontWeight: 700,
                overflow: "hidden",
                padding: "15px 20px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Steps
            </button>
          </li>
        </ul>
        <FormButton
          type="submit"
          active={stepsReady === true && basicInfoReady === true}
          disabled={stepsReady === false || basicInfoReady === false}
          style={{ marginTop: "auto" }}
        >
          Save repeat
        </FormButton>
      </div>
    </Form>
  );
}
