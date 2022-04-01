/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link, NavLink } from "remix";
import { HorizontalList, ListItem, NavIcon } from "./lib";
import study from "~/styles/study.svg";
import repeat from "~/styles/practice.svg";
import practice from "~/styles/forum.svg";
import shop from "~/styles/shop.svg";
import studyActive from "~/styles/study-active.svg";
import repeatActive from "~/styles/practice-active.svg";
import practiceActive from "~/styles/forum-active.svg";
import streak from "~/styles/streak.svg";
import streakActive from "~/styles/streak-active.svg";
import shopActive from "~/styles/shop-active.svg";
import { Fragment } from "react";
import Projects from "./Projects";

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

const Menu = ({ user }) => {
  console.log(user);
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
                to={`${link}`}
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
        <ListItem>
          <Projects />
        </ListItem>
        <ListItem>
          <img
            src={user.wasToday ? streakActive : streak}
            alt="streak"
            style={{ width: 25, height: 30, marginRight: 6 }}
          />
          <b
            css={{
              fontFamily: "Roboto",
              color: user.wasToday ? "#ff9600" : "#e5e5e5",
            }}
          >
            {user.streak}
          </b>
        </ListItem>
        <ListItem>
          {user ? (
            <div className="user-info">
              <span>{`Hi ${user.username}`}</span>
              <form action="/logout" method="post">
                <button type="submit" className="button">
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </ListItem>
      </HorizontalList>
    </div>
  );
};

export default Menu;
