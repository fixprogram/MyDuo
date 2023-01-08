import Icon from "~/styles/practice_last_added.svg";
import {
  PracticeLastAddedContainer,
  PracticeLastAddedLink,
  PracticeLastAddedWrapper,
} from "./lib";

export default function PracticeLastAdded() {
  return (
    <PracticeLastAddedContainer>
      <PracticeLastAddedWrapper>
        <PracticeLastAddedLink to="/practice" title="Practice">
          <img
            src={Icon}
            alt="Practice last added lessons"
            height={32}
            width={38.7}
          />
        </PracticeLastAddedLink>
      </PracticeLastAddedWrapper>
    </PracticeLastAddedContainer>
  );
}
