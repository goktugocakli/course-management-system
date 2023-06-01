import React from "react";

import "react-toastify/dist/ReactToastify.css";

import { MainRouter } from "./constants/routers";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function App() {

  return (
    <>
      <RouterProvider router={MainRouter} />
      <ToastContainer />
    </>
  );
}
