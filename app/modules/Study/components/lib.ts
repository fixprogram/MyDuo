import styled from "@emotion/styled";

const StudyContainer = styled("section")`
  height: calc(100vh - 95px);
  width: 83%;
  cursor: text;
`;

const StudyTextareaTemplate = styled("textarea")`
  width: 100%;
  border: none;
  resize: none;
  overflow: hidden;
  outline: none;
  box-shadow: none;
  &:focus,
  &:focus-visible {
    border: none;
  }
`;

const StudyInputTemplate = styled("input")`
  border: none;
  outline: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  padding: 3px 2px;
  width: 100%;
`;

const PageTitleInput = styled("input")`
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-family: "Montserrat";
  margin-bottom: 20px;
  border: none;
`;

export {
  StudyContainer,
  StudyTextareaTemplate,
  StudyInputTemplate,
  PageTitleInput,
};
