import { Fragment, useState } from "react";
import { Form, Link } from "@remix-run/react";
import {
  ActiveProjectButton,
  ActiveProjectContainer,
  ProjectsContainer,
  ProjectsItem,
  VisuallyHiddenInput,
} from "./lib";

export default function Projects({
  onOverlay,
  languages,
}: {
  onOverlay: Function;
  languages: any;
}) {
  const [showWindow, setShowWindow] = useState(false);

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
        {languages?.find((item: any) => item.active).title}
      </ActiveProjectButton>

      <ActiveProjectContainer
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
              {languages?.map((item: any, idx: number) => (
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
            <ProjectsItem
              style={{ borderRadius: "0 0 12px 12px", borderBottom: 0 }}
            >
              <Link to="/new-language">Add new language</Link>
            </ProjectsItem>
          </ProjectsContainer>
        ) : null}
      </ActiveProjectContainer>
    </Fragment>
  );
}
