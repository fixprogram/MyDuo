import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

type FormButtonProps = {
  active?: boolean;
};

type ProgressProps = {
  progress: number;
};

type KeywordProps = {
  active: boolean;
};

type LessonProgressProps = {
  exp: string;
};

const HorizontalList = styled.ul((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: 0,
  height: "100%",
  padding: 0,
}));

const ListItem = styled.li((props) => ({
  height: "100%",
  paddingLeft: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const PracticeBlock = styled.section((props) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: "52px",
}));

const PracticeBlockTitle = styled("div")`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 26px;
  padding-bottom: 20px;
  text-align: center;
  width: 100%;
  & span {
    height: 2px;
    background-color: #e5e5e5;
    flex-grow: 1;
  }
  & h2 {
    font-size: 24px;
    font-weight: 700;
    font-family: "Roboto";
    color: #4b4b4b;
    flex-grow: 0.3;
  }
`;

const PracticeBlockItem = styled.a(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "33.33%",
  textDecoration: "none",
}));

const UserImage = styled.img(
  {
    borderRadius: "100%",
  },
  (props) => ({ width: props.width, height: props.height })
);

const ProgressBar = styled("div")<ProgressProps>`
  width: 61%;
  height: 16px;
  position: relative;
  background-color: #e5e5e5;
  position: relative;
  border-radius: 7px;
  &:before,
  &:after {
    content: "";
    display: block;
    width: ${(props) => props.progress * 100}%;
    height: 16px;
    background-color: #58cc02;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 7px;
  }
  &:after {
    height: 30%;
    top: 25%;
    left: 8px;
    right: 8px;
    width: calc(${(props) => props.progress * 100}% - 16px);
    background: white;
    opacity: 0.2;
  }
`;

const Input = styled("input")`
  background-color: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 10px 12px;
  width: 100%;
`;

const Textarea = styled("textarea")`
  background-color: #f7f7f7;
  border-color: #e5e5e5;
  border-radius: 10px;
  padding: 10px 12px;
  min-height: 200px;
  width: 100%;
  -webkit-appearance: none;
  resize: none;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  line-height: 24px;
  color: #3c3c3c;
  font-size: 100%;
  font-family: "Roboto";
  font-weight: 500;
`;

const Fieldset = styled("fieldset")`
  margin-top: 20px;
`;

const InputTextLabel = styled("label")`
  width: 49%;
  margin-right: 1%;
`;

const TextareaLabel = styled("label")`
  width: 100%;
`;

const LabelText = styled("span")`
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
  color: #4b4b4b;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  letter-spacing: 0.6px;
`;

const Legend = styled("legend")`
  color: #4b4b4b;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 14px;
  margin-top: 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const FormButton = styled("button")<FormButtonProps>`
  background-color: ${(props) => (props.active ? "#78C83D" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#1cb0f6")};
  border: ${(props) => (props.active ? "none" : "2px solid #e5e5e5")};
  height: 50px;
  box-shadow: ${(props) =>
    props.active ? "0px -4px 0px 0px rgba(108, 164, 48, 1) inset" : "none"};
  width: 150px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Montserrat";
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.3px;
  border-radius: 15px;
`;

const VisuallyHiddenInput = styled("input")`
  position: absolute;
  visibility: hidden;
  top: 0;
  left: 0;
  width: 0px;
  height: 0px;
  margin: 0;
  padding: 0;
  border: none;
`;

const KeywordTemplate = styled("span")<KeywordProps>`
  margin-right: 10px;
  cursor: pointer;
  border: ${(props) => (props.active ? "1px solid blue" : null)};
`;

const LessonProgress = styled("div")<LessonProgressProps>`
  animation: growProgressBar 3s 1 forwards;
  width: 117px;
  height: 117px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(
      closest-side,
      white 80%,
      transparent 0 99.9%,
      white 0
    ),
    conic-gradient(#ffd900 calc(${(props) => props.exp} * 1%), #e5e5e5 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  font-family: "Roboto";
  color: #1cb0f6;
`;

const Main = styled("main")`
  padding: 0 10%;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;

const LessonTitle = styled("b")`
  font-size: 17px;
  font-weight: 700;
  color: #3c3c3c;
  text-align: center;
  margin-top: 8px;
`;

const NavIcon = styled("img")`
  margin-right: 10px;
`;

export {
  ProgressBar,
  HorizontalList,
  ListItem,
  NavLink,
  PracticeBlock,
  PracticeBlockTitle,
  PracticeBlockItem,
  UserImage,
  Input,
  Textarea,
  Fieldset,
  InputTextLabel,
  TextareaLabel,
  LabelText,
  Legend,
  FormButton,
  VisuallyHiddenInput,
  KeywordTemplate,
  LessonProgress,
  Main,
  LessonTitle,
  NavIcon,
};