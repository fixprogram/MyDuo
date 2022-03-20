import styled from "@emotion/styled";

const StepHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

const ChooseStyle = styled("div")`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content max-content;
  justify-content: center;
  align-items: self-end;
  margin: auto 0;
`;

const StyleButton = styled("button")`
  padding: 15px;
  border: none;
  cursor: pointer;
  font-family: "Roboto";
`;

export { StepHeader, ChooseStyle, StyleButton };
