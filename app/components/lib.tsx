import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink, Link } from "@remix-run/react";
import { PHONE_MEDIA_MAX, TABLET_MEDIA_MAX } from "~/constants";

type FormButtonProps = {
  active?: boolean;
};

type ProgressProps = {
  progress: number;
};

type KeywordProps = {
  active: boolean;
};

type OverlayProps = {
  active: boolean;
};

type LessonProgressProps = {
  exp: number;
};

type LessonBlockMenuProps = {
  isOpened: boolean;
};

type LessonProgressInnerProps = {
  isDisabled?: boolean;
};

type MenuStreakProps = {
  wasToday: boolean;
};

const HorizontalList = styled("ul")`
  display: flex;
  align-ttems: center;
  justify-content: space-between;
  margin: 0;
  height: 100%;
  max-width: 400px;

  @media (max-width: ${TABLET_MEDIA_MAX}px) {
    flex-grow: 1;
  }

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    max-width: 100%;
    width: 100%;
    padding: 0;
  }
`;

const ListItem = styled("li")`
  height: 100%;
  margin: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${TABLET_MEDIA_MAX}px) {
    margin: auto;
  }
`;

const LessonsContainer = styled("section")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

const LessonsBlock = styled("div")`
  grid-column-gap: 12px;
  display: grid;
  grid-auto-columns: calc(33.33333% - 8px);
  grid-auto-flow: column;
  justify-content: center;
  padding: 16px 12px;
`;

const LessonBlock = styled("div")`
  width: 33%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuAppear = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -40px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%, 0);
  }
`;

const LessonBlockMenu = styled("div")<LessonBlockMenuProps>`
  display: ${(props) => (props.isOpened ? "block" : "none")};
  position: absolute;
  left: 50%;
  top: calc(100% + 20px);
  transform: translate(-50%);
  z-index: 1;
  animation-name: ${MenuAppear};
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
`;

const LessonBlockMenuTriangle = styled("div")`
  left: calc(50% - 15px);
  transform: translateX(-50%);
  margin: 0 15px;
  top: -8px;
  height: 10px;
  overflow: hidden;
  width: 20px;
  box-sizing: border-box;
  position: absolute;
`;

const LessonBlockMenuTriangleContent = styled("span")`
  background-color: #ce82ff;
  border: 0;
  position: absolute;
  content: "";
  border-radius: 2px;
  height: 14.14427px;
  left: 50%;
  transform: rotate(45deg);
  transform-origin: top left;
  width: 14.14427px;
`;

const LessonBlockInner = styled("div")`
  background-color: #ce82ff;
  color: #fff;
  padding: 16px;
  text-align: center;
  width: 295px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    width: 170px;
  }
`;

const LessonBlockLink = styled(Link)`
  color: #ce82ff;
  background-color: #fff;
  flex-grow: 1;
  text-transform: uppercase;
  margin-top: 12px;
  border-width: 0 0 4px;
  padding: 13px 16px;
  font-size: 15px;
  line-height: 20px;
  border-color: inherit;
  border-radius: 18px;
  text-decoration: none;
  font-family: "Nunito";
  font-weight: 700;
  letter-spacing: 0.8px;
  &:hover {
    filter: brightness(1.1);
  }

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    font-size: 14px;
  }
`;

const LessonBlockButton = styled("button")`
  color: #ce82ff;
  background-color: #fff;
  flex-grow: 1;
  text-transform: uppercase;
  margin-top: 12px;
  margin-left: 10px;
  border-width: 0 0 4px;
  padding: 13px 16px;
  font-size: 15px;
  line-height: 20px;
  border-color: inherit;
  border-radius: 18px;
  text-decoration: none;
  font-family: "Nunito";
  font-weight: 700;
  letter-spacing: 0.8px;
  &:hover img {
    filter: brightness(1.1);
  }

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    font-size: 14px;
  }
`;

