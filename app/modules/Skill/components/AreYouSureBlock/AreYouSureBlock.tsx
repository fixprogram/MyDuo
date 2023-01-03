import { useSkill } from "../..";
import {
  Description,
  Grid,
  Inner,
  QuitButton,
  StayButton,
  Title,
  Wrapper,
} from "./lib";

export default function AreYouSureBlock() {
  const { resetStatus } = useSkill();
  return (
    <Wrapper>
      <Inner>
        <Grid>
          <Title>Are you sure you want to quit?</Title>
          <Description>All progress in this session will be lost.</Description>
          <div style={{ marginRight: "-12px", gridArea: "dismiss" }}>
            <StayButton onClick={() => resetStatus()}>Stay</StayButton>
          </div>

          <div style={{ marginRight: "-12px", gridArea: "quit" }}>
            <QuitButton to="/">Quit</QuitButton>
          </div>
        </Grid>
      </Inner>
    </Wrapper>
  );
}
