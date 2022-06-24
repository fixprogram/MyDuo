import styled from "@emotion/styled";
import { Form } from "remix";

type ScreenContainerProps = {
  screen: string;
  target: string;
};

const ConstructorForm = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 95px);
`;

const ConstructorFormInner = styled("section")`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  padding-left: 30px;
`;

const LessonTitleInput = styled("input")`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  border: none;
  font-size: 17px;
  font-weight: 700;
  color: #3c3c3c;
  text-align: center;
  margin-top: 8px;
`;

const ConstructorMenu = styled("div")`
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  display: block;
  margin: 0 24px 24px;
  padding: 24px;
  width: 380px;
`;

const ScreenContainer = styled("section")<ScreenContainerProps>`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  visibility: ${(props) =>
    props.screen !== props.target ? "hidden" : "visible"};
`;

const ConstructorSidebar = styled("section")`
  max-width: 25%;
  display: flex;
  flex-direction: column;
  padding-bottom: 71px;
  position: relative;
  background-color: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  margin: 0 24px 24px;
  padding: 24px;
`;

export {
  LessonTitleInput,
  ConstructorMenu,
  ScreenContainer,
  ConstructorSidebar,
  ConstructorForm,
  ConstructorFormInner,
};
