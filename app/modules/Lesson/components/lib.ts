/** @jsxRuntime classic */
/** @jsx jsx */
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Form } from "remix";
import RightIcon from "~/styles/right.svg";
import WrongIcon from "~/styles/wrong.svg";

type LessonFooterProps = {
  stateRight?: boolean;
  stateWrong?: boolean;
  status: string;
};
type LessonButtonProps = {
  active?: boolean;
  stateWrong?: boolean;
  stateRight?: boolean;
  skip?: boolean;
  hidden?: boolean;
};
type VariantItemProps = {
  isFocused: boolean;
};

const LessonContainer = styled("section")`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LessonFooter = styled("section")<LessonFooterProps>`
  padding: 0 40px;
  width: 100%;
  height: 140px;
  border-top: 2px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${({ status }) =>
    status === "right" ? "#d7ffb8" : status === "wrong" ? "#ffdfe0" : "#fff"};
  color: ${({ status }) =>
    status === "right" ? "#58a700" : status === "wrong" ? "#ea2b2b" : "#fff"};
`;

const LessonFooterInner = styled("div")`
  max-width: 920px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const LessonFooterMessage = styled("div")<LessonFooterProps>`
  width: 100%;
  display: ${({ status }) =>
    status === "right" || status === "wrong" ? "flex" : "none"};
  align-items: center;
`;

const LessonFooterTitle = styled("h2")`
  margin: 0;
  font-family: "Nunito", sans-serif;
  line-height: 30px;
  font-size: 24px;
  letter-spacing: 0.2px;
`;

const LessonFooterText = styled("p")`
  margin: 5px 0 0 0;
  font-size: 17px;
  font-family: "Nunito";
  overflow-y: scroll;
  max-height: 60px;
`;

const LessonButton = styled("button")<LessonButtonProps>`
  border: 0 solid transparent;
  background-color: ${(props) =>
    props.stateWrong
      ? "#ff4b4b"
      : props.stateRight
      ? "#58cc02"
      : props.active
      ? "#78C83D"
      : props.skip
      ? "#fff"
      : "#E5E5E5"};
  color: ${(props) => (props.active ? "#fff" : "#AFAFAF")};
  border-color: ${(props) =>
    props.stateWrong
      ? "#ea2b2b"
      : props.stateRight
      ? "#58a700"
      : props.skip
      ? "#e5e5e5"
      : "white"};
  border-width: ${(props) => (props.skip ? "2px" : 0)};
  border-bottom-width: ${(props) =>
    props.active || props.skip ? `4px` : "transparent"};
  border-bottom-color: ${(props) =>
    props.skip ? "#e5e5e5" : props.stateWrong ? "#ea2b2b" : "#58a700"};
  height: 50px;
  width: 150px;
  cursor: ${(props) => (props.active || props.skip ? "pointer" : "default")};
  text-transform: uppercase;
  font-family: "Nunito";
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.8px;
  border-radius: 15px;
  padding: 0 20px;
  display: ${(props) => (props.hidden ? "none" : "block")};
  transition: filter 0.2s;
  &:hover:enabled {
    filter: ${(props) => (props.skip ? "brightness(.9)" : "brightness(1.1)")};
  }
  &:active:enabled {
    filter: ${(props) => (props.skip ? "brightness(.9)" : "brightness(1.1)")};
    border-bottom-width: ${(props) => (props.skip ? `2px` : "0")};
    height: 46px;
    transform: translateY(4px);
  }
`;

const LessonAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateX(150px)
  }

  100% {
    opacity: 1;
    transform: translateX(0)
  }
`;

const LessonBody = styled("div")`
  margin: 72px 29% 4%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: calc(100% - 240px);
  animation-name: ${LessonAppear};
  animation-duration: 0.2s;
`;

const LessonBodyTitle = styled("h3")`
  font-family: "Nunito";
  font-size: 23px;
  font-weight: 700;
  color: #4b4b4b;
  text-align: center;
  margin-bottom: 13px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  background-color: #fff;
`;

const LessonBodyMessage = styled("div")`
  padding: 12px 15px 12px 21px;
  border: 2px solid #dedede;
  font-family: "Nunito";
  font-weight: 400;
  font-size: 18px;
  color: #4c4c4c;
  margin: 0 21px;
  position: relative;
  z-index: 1;
