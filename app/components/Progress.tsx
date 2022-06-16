import CloseIcon from "~/styles/close.svg";
import {
  ProgressBar,
  ProgressBarContainer,
  ProgressLeaveLesson,
} from "~/components/lib";
import { useSkillReducer } from "~/modules/Lesson/reducer";
import { useLesson } from "~/modules/Lesson/components/Les/Les";
import { useSkill } from "~/modules/Lesson";

// const Progress = ({ progress }: { progress: number }) => {
const Progress = () => {
  const { progress } = useSkill();
  return (
    <ProgressBarContainer>
      <ProgressLeaveLesson to="/">
        <img
          src={CloseIcon}
          alt="Close the topic"
          width={16}
          height={16}
          style={{ verticalAlign: "initial" }}
        />
      </ProgressLeaveLesson>
      <ProgressBar progress={progress} />
    </ProgressBarContainer>
  );
};

export default Progress;
