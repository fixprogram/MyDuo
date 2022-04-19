import styled from "@emotion/styled";

type InsertWordsTextBlockProps = {
  showText?: boolean;
};

type VariantItemNumberProps = {
  isConnected?: boolean;
  isFocused: boolean;
};

const StepContent = styled("div")`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 60px 24px;
  min-height: 300px;
  margin-top: 20px;
`;

const StepHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
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

const InsertWordsTextBlock = styled("div")<InsertWordsTextBlockProps>`
  min-height: 200px;
  width: 100%;
  margin-top: -206px;
  padding: 10px 12px;
  border: 1px solid #e5e5e5;
  background-color: #f7f7f7;
  border-radius: 10px;
  position: relative;
  z-index: ${(props) => (props.showText ? "2" : "0")};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: border-box;
`;

const VariantItemInput = styled("input")`
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  outline: 0;
  position: relative;
  touch-action: manipulation;
  transform: translateZ(0);
  user-select: none;
  text-align: center;
  color: #4b4b4b;
  font-size: 19px;
  line-height: 1.4;
  padding: 12px 16px;
  width: 100%;
`;

const VariantItemNumber = styled("span")<VariantItemNumberProps>`
  border: 2px solid #e5e5e5;
  border-color: ${(props) =>
    props.isConnected ? "green" : props.isFocused ? "blue" : "#e5e5e5"};
  border-radius: 8px;
  color: ${(props) =>
    props.isConnected ? "green" : props.isFocused ? "blue" : "#afafaf"};
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 12px;
  left: 16px;
  z-index: 1;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
`;

export {
  StepHeader,
  StepContent,
  ChooseStyle,
  StyleButton,
  InsertWordsTextBlock,
  VariantItemInput,
  VariantItemNumber,
};
