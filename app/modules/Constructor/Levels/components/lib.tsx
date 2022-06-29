import styled from "@emotion/styled";

type InsertWordsTextBlockProps = {
  showText?: boolean;
};

type VariantItemNumberProps = {
  isConnected?: boolean;
  isFocused: boolean;
};

type InsertWordsInputProps = {
  length: number;
  isToChoose?: boolean;
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
  padding: 35px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  font-family: "Roboto";
`;

const InsertWordsTextBlock = styled("div")<InsertWordsTextBlockProps>`
  min-height: 200px;
  flex-grow: 1;
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  position: relative;
  z-index: ${(props) => (props.showText ? "2" : "0")};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: border-box;
  font-size: 19px;
  font-family: "Roboto";
  line-height: 40px;
`;

const InsertWordsInput = styled("input")<InsertWordsInputProps>`
  outline: none;
  border: none;
  font-size: 19px;
  margin: 9px 7px 0;
  width: ${(props) => props.length * 13}px;
  border-bottom: 2px solid #afafaf;
  cursor: ${(props) => (props.isToChoose ? "pointer" : "text")};
  &:disabled {
    background: inherit;
    cursor: default;
  }
`;

const InsertWordsAnswerField = styled("span")<InsertWordsInputProps>`
  margin: 9px 7px 0;
  width: ${(props) => props.length * 13}px;
  border-bottom: 2px solid #afafaf;
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
    props.isConnected
      ? "green"
      : props.isFocused
      ? "rgb(132, 216, 255)"
      : "#e5e5e5"};
  border-radius: 8px;
  color: ${(props) =>
    props.isConnected
      ? "green"
      : props.isFocused
      ? "rgb(24, 153, 214)"
      : "#afafaf"};
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
  InsertWordsInput,
  InsertWordsAnswerField,
  VariantItemInput,
  VariantItemNumber,
};
