/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { NavLink } from "remix";
import { HorizontalList, ListItem, NavIcon } from "./lib";
import study from "~/styles/study.svg";
import repeat from "~/styles/practice.svg";
import practice from "~/styles/forum.svg";
import shop from "~/styles/shop.svg";
import studyActive from "~/styles/study-active.svg";
import repeatActive from "~/styles/practice-active.svg";
import practiceActive from "~/styles/forum-active.svg";
import shopActive from "~/styles/shop-active.svg";
import { Fragment } from "react";

const MENU = [
  {
    title: "study",
    link: "study",
    icon: study,
    activeIcon: studyActive,
  },
  {
    title: "repeat",
    link: "repeats",
    icon: repeat,
    activeIcon: repeatActive,
  },
  {
    title: "practice",
    link: "practice",
    icon: practice,
    activeIcon: practiceActive,
  },
  {
    title: "constructor",
    link: "new/new-repeat",
    icon: shop,
    activeIcon: shopActive,
  },
];

const Menu = () => {
  return (
    <div
      css={{
        height: 71,
        width: "100vw",
        borderTop: "1px solid #DADCDE",
        borderBottom: "2px solid #DADCDE",
        padding: "0 10%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <nav>
        <HorizontalList>
          {MENU.map(({ title, icon, activeIcon, link }) => (
            <ListItem key={title}>
              <NavLink
                to={`/${link}`}
                className="nav-link"
                css={{
                  textDecoration: "none",
                  textTransform: "uppercase",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  color: "#AFAFAF",
                  letterSpacing: 0.8,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {({ isActive }) => (
                  <Fragment>
                    <NavIcon
                      src={isActive ? activeIcon : icon}
                      width={36}
                      height={36}
                      alt={title}
                    />
                    {title}
                  </Fragment>
                )}
              </NavLink>
            </ListItem>
          ))}
        </HorizontalList>
      </nav>
      <HorizontalList>
        <ListItem>Project</ListItem>
        <ListItem>Streak</ListItem>
        <ListItem>Profile</ListItem>
      </HorizontalList>
    </div>
  );
};

export default Menu;