const LessonBlockTitle = styled("div")`
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
    font-family: "Nunito";
    color: #4b4b4b;
    flex-grow: 0.3;
  }
`;

const LessonBlockItem = styled.a(() => ({
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

const ProgressBarContainer = styled("div")`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const ProgressBar = styled("div")<ProgressProps>`
  width: 100%;
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
    transition: width 0.2s ease;
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

const LeaveLessonButton = styled("button")`
  margin-right: 21px;
  height: 16px;
  margin-top: -3px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: inherit;
`;
const LeaveLessonLink = styled(Link)`
  margin-right: 21px;
  height: 16px;
  margin-top: -3px;
`;

const Input = styled("input")`
  background-color: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 10px 12px;
  width: 100%;
`;

const Textarea = styled("textarea")`
  background-color: rgb(247, 247, 247);
  border: 2px solid rgb(229, 229, 229);
  // border-radius: 10px;
  padding: 10px 12px;
  min-height: 170px;
  width: 100%;
  -webkit-appearance: none;
  resize: none;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  line-height: 24px;
  color: #3c3c3c;
  font-size: 19px;
  font-family: "Nunito";
  font-weight: 400;
  letter-spacing: 1px;
`;

const LoginTitle = styled("h1")`
  font-size: 26px;
  margin: 10px 0 15px;
  font-family: Nunito;
  font-weight: 700;
  text-align: center;
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
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  letter-spacing: 0.6px;
`;

const Legend = styled("legend")`
  color: #4b4b4b;
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.6;
  margin: 0;
  text-align: center;
  font-family: "Nunito", sans-serif;
`;

const FormButton = styled("button")<FormButtonProps>`
  background-color: ${(props) =>
    props.active ? "#78C83D" : props.disabled ? "#E5E5E5" : "#fff"};
  color: ${(props) =>
    props.active ? "#fff" : props.disabled ? "#AFAFAF" : "#1cb0f6"};
  border: ${(props) => (props.active ? "none" : "2px solid #e5e5e5")};
  height: 50px;
  box-shadow: ${(props) =>
    props.active ? "0px -4px 0px 0px rgba(108, 164, 48, 1) inset" : "none"};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  width: 150px;
  text-transform: uppercase;
  font-family: "Nunito";
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.8px;
  border-radius: 15px;
  padding: 0 20px;
  display: ${(props) => (props.hidden ? "none" : "block")};
  transition: filter 0.2s;
  order: 3;
  &:hover:enabled {
    filter: brightness(1.1);
  }
  &:active:enabled {
    filter: brightness(1.1);
    height: 46px;
    transform: translateY(4px);
  }

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    width: 100px;
  }
`;

const KeywordTemplate = styled("span")<KeywordProps>`
  margin-right: 10px;
  cursor: pointer;
  border: ${(props) => props.active && "1px solid blue"};
`;

const LessonProgress = styled("div")<LessonProgressProps>`
  animation: growProgressBar 3s 1 forwards;
  width: 106px;
  height: 106px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(
      closest-side,
      white 85%,
      transparent 0 99.9%,
      white 0
    ),
    conic-gradient(#ffd900 calc(${(props) => props.exp} * 1%), #e5e5e5 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  font-family: "Nunito";
  color: #1cb0f6;
  position: relative;

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    width: 65px;
    height: 65px;
  }
`;

const LessonProgressInner = styled("div")<LessonProgressInnerProps>`
  border-radius: 50%;
  height: 68%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 68%;
  background: #ce82ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: ${(props) => (props.isDisabled ? 1 : 0.85)};
  }
`;

const Main = styled("main")`
  margin: 24px auto 0;
  width: 100%;
  max-width: 1328px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
  @media (max-width: ${TABLET_MEDIA_MAX}px) {
    padding: 0 16px;
  }
`;

const LessonTitle = styled("b")`
  font-size: 17px;
  font-weight: 700;
  color: #3c3c3c;
  text-align: center;
  margin-top: 8px;
  display: block;
`;

const NavIcon = styled("img")`
  margin-right: 10px;
  width: 36px;
  height: 36px;

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    margin: 0;
  }
`;

const LoginContainer = styled("section")`
  padding: 30px;
  height: 100vh;
  left: 0;
  overflow-y: auto;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
`;

const LoginContinerInner = styled(`div`)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const LoginInput = styled("input")`
  background: transparent;
  flex-grow: 1;
  line-height: 27px;
  width: 100%;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  font-size: 100%;
  background: #f7f7f7;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  padding: 8px 16px;
  display: inline-flex;
  margin-top: 8px;
`;

const LoginButton = styled("button")`
  width: 100%;
  letter-spacing: 0.8px;
  font: 700 15px "Nunito";
  padding: 0 16px;
  height: 50px;
  color: white;
  border: none;
  border-bottom: 4px solid rgba(133, 133, 133, 0.5);
  border-radius: 16px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #1cb0f6;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    margin-top: 4px;
    border: none;
    height: 46px;
  }
`;

const LoginToggle = styled("label")`
  position: absolute;
  top: 0;
  right: 0;
  letter-spacing: 0.8px;
  font: 700 15px "Nunito";
  line-height: 1.2;
  padding: 0 16px;
  height: 50px;
  color: #1cb0f6;
  border: 2px solid #e5e5e5;
  border-bottom: 4px solid #e5e5e5;
  border-radius: 16px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    border-bottom-width: 2px;
  }
`;

const MenuContainer = styled("div")`
  width: 100%;
  border-top: 1px solid #dadcde;
  border-bottom: 2px solid #dadcde;
`;

const MenuInner = styled("div")`
  width: 100%;
  max-width: 1328px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  height: 68px;

  @media (max-width: ${TABLET_MEDIA_MAX}px) {
    padding: 0 16px;
  }

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    padding: 0;
  }
`;

const NavigationList = styled(HorizontalList)`
  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    border-top: 2px solid #dadcde;
    min-height: 68px;
    justify-content: space-evenly;
  }
`;

const NavigationListItem = styled(ListItem)`
  @media (max-width: ${TABLET_MEDIA_MAX}px) {
    margin: 0 24px;
  }

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    flex-grow: 1;
    height: 68px;
  }
`;

const MenuNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Nunito";
  font-weight: 800;
  font-size: 15px;
  color: #afafaf;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.7) contrast(2.5);
  }
  &.active:hover {
    filter: none;
  }
  @media (max-width: 720px) {
    font-size: 0;
  }
`;

const ActiveLanguageButton = styled("button")`
  color: #3c3c3c;
  border: none;
  background-color: inherit;
  font-family: "Nunito";
  font-weight: 800;
  letter-spacing: 0.8px;
  cursor: pointer;
`;

const ActiveLanguageContainer = styled("div")`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 200px;
  padding: 20px 0;
  z-index: 9;
`;

const LanguagesContainer = styled("div")`
  border: 2px solid #dadcde;
  border-radius: 15px;
  background-color: white;
`;

const LanguagesList = styled("ul")`
  display: flex;
  flex-direction: column;
`;

const LanguagesItem = styled("button")`
  border: none;
  border-bottom: 2px solid #dadcde;
  width: 100%;
  cursor: pointer;
  padding: 16px 20px;
  background-color: inherit;
  color: #3c3c3c;
  font-family: "Nunito";
  font-weight: 700;
  letter-spacing: 0.8px;
  text-align: left;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(175, 175, 175, 0.15);
  }
`;

const LanguagesInput = styled("input")`
  border: none;
  border-bottom: 2px solid #dadcde;
  border-radius: 0 0 10px 10px;
  width: 100%;
  cursor: pointer;
  padding: 20px 30px 20px 20px;
  background-color: inherit;
  color: #3c3c3c;
  font-family: "Nunito";
  font-weight: 700;
  letter-spacing: 0.8px;
  text-align: left;
`;

const LanguagesAddBtn = styled("button")`
  position: absolute;
  font-size: 30px;
  top: 7px;
  right: 15px;
  color: #afafaf;
`;

const Overlay = styled("div")<OverlayProps>`
  background: rgba(28, 97, 130, 0.1);
  bottom: 0;
  left: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 71px;
  transition: opacity 0.3s;
  z-index: 3;
`;

const Logout = styled("button")`
  border: none;
  cursor: pointer;
  background-color: inherit;
  color: #afafaf;
  font-family: "Nunito";
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 0;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.7) contrast(2.5);
  }
