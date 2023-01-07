import styled from "@emotion/styled";
import Sidebar from "./Sidebar";

type InsertWordsTextBlockProps = {
  isEditingText?: boolean;
};

type VariantItemNumberProps = {
  isConnected?: boolean;
  isFocused: boolean;
};

type InsertWordsInputProps = {
  length: number;
  isToChoose?: boolean;
};

type SidebarBtnProps = {
  isActive: boolean;
};

const StepContainer = styled("section")`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

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
  font-family: "Nunito";
  transition: color 0.2s;
  &:hover {
    color: #1cb0f6;
  }
  &:active {
    color: #1cb0f6;
    filter: brightness(1.1);
  }
`;

const InsertWordsTextBlock = styled("div")<InsertWordsTextBlockProps>`
  min-height: 170px;
  flex-grow: 1;
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  position: relative;
  z-index: ${(props) => (props.isEditingText ? "0" : "2")};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: border-box;
  font-size: 19px;
  font-family: "Nunito";
  margin-top: 30px;
`;

const InsertWordsInput = styled("input")<InsertWordsInputProps>`
  border: none;
  font-size: 19px;
  margin: 0 7px;
  width: ${(props) => props.length * 13 + 5}px;
  border-bottom: 2px solid #afafaf;
  cursor: ${(props) => (props.isToChoose ? "pointer" : "text")};
  caret-color: #1caff6;
  padding: 0;
  &:disabled {
    background: inherit;
    cursor: default;
  }
  &:focus {
    border-bottom-color: #1caff6;
    outline: none;
  }
`;

const InsertWordsAnswerField = styled("span")<InsertWordsInputProps>`
  margin: 0 7px;
  width: ${(props) => props.length * 13}px;
  border-bottom: 2px solid #afafaf;
`;

const VariantsList = styled("ul")`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
`;

const VariantsItem = styled("li")`
  position: relative;
  margin-bottom: 8px;
  background-color: white;
`;

const VariantItemInput = styled("input")`
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  position: relative;
  touch-action: manipulation;
  transform: translateZ(0);
  user-select: none;
  text-align: left;
  color: #4b4b4b;
  font-size: 19px;
  line-height: 1.4;
  padding: 12px 16px 12px 56px;
  width: 100%;
`;

const VariantItemNumber = styled("span")<VariantItemNumberProps>`
  border: 2px solid #e5e5e5;
  border-color: ${(props) =>
    props.isConnected
      ? "#78C83D"
      : props.isFocused
      ? "rgb(132, 216, 255)"
      : "#e5e5e5"};
  border-radius: 8px;
  color: ${(props) =>
    props.isConnected
      ? "#78C83D"
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
  font-family: "Nunito";
`;

const SidebarList = styled("ul")`
  margin-bottom: auto;
`;

const SidebarBtn = styled("button")<SidebarBtnProps>`
  color: #3c3c3c;
  display: block;
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: ${(props) => (props.isActive ? "#dadada" : "inherit")};
  border-radius: 16px;
  width: 100%;
  text-align: left;
  padding: 13px 20px;
  transition: background 0.07s;
  margin-bottom: 2px;
  &:hover {
    background: #dadada;
  }
`;

export {
  StepContainer,
  StepHeader,
  StepContent,
  ChooseStyle,
  StyleButton,
  InsertWordsTextBlock,
  InsertWordsInput,
  InsertWordsAnswerField,
  VariantsList,
  VariantsItem,
  VariantItemInput,
  VariantItemNumber,
  SidebarList,
  SidebarBtn,
};
