import styled from "@emotion/styled";
import { Link } from "@remix-run/react";

const Wrapper = styled("div")`
  background: #fff;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 6;
`;

const Inner = styled("div")`
  max-width: 1140px;
  padding: 40px 24px;
  margin: 0 auto;
`;

const Grid = styled("div")`
  display: grid;
  grid-gap: 16px 40px;
  align-items: center;
  grid-template-areas:
    "title dismiss quit"
    "description dismiss quit";
  grid-template-columns: 1fr repeat(2, minmax(min-content, 172px));
`;

const Title = styled("span")`
  font-size: 25px;
  grid-area: title;
  line-height: 30px;
  font-weight: 700;
  font-family: "Nunito";
`;

const Description = styled("span")`
  font-size: 19px;
  grid-area: description;
  line-height: 24px;
  padding: 0;
  color: #777;
  font-family: "Nunito";
`;

const QuitButton = styled(Link)`
  border: 0 solid transparent;
  background-color: #1cb0f6;
  color: #fff;
  border-color: white;
  border-width: 0;
  border-bottom-width: 4px;
  border-bottom-color: #1899d6;
  height: 50px;
  width: 150px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Nunito";
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.8px;
  border-radius: 15px;
  padding: 0 20px;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  transition: filter 0.2s;
`;

const StayButton = styled("button")`
  border: 0 solid transparent;
  background-color: #fff;
  color: #afafaf;
  border-color: #e5e5e5;
  border-width: 2px;
  border-bottom-width: 4px;
  border-bottom-color: #e5e5e5;
  height: 50px;
  width: 150px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Nunito";
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.8px;
  border-radius: 15px;
  padding: 0 20px;
  display: block;
  -webkit-transition: filter 0.2s;
  transition: filter 0.2s;
`;

export { Wrapper, Inner, Grid, Title, Description, QuitButton, StayButton };
