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
      <nav style={{ width: "35%" }}>
        <HorizontalList>
          {MENU.map(({ title, icon, activeIcon, link }) => (
            <ListItem key={title}>
              <MenuNavLink
                to={`${link}`}
                className="nav-link"
                prefetch="render"
              >
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
      </nav>
      <HorizontalList style={{ width: "40%" }}>
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
          <b
            style={{
              fontFamily: "Nunito",
              color: userData.wasToday ? "#ff9600" : "#e5e5e5",
            }}
          >
            {userData.streak}
          </b>
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
