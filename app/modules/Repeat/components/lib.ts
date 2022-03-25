/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";

const RepeatFooter = styled("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 140px;
  border-top: 2px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.stateRight ? "#d7ffb8" : props.stateWrong ? "#ffdfe0" : "#fff"};
  color: ${(props) =>
    props.stateRight ? "#58a700" : props.stateWrong ? "#ea2b2b" : "#fff"};
`;

const RepeatFooterMessage = styled("div")`
  max-width: 1000px;
  display: flex;
  align-items: center;
  visibility: ${(props) =>
    props.stateRight ? "visible" : props.stateWrong ? "visible" : "hidden"};
`;

const RepeatFooterTitle = styled("h2")`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  line-height: 30px;
  font-size: 24px;
  letter-spacing: 0.2px;
`;

const RepeatFooterText = styled("p")`
  margin: 5px 0 0 0;
  font-size: 17px;
`;

const RepeatButton = styled("button")`
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
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.8px;
  border-radius: 15px;
`;

const RepeatBody = styled("div")`
  margin: 72px 29% 240px 32%;
  flex-grow: 1;
  position: relative;
  max-height: 70%;
`;

const RepeatBodyTitle = styled("h3")`
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

const RepeatBodyMessage = styled("div")`
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

const RepeatBodyVariants = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const RepeatBodyVariant = styled("div")`
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

const RepeatBodyWelcome = styled("div")``;

const RepeatBodyResults = styled("div")``;

const VariantItem = styled("button")`
  background-color: inherit;
  height: 60px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  outline: 0;
  cursor: pointer;
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

const RepeatTitle = styled("h1")`
  font-size: 32px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.25;
  color: #3c3c3c;
`;

const RepeatQuestion = styled("p")`
  font-size: 19px;
  line-height: 39px;
  font-family: "Montserrat", sans-serif;
  color: #3c3c3c;
  padding: 12px 24px;
  margin-left: 8px;
  background-color: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 15px;
  box-sizing: border-box;
`;

const RepeatQuestionTriangleContainer = styled("div")`
  height: 10px;
  overflow: hidden;
  width: 20px;
  position: absolute;
  left: -5px;
  margin: 15px 0;
  top: calc(50% - 15px);
  transform: translateY(-50%) rotate(-90deg);
`;

const RepeatQuestionTriangle = styled("span")`
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

const RepeatFooterIcon = styled("div")`
  background: #fff;
  border-radius: 98px;
  display: block;
  float: left;
  height: 80px;
  width: 80px;
`;

export {
  RepeatFooter,
  RepeatFooterMessage,
  RepeatFooterTitle,
  RepeatFooterText,
  RepeatButton,
  RepeatBody,
  RepeatBodyTitle,
  RepeatBodyMessage,
  RepeatBodyVariants,
  RepeatBodyVariant,
  RepeatBodyWelcome,
  RepeatBodyResults,
  VariantItem,
  RepeatTitle,
  RepeatQuestion,
  RepeatQuestionTriangleContainer,
  RepeatQuestionTriangle,
  RepeatFooterIcon,
};
