import CloseIcon from "~/styles/close.svg";
import {
  ProgressBar,
  ProgressBarContainer,
  ProgressLeaveLesson,
} from "~/components/lib";

const Progress = ({ progress }: { progress: number }) => {
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
