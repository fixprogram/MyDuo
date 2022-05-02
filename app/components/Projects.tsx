import { Fragment, useState } from "react";
import { Form } from "@remix-run/react";
import {
  ActiveLanguageButton,
  ActiveLanguageContainer,
  VisuallyHiddenInput,
  LanguagesItem,
  LanguagesInput,
  LanguagesContainer,
} from "./lib";

export default function Projects({
  onOverlay,
  languages,
}: {
  onOverlay: Function;
  languages: any;
}) {
  const [showWindow, setShowWindow] = useState(false);
  const [isNewLanguage, setIsNewLanguage] = useState(false);

  return (
    <Fragment>
      <ActiveLanguageButton
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
      </ActiveLanguageButton>

      <ActiveLanguageContainer
        onMouseEnter={() => {
          onOverlay(true);
          setShowWindow(true);
        }}
        onMouseLeave={() => {
          onOverlay(false);
          setShowWindow(false);
        }}
      >
        {showWindow && (
          <LanguagesContainer>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              {languages?.map((item: any, idx: number) => (
                <li
                  key={idx}
                  style={{
                    backgroundColor: item.active
                      ? "rgb(221, 244, 255)"
                      : "inherit",
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
                    <LanguagesItem type="submit">{item.title}</LanguagesItem>
                  </Form>
                </li>
              ))}
            </ul>
            <fieldset style={{ position: "relative" }}>
              {isNewLanguage ? (
                <Form method="post">
                  <LanguagesInput
                    type="text"
                    placeholder="Type it's title"
                    name="newLanguage"
                    onChange={() => {
                      onOverlay(true);
                      setShowWindow(true);
                    }}
                    required
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
                </Form>
              ) : (
                <LanguagesItem
                  type="button"
                  onClick={() => setIsNewLanguage(true)}
                >
                  Add new language
                </LanguagesItem>
              )}
            </fieldset>
          </LanguagesContainer>
        )}
      </ActiveLanguageContainer>
    </Fragment>
  );
}
