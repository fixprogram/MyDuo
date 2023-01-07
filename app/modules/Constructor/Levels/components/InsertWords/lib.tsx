import styled from "@emotion/styled";

type WordsItemProps = {
  isActive: boolean;
};

const WordsList = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: none;
  align-items: center;
  margin-bottom: 30px;
`;

const WordsItem = styled("li")<WordsItemProps>`
  margin-left: 3px;
  margin-bottom: 3px;
  padding: 3px 6px;
  border: 1px solid #fff;
  border-color: ${(props) => (props.isActive ? "#1cb0f6" : "#fff")};
  border-radius: 15px;
  cursor: pointer;
  transition: border-color 0.2s;
  &:hover {
    border-color: #1cb0f6;
  }
`;

const Button = styled("button")`
  border: 0 solid transparent;
  background-color: #1cb0f6;
  color: #fff;
  border-color: white;
  border-width: 0;
  border-bottom-width: 4px;
  border-bottom-color: #1899d6;
  height: 50px;
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
  margin-right: 10px;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    border-bottom-width: 0;
    margin-top: 4px;
    height: 46px;
  }
  &:disabled {
    background-color: #e5e5e5;
    color: #afafaf;
    border: 2px solid #e5e5e5;
    cursor: default;
    &:hover {
      filter: none;
    }
  }
`;

const SettingsContainer = styled("div")`
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export { WordsList, WordsItem, Button, SettingsContainer };
