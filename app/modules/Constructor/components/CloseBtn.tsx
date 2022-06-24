import Close from "~/styles/close.svg";

export default function CloseBtn({
  onClickHandler,
}: {
  onClickHandler: () => void;
}) {
  return (
    <button
      type="button"
      style={{
        position: "absolute",
        cursor: "pointer",
        width: 16,
        height: 16,
        border: "none",
        backgroundColor: "inherit",
        padding: 0,
        left: 30,
        bottom: -60,
      }}
      onClick={onClickHandler}
    >
      <img
        src={Close}
        alt="close"
        style={{
          width: "16px",
          height: "16px",
          verticalAlign: "initial",
        }}
      />
    </button>
  );
}
