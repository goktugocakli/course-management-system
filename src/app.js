import React from "react";
import { LoginContainer } from "./containers";
import { Login } from "./components";

export default function App() {
  return (
    <>
      <LoginContainer />
      <Login.Button>Login Button</Login.Button>
    </>
  );
}
