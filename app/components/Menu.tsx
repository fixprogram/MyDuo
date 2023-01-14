import {
  HorizontalList,
  ListItem,
  Logout,
  MenuContainer,
  MenuInner,
  MenuStreak,
} from "./lib";
import streak from "~/styles/streak.svg";
import streakActive from "~/styles/streak-active.svg";
import Projects from "./Projects";
import { Language, User } from "@prisma/client";
import Navigation from "./Navigation";
import useMediaQuery from "~/hooks/useMediaQuery";
import { PHONE_MEDIA_MAX } from "~/constants";

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
  const matches = useMediaQuery(`(max-width: ${PHONE_MEDIA_MAX}px)`);

  return (
    <MenuContainer>
      <MenuInner>
        {matches ? null : <Navigation />}
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
      </MenuInner>
    </MenuContainer>
  );
};

export default Menu;
