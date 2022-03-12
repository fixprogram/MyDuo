/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";

const ProgressBar = styled("div")`
  width: 61%;
  height: 16px;
  position: relative;
  background-color: #e5e5e5;
  position: relative;
  border-radius: 7px;
  &:before {
    content: "";
    display: block;
    width: ${(props) => props.progress * 100}%;
    height: 16px;
    background-color: #79c93d;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 7px;
  }
`;

const PracticeFooter = styled("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 140px;
  border-top: 2px solid #e5e5e5;
  padding: 0 260px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const PracticeButton = styled("button")`
  background-color: ${(props) => (props.active ? "#78C83D" : "#E5E5E5")};
  color: ${(props) => (props.active ? "#fff" : "#AFAFAF")};
  border: none;
  height: 50px;
  box-shadow: ${(props) =>
    props.active ? "0px -4px 0px 0px rgba(108, 164, 48, 1) inset" : "none"};
  width: 150px;
  cursor: ${(props) => (props.active ? "pointer" : "default")};
  text-transform: uppercase;
  font-family: "Montserrat";
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.3px;
  border-radius: 15px;
`;

const PracticeBody = styled("div")`
  margin: 72px 29% 240px 32%;
  flex-grow: 1;
  position: relative;
  max-height: 70%;
`;

const PracticeBodyTitle = styled("h3")`
  font-family: "Montserrat";
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

const PracticeBodyMessage = styled("div")`
  padding: 12px 15px 12px 21px;
  border: 2px solid #dedede;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  color: #4c4c4c;
  margin: 0 21px;
  position: relative;
  z-index: 1;
`;

const PracticeBodyVariants = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const PracticeBodyVariant = styled("div")`
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
      : props.correct
      ? "#B6EB7E"
      : props.incorrect
      ? "#E9A8A6"
      : null};
  background-color: ${(props) => (props.active ? "#E1F3FE" : "inherit")};
  color: ${(props) => (props.active ? "#4897D1" : "inherit")};
`;

const PracticeBodyWelcome = styled("div")``;

const PracticeBodyResults = styled("div")``;

export {
  ProgressBar,
  PracticeFooter,
  PracticeButton,
  PracticeBody,
  PracticeBodyTitle,
  PracticeBodyMessage,
  PracticeBodyVariants,
  PracticeBodyVariant,
  PracticeBodyWelcome,
  PracticeBodyResults,
};
