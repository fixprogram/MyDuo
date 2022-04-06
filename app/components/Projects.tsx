import { Fragment, useContext, useState } from "react";
import { Form } from "@remix-run/react";
import { ProjectContext } from "~/routes/$projectTitle";
import {
  ActiveProjectButton,
  ActiveProjectForm,
  ProjectsContainer,
  ProjectsInput,
  ProjectsItem,
  VisuallyHiddenInput,
} from "./lib";

export default function Projects({ onOverlay }: { onOverlay: Function }) {
  const [showWindow, setShowWindow] = useState(false);
  const [isNewProject, setIsNewProject] = useState(false);
  const value: any = useContext(ProjectContext);
  const { projects } = value;

  return (
    <Fragment>
      <ActiveProjectButton
        type="button"
        onMouseEnter={() => {
          onOverlay(true);
          setShowWindow(true);
        }}
        onMouseLeave={() => {
          onOverlay(false);
          setShowWindow(false);
        }}
      >
        {projects?.find((item: any) => item.active).title}
      </ActiveProjectButton>

      <ActiveProjectForm
        method="post"
        onMouseEnter={() => {
          onOverlay(true);
          setShowWindow(true);
        }}
        onMouseLeave={() => {
          onOverlay(false);
          setShowWindow(false);
        }}
      >
        {showWindow ? (
          <ProjectsContainer>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              {projects?.map((item: any, idx: number) => (
                <li
                  key={idx}
                  style={{
                    backgroundColor: item.active ? "#afafaf" : "inherit",
                    order: item.active ? 0 : 1,
                    borderRadius: item.active ? "10px 10px 0 0" : 0,
                  }}
                >
                  <Form method="post">
                    <VisuallyHiddenInput
                      type="text"
                      name="id"
                      value={item.id}
                      readOnly
                    />
                    <ProjectsItem type="submit">{item.title}</ProjectsItem>
                  </Form>
                </li>
              ))}
            </ul>
            <fieldset style={{ position: "relative" }}>
              {isNewProject ? (
                <Fragment>
                  <ProjectsInput
                    type="text"
                    placeholder="Type it's title"
                    name="newProject"
                    onChange={() => {
                      onOverlay(true);
                      setShowWindow(true);
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      position: "absolute",
                      fontSize: 30,
                      top: 7,
                      right: 15,
                      color: "#afafaf",
                    }}
                  >
                    +
                  </button>
                </Fragment>
              ) : (
                <ProjectsItem
                  type="button"
                  onClick={() => setIsNewProject(true)}
                >
                  Add new project
                </ProjectsItem>
              )}
            </fieldset>
          </ProjectsContainer>
        ) : null}
      </ActiveProjectForm>
    </Fragment>
  );
}
