import { Link } from "react-router-dom";
import Icon from "~/styles/practice_last_added.svg";
import { PracticeLastAddedContainer } from "./lib";

export default function PracticeLastAdded() {
  return (
    <PracticeLastAddedContainer>
      <Link
        to={`/practice`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={Icon}
          alt="Practice last added lessons"
          height={32}
          width={38.7}
        />
      </Link>
    </PracticeLastAddedContainer>
  );
}
