/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useRef, Fragment } from "react";
import { jsx } from "@emotion/react";
import {
  PracticeBody,
  PracticeBodyTitle,
  PracticeBodyWelcome,
  PracticeBodyResults,
  PracticeBodyMessage,
} from "./lib";
import { UserImage } from "../../../components/lib";
import PracticeVariants from "./PracticeVariants";
import Me from "../../../styles/me.jpg";
import Node from "../../../styles/node.jpg";

const Body = ({
  title,
  step,
  maxSteps,
  variants,
  content,
  check,
  variantsState,
}) => {
  const myRef = useRef(null);
  // const executeScroll = () => myRef.current.scrollIntoView();

  useEffect(() => {
    console.log(content);
    if (content.length > 2) {
      myRef.current.scrollIntoView();
    }
  }, [content]);

  return (
    <PracticeBody>
      <PracticeBodyTitle>{title}</PracticeBodyTitle>

      <div
        css={{
          paddingTop: 50,
          height: "calc(100% - 240px)",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        {step === 0 ? (
          <PracticeBodyWelcome>Welcome Screen</PracticeBodyWelcome>
        ) : step === maxSteps + 1 ? (
          <PracticeBodyResults>Results Screen</PracticeBodyResults>
        ) : (
          <Fragment>
            {content.map((item, idx) => (
              <div
                key={idx}
                css={{
                  marginTop: `${idx === 0 ? "auto" : null}`,
                  marginBottom: 26,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: `${
                    item.author === "node" ? "row" : "row-reverse"
                  }`,
                }}
              >
                <UserImage
                  src={item.author === "node" ? Node : Me}
                  width={45}
                  height={45}
                  alt={item.author}
                />
                <PracticeBodyMessage
                  css={{
                    position: "relative",
                    width: `${item.text === "" ? "400px" : "auto"}`,
                    minHeight: `${item.text === "" ? "54px" : "auto"}`,
                    borderRadius: `${
                      item.author === "node"
                        ? "15px 15px 15px 0"
                        : "15px 0 15px 15px"
                    }`,
                  }}
                >
                  {item.text ? (
                    item.text
                  ) : (
                    <span
                      css={{
                        position: "absolute",
                        height: 2,
                        backgroundColor: "#E5E5E5",
                        left: "7%",
                        bottom: 10,
                        width: `${item.text === "" ? "86%" : 0}`,
                      }}
                    ></span>
                  )}

                  {item.picture ? (
                    <img
                      src={item.picture}
                      alt={item.picture}
                      css={{ width: "100%" }}
                    />
                  ) : null}
                </PracticeBodyMessage>
                <div ref={myRef}></div>
              </div>
            ))}
            {variants ? (
              <PracticeVariants
                variants={variants}
                onCheck={check}
                variantsState={variantsState}
              />
            ) : null}
          </Fragment>
        )}
      </div>
    </PracticeBody>
  );
};

export default Body;
