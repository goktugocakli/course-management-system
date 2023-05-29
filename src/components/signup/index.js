import React from "react";
import {
  Button,
  InputLabel,
  Input,
  Div,
  Text,
  DepartmentContainer,
} from "./styles/signup";

export default function SignUp({ children, ...restPorps }) {
  return;
}

SignUp.Button = function signUpButton({ children, ...restPorps }) {
  return <Button {...restPorps}>{children}</Button>;
};

SignUp.InputLabel = function signUpLabel({ children, ...restPorps }) {
  return <InputLabel {...restPorps}>{children}</InputLabel>;
};

SignUp.Input = function signUpInput({ children, ...restPorps }) {
  return <Input {...restPorps}>{children}</Input>;
};

SignUp.Div = function signUpDiv({ children, ...restPorps }) {
  return <Div>{children}</Div>;
};

SignUp.Text = function signUpText({ children, ...restPorps }) {
  return <Text>{children}</Text>;
};

SignUp.Department = function signupDepartment({ children, ...restPorps }) {
  return <p {...restPorps}>{children}</p>;
};

SignUp.DepartmentContainer = function signupDepartmentCont({
  children,
  ...restPorps
}) {
  return <DepartmentContainer {...restPorps}>{children}</DepartmentContainer>;
};
