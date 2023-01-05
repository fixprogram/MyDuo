import styled from "@emotion/styled";

const FooterLine = styled("hr")`
  border: 0;
  border-top: 2px solid #e5e5e5;
  margin: 0 0 48px;
`;

const FooterText = styled("p")`
  text-align: center;
  color: #afafaf;
  font-family: Nunito;
  margin: 0;
`;

const LinkWithHover = styled("a")`
  &:hover {
    filter: brightness(1.3);
  }
`;

export { FooterLine, FooterText, LinkWithHover };
