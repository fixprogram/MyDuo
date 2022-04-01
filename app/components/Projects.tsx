import { Fragment, useContext, useEffect, useState } from "react";
import { Form, useSubmit } from "remix";
import { ProjectContext } from "~/routes/$projectTitle";
import { VisuallyHiddenInput } from "./lib";

export default function Projects() {
  // console.log("PRPRPR: ", projects);
  //   const [project, setProject] = useState(() =>
  //     projects.find((item) => item.active)
  //   );
  const [showWindow, setShowWindow] = useState(false);
  const value = useContext(ProjectContext);
  const { activeProject, projects } = value;
  const submit = useSubmit();

  // useEffect(() => {
  //   setActiveProject();
  // }, []);

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
                <li
                  key={idx}
                  // onClick={(event) =>
                  //   submit(event.currentTarget, { replace: true })
                  // }
                >
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
