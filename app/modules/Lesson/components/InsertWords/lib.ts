/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";

type PuzzleItemProps = {
  alreadyChoosen: boolean;
};

const PuzzleContainer = styled("section")`
  width: 100%;
`;

const PuzzleList = styled("ul")`
  list-style-type: none;
  padding: 0;
  margin: 30px 0 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
`;

const PuzzleItem = styled("li")<PuzzleItemProps>`
  margin: 0 16px 8px 0;
  position: ${(props) => (props.alreadyChoosen ? "absolute" : "relative")};
  top: ${(props) => (props.alreadyChoosen ? "-1000px" : "0")};
`;

const VariantsContainer = styled("section")`
  width: 100%;
  margin-top: 20px;
`;

const VariantsList = styled("ul")`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const VariantsItem = styled("li")`
  position: relative;
  margin-bottom: 8px;
  width: 49%;
`;

export {
  PuzzleContainer,
  PuzzleList,
  PuzzleItem,
  VariantsContainer,
  VariantsList,
  VariantsItem,
};
