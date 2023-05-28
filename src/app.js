import React from "react";

import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./constants/globalStyle";

import { useSelector } from "react-redux";
import { ThemeState } from "./features/theme";

import { MainRouter } from "./constants/routers";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function App() {
  const whiteTheme = useSelector(ThemeState).theme;

  return (
    <>
      <GlobalStyle white={whiteTheme} />
      <RouterProvider router={MainRouter} />
      <ToastContainer />
    </>
  );
}
