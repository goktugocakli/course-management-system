import React from "react";
import { useSelector } from "react-redux";
import { ThemeState } from "../../features/theme";

import {
  Container,
  Logo,
  LinkContainer,
  Link,
  Hamburger,
  ChangeThemeContainer,
  WhiteTheme,
  DarkTheme,
  ThemeSelector,
  White,
  Dark,
} from "./styles/navbar";

let Theme;

export default function NavBar({ children, ...restProps }) {

  //useSelector used to get the current theme option from the redux
  Theme = useSelector(ThemeState).theme;
  return (
    <Container white={Theme} {...restProps}>
      {children}
    </Container>
  );
}

NavBar.Logo = function NavBarLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

NavBar.NavLinkContainer = function NavBarLinkContainer({
  expanded,
  children,
  ...restProps
}) {
  return (
    <LinkContainer white={Theme} expanded={expanded} {...restProps}>
      {children}
    </LinkContainer>
  );
};

NavBar.Link = function NavBarLink({ href, children, ...restProps }) {
  return (
    <Link {...restProps}>
      <a href={href}>{children}</a>
    </Link>
  );
};

NavBar.Hamburger = React.forwardRef((props, ref) => (
  <Hamburger white={Theme} expanded={props.expanded} onClick={props.onClick}>
    <svg ref={ref}>
      <path
        d="m 10 25 l 30 0 a 1 1 0 0 1 0 10 l -30 0 a 1 1 0 0 1 0 -20 l 15 0 l 0 40"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </Hamburger>
));

NavBar.ChangeTheme = function NavBarChangeTheme({ children, ...restProps }) {
  return (
    <ChangeThemeContainer white={Theme} {...restProps}>
      <ThemeSelector white={Theme} />
      <DarkTheme>
        <Dark white={Theme} />
      </DarkTheme>
      <WhiteTheme>
        <White white={Theme} />
      </WhiteTheme>
    </ChangeThemeContainer>
  );
};
