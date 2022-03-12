/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { PracticeBlock, PracticeBlockTitle } from "./lib";
import { Link } from "react-router-dom";
import { getStoriesList } from "../db/api";
import { useEffect } from "react";
import { useAsync } from "../db/useAsync";

const StoriesList = () => {
  const { data, error, isSuccess, run } = useAsync();

  useEffect(() => {
    run(getStoriesList());
  }, [run]);
  return (
    <section
      css={{
        padding: "0",
        margin: "0 auto",
        maxWidth: "688px",
        marginTop: 24,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      {!isSuccess ? <div>Pending...</div> : null}
      {data
        ? data.map(({ id, title }, i) => (
            <PracticeBlock key={i}>
              {/* <PracticeBlockTitle> */}
              {/* <span></span> <h2></h2> <span></span> */}
              {/* {item.timeToRepeat < new Date().getTime()
              ? "It is time to repeat"
              : null} */}
              {/* </PracticeBlockTitle> */}
              <Link
                key={id}
                aria-labelledby={title}
                to={`/stories/${id}`}
                css={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "33.33%",
                  textDecoration: "none",
                }}
              >
                <div
                  css={{
                    width: "117px",
                    height: "117px",
                    backgroundColor: "#AFAFAF",
                  }}
                ></div>
                <b
                  css={{
                    fontSize: "17px",
                    color: "#4b4b4b",
                    textAlign: "center",
                  }}
                >
                  {title}
                </b>
                <span
                  css={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    letterSpacing: 0.4,
                    color: "#AFAFAF",
                  }}
                >
                  +{16} XP
                </span>
              </Link>
            </PracticeBlock>
          ))
        : null}
    </section>
  );
};

export default StoriesList;
