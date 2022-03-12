/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { NavLink } from "remix";
import { HorizontalList, ListItem } from "./lib";

const MENU = ["study", "lessons", "stories", "new"];

const Menu = () => {
  return (
    <div
      css={{
        height: 71,
        width: "100vw",
        borderTop: "1px solid #DADCDE",
        borderBottom: "2px solid #DADCDE",
        padding: "0 150px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <nav>
        <HorizontalList>
          {MENU.map((item) => (
            <ListItem key={item}>
              <NavLink
                to={`/${item}`}
                className="nav-link"
                css={{
                  textDecoration: "none",
                  textTransform: "uppercase",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  color: "#AFAFAF",
                  letterSpacing: 0.8,
                }}
              >
                {item}
              </NavLink>
            </ListItem>
          ))}
        </HorizontalList>
      </nav>
      <HorizontalList>
        <ListItem>Language</ListItem>
        <ListItem>Streak</ListItem>
        <ListItem>Profile</ListItem>
      </HorizontalList>
    </div>
  );
};

export default Menu;
