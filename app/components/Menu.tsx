import {
  HorizontalList,
  ListItem,
  Logout,
  MenuContainer,
  MenuNavLink,
  NavIcon,
} from "./lib";
import study from "~/styles/study.svg";
import shop from "~/styles/shop.svg";
import studyActive from "~/styles/study-active.svg";
import streak from "~/styles/streak.svg";
import streakActive from "~/styles/streak-active.svg";
import shopActive from "~/styles/shop-active.svg";
import { Fragment } from "react";
import Projects from "./Projects";
import { Language, User } from "@prisma/client";

const MENU = [
  {
    title: "Study",
    link: "skills",
    icon: study,
    activeIcon: studyActive,
  },
  {
    title: "constructor",
    link: "constructor/new",
    icon: shop,
    activeIcon: shopActive,
  },
];

const Menu = ({
  user,
  languages,
  onOverlay,
}: {
  user: User;
  languages: Language[];
  onOverlay: Function;
}) => {
  return (
    <MenuContainer>
      <nav>
        <HorizontalList>
          {MENU.map(({ title, icon, activeIcon, link }) => (
            <ListItem key={title}>
              <MenuNavLink
                to={`${link}`}
                className="nav-link"
                prefetch="render"
              >
                {({ isActive }) => (
                  <Fragment>
                    <NavIcon src={isActive ? activeIcon : icon} alt={title} />
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
          <Projects languages={languages} onOverlay={onOverlay} />
        </ListItem>
        <ListItem>
          <img
            src={user?.wasToday ? streakActive : streak}
            alt="streak"
            width={25}
            height={30}
            style={{ marginRight: 6 }}
          />
          <b
            style={{
              fontFamily: "Roboto",
              color: user?.wasToday ? "#ff9600" : "#e5e5e5",
            }}
          >
            {user?.streak}
          </b>
        </ListItem>
        <ListItem>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: 10 }}>{user?.username}</span>
            <form action="/logout" method="post">
              <Logout type="submit">Logout</Logout>
            </form>
          </div>
        </ListItem>
      </HorizontalList>
    </MenuContainer>
  );
};

export default Menu;
