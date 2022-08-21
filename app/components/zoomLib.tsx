import styled from "@emotion/styled";

const Button = styled("button")`
  margin: 0;
  text-align: center;
  border: none;
  background: #2f2f2f;
  color: #888;
  padding: 0 4px;
  border-top: 1px solid #0a0a0a;
`;

const ButtonLarge = styled("button")`
  margin: 0;
  text-align: center;
  border: none;
  background: #2f2f2f;
  color: #888;
  padding: 0 4px;
  border-top: 1px solid #0a0a0a;

  font-size: 12px;
  line-height: 1;
  padding: 4px;
`;

const ButtonZoom = styled("button")`
  margin: 0;
  text-align: center;
  border: none;
  background: #2f2f2f;
  color: #888;
  padding: 0 4px;
  border-top: 1px solid #0a0a0a;

  width: 26px;
  font-size: 22px;
`;

const ButtonBottom = styled("button")`
  margin: 0;
  text-align: center;
  border: none;
  background: #2f2f2f;
  color: #888;
  padding: 0 4px;
  border-top: 1px solid #0a0a0a;

  margin-bottom: 1rem;
`;

const Description = styled("p")`
  font-size: 12px;
  margin-right: 0.25rem;
`;

const Controls = styled("div")`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MiniMap = styled("div")`
  position: absolute;
  bottom: 25px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export { MiniMap, Button, ButtonLarge, ButtonZoom, ButtonBottom, Controls };