`;

const PracticeLastAddedContainer = styled("div")`
  display: flex;
  align-items: flex-end;
`;

const PracticeLastAddedWrapper = styled("div")`
  height: 72px;
  width: 72px;
  border-radius: 50%;
  border: solid #e5e5e5;
  border-width: 2px 2px 4px;
  position: sticky;
  margin-bottom: 54px;
  bottom: 24px;
  background-color: #fff;
  transition: filter 0.1s ease;
  &:hover {
    filter: brightness(0.9);
  }
`;

const PracticeLastAddedLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  filter: inherit;
`;

const ErrorMessage = styled("p")`
  line-height: 20px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.3px;
  color: #ea2b2b;
`;

const SkillsListContainer = styled("section")`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 95px);
  flex-grow: 1;
  @media (max-width: ${TABLET_MEDIA_MAX}px) {
    padding: 0 20px;
    width: 100%;
  }

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    padding: 0 10px;
    height: calc(100vh - 165px);
    overflow-y: scroll;
  }
`;

const SkillsListInner = styled("div")`
  display: flex;
  flex-grow: 1;
`;

const SkillsLineBlock = styled("div")`
  width: 100%;
  max-width: 440px;
  margin: 0 auto 38px auto;

  @media (max-width: ${PHONE_MEDIA_MAX}px) {
    max-width: 100%;
    margin-left: -72px;
  }
`;

