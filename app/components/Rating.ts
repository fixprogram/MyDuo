/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { RatingBlock, RatingItem, RatingTitle, UserImage } from "./lib";

const RatingList = [
  {
    name: "Denis Davydov",
    img: "1",
    exp: "912",
  },
  {
    name: "Dima Vlasov",
    img: "2",
    exp: "479",
  },
  {
    name: "Anastasia",
    img: "3",
    exp: "463",
  },
  {
    name: "Sergey Marykin",
    img: "4",
    exp: "399",
  },
  {
    name: "Daniel Laskin",
    img: "5",
    exp: "348",
  },
];

const Rating = () => {
  return (
    <RatingBlock>
      <RatingTitle>
        <h3>Weekly Rating</h3>
        <span
          style={{ color: "#F6CA45", fontSize: "16px", letterSpacing: "0" }}
        >
          5 days
        </span>
      </RatingTitle>
      {RatingList.map(({ img, name, exp }, idx) => (
        <RatingItem
          css={idx === 0 ? { backgroundColor: "#DFFEBF" } : null}
          key={idx}
        >
          <b css={{ color: "#6CA530" }}>{idx + 1}</b>
          <UserImage src={img} alt={img} width={48} height={48} />
          <b css={idx === 0 ? { color: "#6CA530" } : null}>{name}</b>
          <span
            css={
              idx === 0
                ? { color: "#6CA530", fontWeight: 500, letterSpacing: 0 }
                : { fontWeight: 500, letterSpacing: 0 }
            }
          >
            {exp} XP
          </span>
        </RatingItem>
      ))}
    </RatingBlock>
  );
};

export default Rating;
