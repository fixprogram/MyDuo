import styled from "@emotion/styled";
import { TABLET_MEDIA_MAX, PHONE_MEDIA_MAX } from "~/constants";

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

const LogoutButton = styled("button")`
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

const MenuStreak = styled("b")<MenuStreakProps>`
  font-family: "Nunito";
  color: ${(props) => (props.wasToday ? "#ff9600" : "#e5e5e5")};
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

export {
  HorizontalList,
  ListItem,
  LogoutButton,
  MenuStreak,
  MenuContainer,
  MenuInner,
};
