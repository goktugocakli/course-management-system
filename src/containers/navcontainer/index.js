import { NavBar } from "../../components";
import { useState } from "react";

export default function NavBarContainer() {
  const [expanded, setExpanded] = useState(false);
  const [whiteTheme, setWhiteTheme] = useState(true);

  //TODO: whiteTheme should be inside redux state 
  return (
    <NavBar>
      <NavBar.Logo>3B</NavBar.Logo>

      <NavBar.Hamburger
        expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        X
      </NavBar.Hamburger>

      <NavBar.NavLinkContainer expanded={expanded}>
        <NavBar.Link>Home</NavBar.Link>
        <NavBar.Link>About</NavBar.Link>
        <NavBar.Link>Account</NavBar.Link>
        <NavBar.Link>Edit Acc</NavBar.Link>
        <NavBar.ChangeTheme
          whiteTheme={whiteTheme}
          onClick={() => {
            setWhiteTheme(!whiteTheme);
          }}
        ></NavBar.ChangeTheme>
      </NavBar.NavLinkContainer>
    </NavBar>
  );
}
