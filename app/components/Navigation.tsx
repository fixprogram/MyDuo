import {
  MenuNavLink,
  NavIcon,
  NavigationList,
  NavigationListItem,
} from "./lib";
import shopActive from "~/styles/shop-active.svg";
import study from "~/styles/study.svg";
import shop from "~/styles/shop.svg";
import studyActive from "~/styles/study-active.svg";

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

export default function Navigation() {
  return (
    <nav>
      <NavigationList>
        {MENU.map(({ title, icon, activeIcon, link }) => (
          <NavigationListItem key={title}>
            <MenuNavLink to={`${link}`} className="nav-link">
              {({ isActive }) => (
                <>
                  <NavIcon src={isActive ? activeIcon : icon} alt={title} />
                  {title}
                </>
              )}
            </MenuNavLink>
          </NavigationListItem>
        ))}
      </NavigationList>
    </nav>
  );
}
