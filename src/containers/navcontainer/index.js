import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeTheme, ThemeState } from "../../features/theme";

import { NavBar } from "../../components";

export default function NavBarContainer() {
  const hamburger = useRef(null);
  const dispatch = useDispatch();
  const whiteTheme = useSelector(ThemeState).theme;
  const [expanded, setExpanded] = useState(false);


  //This useEffect used to implement a feature which is when navigation is open
  // and we click any plce but close button. The navigation will close

  useEffect(() => {
    const closeHamburger = (e) => {
      const x = document.querySelector("#navlinks");
      if (
        e.target !== hamburger.current &&
        e.target !== hamburger.current["firstChild"] &&
        e.target.closest("#navlinks") !== x
      ) {
        setExpanded(false);
      }
    };

    document.body.addEventListener("click", closeHamburger);

    return () => document.body.removeEventListener("click", closeHamburger);
  });

  return (
    <NavBar theme={whiteTheme}>
      <NavBar.Hamburger
        ref={hamburger}
        expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
        }}
      ></NavBar.Hamburger>

      <NavBar.NavLinkContainer id="navlinks" expanded={expanded}>
        <NavBar.Link>Home</NavBar.Link>
        <NavBar.Link>About</NavBar.Link>
        <NavBar.Link>Account</NavBar.Link>
        <NavBar.Link>Edit Account</NavBar.Link>
        <NavBar.ChangeTheme
          onClick={() => {
            //dispacth is for set the theme for redux state to change the theme of the app
            //local storage for suppling that theme option for future visits.
            dispatch(changeTheme(!whiteTheme));
            localStorage.setItem("Theme", !whiteTheme);
          }}
        ></NavBar.ChangeTheme>
      </NavBar.NavLinkContainer>

      <NavBar.Logo>3B</NavBar.Logo>
    </NavBar>
  );
}
