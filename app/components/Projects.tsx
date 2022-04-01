import { Fragment, useContext, useState } from "react";
import { Form } from "remix";
import { ProjectContext } from "~/routes/$projectTitle";
import { VisuallyHiddenInput } from "./lib";

export default function Projects() {
  const [showWindow, setShowWindow] = useState(false);
  const value = useContext(ProjectContext);
  const { activeProject, projects } = value;

  return (
    <Fragment>
      <button type="button" onClick={() => setShowWindow(!showWindow)}>
        {activeProject?.title}
      </button>

      {showWindow ? (
        <div>
          <ul>
            {projects?.map((item, idx) =>
              !item.active ? (
                <li key={idx}>
                  <Form method="post">
                    <VisuallyHiddenInput
                      type="text"
                      name="id"
                      value={item.id}
                      readOnly
                    />
                    <button type="submit">{item.title}</button>
                  </Form>
                </li>
              ) : null
            )}
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
}
