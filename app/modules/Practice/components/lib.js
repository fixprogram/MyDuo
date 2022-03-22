/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";

const PracticeFooter = styled("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 140px;
  border-top: 2px solid #e5e5e5;
  padding: 0 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.stateRight ? "#d7ffb8" : props.stateWrong ? "#ffdfe0" : "#fff"};
  color: ${(props) =>
    props.stateRight ? "#58a700" : props.stateWrong ? "#ea2b2b" : "#fff"};
`;

const PracticeFooterMessage = styled("div")`
  padding-left: 96px;
  visibility: ${(props) =>
    props.stateRight ? "visible" : props.stateWrong ? "visible" : "hidden"};
`;

const PracticeFooterTitle = styled("h2")`
  margin: 0;
`;

const PracticeFooterText = styled("p")`
  margin: 5px 0 0 0;
`;

const PracticeButton = styled("button")`
  border: 0 solid transparent;
  background-color: ${(props) =>
    props.stateWrong
      ? "#ff4b4b"
      : props.stateRight
      ? "#58cc02"
      : props.active
      ? "#78C83D"
      : "#E5E5E5"};
  color: ${(props) => (props.active ? "#fff" : "#AFAFAF")};
  border-color: ${(props) =>
    props.stateWrong ? "#ea2b2b" : props.stateRight ? "#58a700" : "white"};
  height: 50px;
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
  PracticeFooter,
  PracticeFooterMessage,
  PracticeFooterTitle,
  PracticeFooterText,
  PracticeButton,
  PracticeBody,
  PracticeBodyTitle,
  PracticeBodyMessage,
  PracticeBodyVariants,
  PracticeBodyVariant,
  PracticeBodyWelcome,
  PracticeBodyResults,
};
