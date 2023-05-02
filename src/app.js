import React from "react";

import GlobalStyle from "./constants/globalStyle";

import { useSelector } from "react-redux";
import { ThemeState } from "./features/theme";


import { NavContainer } from "./containers";
// import { SignUpContainer } from "./containers";
import { LoginContainer } from "./containers";
// import { ProfileContainer } from "./containers";
// import { EditContainer } from "./containers";
import { MainRouter } from "./constants/routers";
import { RouterProvider} from "react-router-dom";

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
      <GlobalStyle white={whiteTheme} />
      <RouterProvider router={MainRouter} />
    </>
  );
}
