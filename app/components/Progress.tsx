import Close from "~/styles/close.svg";
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
          src={Close}
          alt="close"
          style={{ width: "16px", height: "16px", verticalAlign: "initial" }}
        />
      </ProgressLeaveLesson>
      <ProgressBar progress={progress} />
    </ProgressBarContainer>
  );
};

export default Progress;
