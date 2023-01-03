import CloseIcon from "~/styles/close.svg";
import {
  ProgressBar,
  ProgressBarContainer,
  ProgressLeaveLesson,
} from "~/components/lib";
import { useSkill } from "~/modules/Skill";
import { BtnCloseImage } from "~/modules/Constructor/components/lib";

const Progress = () => {
  const { progress } = useSkill();
  return (
    <ProgressBarContainer>
      <ProgressLeaveLesson to="/">
        <BtnCloseImage src={CloseIcon} alt="Close the skill" />
      </ProgressLeaveLesson>
      <ProgressBar progress={progress} />
    </ProgressBarContainer>
  );
};

export default Progress;
