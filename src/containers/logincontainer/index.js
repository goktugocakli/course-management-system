import React from "react";
import { useState } from "react";
import { Login } from "../../components";
import { Global } from "../../components";

import { useDispatch } from "react-redux";
import { fetchUser } from "../../features/user";

export default function LoginContainer() {
  // This variable determines whether password is visible or not
  const [isVisible, setIsVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const dispacth = useDispatch();

  const togglePassword = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (event) => {
    const userDT = {
      ...userData,
      password: event.target.value,
    };

    setUserData(userDT);

    if (event.target.value.length === 0) {
      setIsEmpty(true);
      console.log(true);
    } else {
      setIsEmpty(false);
      console.log(false);
    }
  };

  return (
    <Global.Column>
      <Global.Header>
        <Global.HeaderBold>Example University</Global.HeaderBold>
        <Global.Space />
        <Global.HeaderNormal>Information System</Global.HeaderNormal>
      </Global.Header>

      <Login.Div>
        <Global.Column>
          <Global.Row>
            <Login.InputLabel>Username</Login.InputLabel>
            <Login.Input
              type={"text"}
              onChange={(event) => {
                const userDT = {
                  ...userData,
                  username: event.target.value,
                };

                setUserData(userDT);
              }}
            />
          </Global.Row>

          <Global.Row>
            <Login.InputLabel>Password</Login.InputLabel>
            <Login.Input
              type={isVisible ? "text" : "password"}
              onChange={handleChange}
            />
            <Login.Icon
              onClick={togglePassword}
              visibility={isVisible}
              hidden={isEmpty}
            />
          </Global.Row>

          <Global.Row>
            <Global.Space />
            <Login.Text>Forgot Password</Login.Text>
          </Global.Row>

          <Login.Button
            onClick={() => {
              if (!isEmpty) {
                dispacth(fetchUser(userData));
              }
            }}
          >
            Login
          </Login.Button>

          <Global.Row>
            <Global.Space />
            <Login.Text>Don’t have an account?</Login.Text>
            <Login.Text>Sign up</Login.Text>
          </Global.Row>
        </Global.Column>
      </Login.Div>
    </Global.Column>
  );
}
