import { Fragment, useContext, useState } from "react";
import { Form } from "@remix-run/react";
import { ProjectContext } from "~/routes/$projectTitle";
import {
  ActiveProject,
  ActiveProjectButton,
  ActiveProjectForm,
  VisuallyHiddenInput,
} from "./lib";

export default function Projects() {
  const [showWindow, setShowWindow] = useState(false);
  const value: any = useContext(ProjectContext);
  const { projects } = value;

  return (
    <Fragment>
      <ActiveProjectButton
        type="button"
        onMouseEnter={() => setShowWindow(true)}
        onMouseLeave={() => setShowWindow(false)}
      >
        {projects?.find((item: any) => item.active).title}
      </ActiveProjectButton>

      <ActiveProjectForm
        method="post"
        onMouseEnter={() => setShowWindow(true)}
        onMouseLeave={() => setShowWindow(false)}
      >
        {showWindow ? (
          <div
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              background: "white",
            }}
          >
            <ul>
              {projects?.map((item: any, idx: number) =>
                !item.active ? (
                  <li key={idx}>
                    <VisuallyHiddenInput
                      type="text"
                      name="id"
                      value={item.id}
                      readOnly
                    />
                    <button type="submit" style={{ width: "100%" }}>
                      {item.title}
                    </button>
                  </li>
                ) : null
              )}
            </ul>
            <input type="text" placeholder="Add new one" name="newProject" />
            <button type="submit">Save</button>
          </div>
        ) : null}
      </ActiveProjectForm>
    </Fragment>
  );
}
