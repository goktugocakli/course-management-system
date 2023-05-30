import React from "react";
import {
  Button,
  InputLabel,
  Input,
  Div,
  Text,
  Select,
  Option,
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


SignUp.Select = function selectType({children, ...restProps}){
  return <Select{...restProps}>{children}</Select>
}

SignUp.Option = function typeOption({children, ...restProps}){
  return <Option{...restProps}>{children}</Option>
}

