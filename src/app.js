import React from "react";

import GlobalStyle from "./constants/globalStyle";

import { useSelector } from "react-redux";
import { ThemeState } from "./features/theme";

import { MainRouter } from "./constants/routers";
import { RouterProvider } from "react-router-dom";
import { EnrollContainer } from "./containers";

export default function App() {
  const whiteTheme = useSelector(ThemeState).theme;

  return (
    <>
      <GlobalStyle white={whiteTheme} />
      <RouterProvider router={MainRouter} />

      <EnrollContainer />
    </>
  );
}