`;

const LessonBodyVariants = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const LessonBodyVariant = styled("div")<LessonButtonProps>`
  position: relative;
  border-radius: 15px;
  border: 2px solid #e5e5e5;
  border-bottom: 4px solid #e5e5e5;
  cursor: pointer;
  padding: 18px 0;
  text-align: center;
  margin-top: 14px;
  border-color: ${(props) =>
    props.active
      ? "#98D6FC"
      : props.stateRight
      ? "#B6EB7E"
      : props.stateWrong
      ? "#E9A8A6"
      : null};
  background-color: ${(props) => (props.active ? "#E1F3FE" : "inherit")};
  color: ${(props) => (props.active ? "#4897D1" : "inherit")};
`;

const LessonBodyWelcome = styled("div")``;

const LessonBodyResults = styled("div")``;

const VariantItem = styled("button")<VariantItemProps>`
  background-color: ${(props) =>
    props.isFocused ? "rgb(221, 244, 255)" : "inherit"};
  height: 60px;
  border: 1px solid;
  border-color: ${(props) =>
    props.isFocused ? "rgb(132, 216, 255)" : "#e5e5e5"};
  border-radius: 12px;
  border-width: 2px 2px 4px;
  cursor: pointer;
  position: relative;
  touch-action: manipulation;
  transform: translateZ(0);
  user-select: none;
  text-align: center;
  color: ${(props) => (props.isFocused ? "rgb(24, 153, 214)" : "#4b4b4b")};
  font-size: 19px;
  line-height: 1.4;
  padding: 12px 16px;
  width: 100%;
`;

const LessonTitle = styled("h1")`
  font-size: 30px;
  font-family: "Nunito", sans-serif;
  line-height: 1.25;
  color: #3c3c3c;
  text-align: left;
  font-weight: 800;
  cursor: default;
  margin: 0;
`;

const LessonQuestion = styled("p")`
  font-size: 19px;
  line-height: 39px;
  font-family: "Nunito", sans-serif;
  color: #3c3c3c;
  padding: 12px 24px;
  margin-left: 8px;
  background-color: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 15px;
  box-sizing: border-box;
  cursor: default;
`;

const LessonQuestionTriangleContainer = styled("div")`
  height: 10px;
  overflow: hidden;
  width: 20px;
  position: absolute;
  left: -5px;
  margin: 15px 0;
  top: calc(50% - 15px);
  transform: translateY(-50%) rotate(-90deg);
`;

const LessonQuestionTriangle = styled("span")`
  box-sizing: border-box;
  position: absolute;
  background-color: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 2px;
  content: "";
  height: 14.14427px;
  left: 50%;
  transform: rotate(45deg);
  transform-origin: top left;
  width: 14.14427px;
`;

const messageIconAppear = keyframes`

  50% {
    transform: scale(1.1)
  }

  75% {
    transform: scale(0.9)
  }

  100% {
    transform: scale(1)
  }
`;

const LessonFooterIcon = styled("div")<LessonFooterProps>`
  border-radius: 98px;
  display: block;
  float: left;
  height: 80px;
  width: 80px;
  background: url(${({ status }) =>
    status === "right" ? RightIcon : WrongIcon});

  background-position: ${({ status }) =>
    status === "right" ? "-145px -64px" : "-183px -65px"};
  background-color: #fff;
  display: block;
  animation-name: ${messageIconAppear};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`;

const ResultsContainer = styled("section")`
  display: flex;
  height: calc(100vh - 140px);
  justify-content: center;
`;

const ResultsHiddenForm = styled(Form)`
  position: absolute;
  width: 1px;
  height: 1px;
  top: -1000px;
  left: -1000px;
`;

const ResultsTitle = styled("h2")`
  margin: 0;
  font-family: "Nunito";
`;

const ResultsLeftBlock = styled("div")`
  padding: 50px 100px;
  width: calc(50% - 1px);
`;

const ResultsSeparateLine = styled("div")`
  width: 4px;
  background-color: #e5e5e5;
`;

export {
  LessonContainer,
  LessonFooter,
  LessonFooterInner,
  LessonFooterMessage,
  LessonFooterTitle,
  LessonFooterText,
  LessonButton,
  LessonBody,
  LessonBodyTitle,
  LessonBodyMessage,
  LessonBodyVariants,
  LessonBodyVariant,
  LessonBodyWelcome,
  LessonBodyResults,
  VariantItem,
  LessonTitle,
  LessonQuestion,
  LessonQuestionTriangleContainer,
  LessonQuestionTriangle,
  LessonFooterIcon,
  ResultsContainer,
  ResultsHiddenForm,
  ResultsTitle,
  ResultsLeftBlock,
  ResultsSeparateLine,
};
