import React from "react";

import GlobalStyle from "./constants/globalStyle";

import { useSelector } from "react-redux";
import {ThemeState} from './features/theme';


import { NavContainer } from "./containers";
// import { SignUpContainer } from "./containers";
import { LoginContainer } from "./containers";
// import { ProfileContainer } from "./containers";
// import { EditContainer } from "./containers";

export default function App() {

  const whiteTheme = useSelector(ThemeState).theme;
  


  return (
    <>
      <GlobalStyle white={whiteTheme}/>
      <NavContainer />
      
      {/* <SignUpContainer /> */}
      <LoginContainer />
      {/* <ProfileContainer /> */}
      {/* <EditContainer /> */}
    </>
  );
}
