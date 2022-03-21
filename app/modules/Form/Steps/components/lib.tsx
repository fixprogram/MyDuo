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

const InsertWordsTextBlock = styled("div")`
  min-height: 200px;
  width: 100%;
  margin-top: -206px;
  padding: 10px 12px;
  border: 1px solid #e5e5e5;
  background-color: #f7f7f7;
  border-radius: 10px;
  position: relative;
  z-index: ${(props) => (props.showText ? "1" : "-1")};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export { StepHeader, ChooseStyle, StyleButton, InsertWordsTextBlock };
