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

export default function NavBar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
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
    <LinkContainer expanded={expanded} {...restProps}>
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

NavBar.Hamburger = function NavBarHamburger({ expanded, ...restProps }) {
  return (
    <Hamburger expanded={expanded} {...restProps}>
      <svg>
        <path
          d="m 10 25 l 30 0 a 1 1 0 0 1 0 10 l -30 0 a 1 1 0 0 1 0 -20 l 15 0 l 0 40"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </Hamburger>
  );
};

NavBar.ChangeTheme = function NavBarChangeTheme({
  whiteTheme,
  children,
  ...restProps
}) {
  return (
    <ChangeThemeContainer white={whiteTheme} {...restProps}>
      <ThemeSelector white={whiteTheme} bg={whiteTheme ? "black": "white"} />
      <DarkTheme>
        <Dark white={whiteTheme} />
      </DarkTheme>
      <WhiteTheme>
        <White white={whiteTheme} />
      </WhiteTheme>
    </ChangeThemeContainer>
  );
};
