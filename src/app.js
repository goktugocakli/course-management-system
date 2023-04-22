import React from "react";

import GlobalStyle from "./constants/globalStyle";

import { useSelector } from "react-redux";
import {ThemeState} from './features/theme';


import { NavContainer } from "./containers";

export default function App() {

  const whiteTheme = useSelector(ThemeState).theme;
  


  return (
    <>
      <GlobalStyle white={whiteTheme}/>
      <NavContainer />
      
    </>
  );
}