const MenuStreak = styled("b")<MenuStreakProps>`
  font-family: "Nunito";
  color: ${(props) => (props.wasToday ? "#ff9600" : "#e5e5e5")};
`;

export {
  ProgressBarContainer,
  SkillsListInner,
  ProgressBar,
  LeaveLessonButton,
  LeaveLessonLink,
  HorizontalList,
  ListItem,
  NavLink,
  LessonsBlock,
  LessonBlock,
  LessonsContainer,
  LessonBlockLink,
  LessonBlockButton,
  LessonBlockInner,
  LessonBlockTitle,
  LessonBlockItem,
  UserImage,
  Input,
  Textarea,
  Fieldset,
  InputTextLabel,
  TextareaLabel,
  LabelText,
  Legend,
  FormButton,
  KeywordTemplate,
  LessonProgress,
  LessonProgressInner,
  Main,
  LessonTitle,
  NavIcon,
  LoginContainer,
  LoginContinerInner,
  LoginButton,
  LoginInput,
  LoginToggle,
  MenuContainer,
  MenuInner,
  NavigationList,
  NavigationListItem,
  MenuNavLink,
  Logout,
  Overlay,
  ActiveLanguageButton,
  ActiveLanguageContainer,
  LanguagesContainer,
  LanguagesList,
  LanguagesItem,
  LanguagesInput,
  LanguagesAddBtn,
  LessonBlockMenu,
  LessonBlockMenuTriangle,
  LessonBlockMenuTriangleContent,
  LoginTitle,
  PracticeLastAddedContainer,
  PracticeLastAddedWrapper,
  PracticeLastAddedLink,
  ErrorMessage,
  SkillsListContainer,
  SkillsLineBlock,
  MenuStreak,
};
