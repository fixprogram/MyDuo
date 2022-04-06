import { Link } from "@remix-run/react";
import {
  HorizontalList,
  ListItem,
  Logout,
  MenuContainer,
  MenuNavLink,
  NavIcon,
} from "./lib";
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
    link: "study/",
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
    link: "practice/",
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

const Menu = ({ user, onOverlay }: { user: any; onOverlay: Function }) => {
  return (
    <MenuContainer>
      <nav>
        <HorizontalList>
          {MENU.map(({ title, icon, activeIcon, link }) => (
            <ListItem key={title}>
              <MenuNavLink to={`${link}`} className="nav-link">
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
              </MenuNavLink>
            </ListItem>
          ))}
        </HorizontalList>
      </nav>
      <HorizontalList>
        <ListItem>
          <Projects onOverlay={onOverlay} />
        </ListItem>
        <ListItem>
          <img
            src={user.wasToday ? streakActive : streak}
            alt="streak"
            style={{ width: 25, height: 30, marginRight: 6 }}
          />
          <b
            style={{
              fontFamily: "Roboto",
              color: user.wasToday ? "#ff9600" : "#e5e5e5",
            }}
          >
            {user.streak}
          </b>
        </ListItem>
        <ListItem>
          {user ? (
            <div
              className="user-info"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span style={{ marginRight: 10 }}>{user.username}</span>
              <form action="/logout" method="post">
                <Logout type="submit">Logout</Logout>
              </form>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </ListItem>
      </HorizontalList>
    </MenuContainer>
  );
};

export default Menu;
