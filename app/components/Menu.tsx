import {
  HorizontalList,
  ListItem,
  Logout,
  MenuContainer,
  MenuNavLink,
  MenuStreak,
  NavIcon,
  Navigation,
} from "./lib";
import study from "~/styles/study.svg";
import shop from "~/styles/shop.svg";
import studyActive from "~/styles/study-active.svg";
import streak from "~/styles/streak.svg";
import streakActive from "~/styles/streak-active.svg";
import shopActive from "~/styles/shop-active.svg";
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
    title: "Constructor",
    link: "new",
    icon: shop,
    activeIcon: shopActive,
  },
];

type UserData = Pick<User, "streak" | "wasToday">;

const Menu = ({
  userData,
  languages,
  onOverlay,
}: {
  userData: UserData;
  languages: Language[];
  onOverlay: Function;
}) => {
  return (
    <MenuContainer>
      <Navigation>
        <HorizontalList>
          {MENU.map(({ title, icon, activeIcon, link }) => (
            <ListItem key={title}>
              <MenuNavLink to={`${link}`} className="nav-link">
                {({ isActive }) => (
                  <>
                    <NavIcon src={isActive ? activeIcon : icon} alt={title} />
                    {title}
                  </>
                )}
              </MenuNavLink>
            </ListItem>
          ))}
        </HorizontalList>
      </Navigation>
      <HorizontalList>
        <ListItem>
          <Projects languages={languages} onOverlay={onOverlay} />
        </ListItem>
        <ListItem>
          <img
            src={userData.wasToday ? streakActive : streak}
            alt="streak"
            width={25}
            height={30}
            style={{ marginRight: 6 }}
          />
          <MenuStreak wasToday={userData.wasToday}>
            {userData.streak}
          </MenuStreak>
        </ListItem>
        <ListItem>
          <form action="/logout" method="post">
            <Logout type="submit">Logout</Logout>
          </form>
        </ListItem>
      </HorizontalList>
    </MenuContainer>
  );
};

export default Menu;
