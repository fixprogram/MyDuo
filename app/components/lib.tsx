import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

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

const RatingBlock = styled.section(() => ({
  width: "33.3%",
  border: "1px solid #E5E5E5",
  borderRadius: 15,
}));

const RatingTitle = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0,
  padding: "29px 27px",
  borderBottom: "2px solid #E5E5E5",
  fontFamily: "Montserrat",
  fontSize: 20,
  fontWeight: 700,
  color: "#3C3C3C",
  letterSpacing: "0.8 px",
}));

const RatingItem = styled.div(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "9px 18px 9px 25px",
  alignItems: "center",
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: 18,
  letterSpacing: 0.4,
  color: "#3C3C3C",
}));

const UserImage = styled.img(
  {
    borderRadius: "100%",
  },
  (props) => ({ width: props.width, height: props.height })
);

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

export {
  ProgressBar,
  HorizontalList,
  ListItem,
  NavLink,
  PracticeBlock,
  PracticeBlockTitle,
  PracticeBlockItem,
  RatingBlock,
  RatingTitle,
  RatingItem,
  UserImage,
};
