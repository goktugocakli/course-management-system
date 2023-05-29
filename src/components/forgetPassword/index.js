import React from "react";
import { Button, InputLabel, Input, Div, Text } from "./styles/forgetPassword";

export default function ForgetPassword({ children, ...restPorps }) {
  return;
}

ForgetPassword.Button = function ForgetPasswordButton({
  children,
  ...restPorps
}) {
  return <Button {...restPorps}>{children}</Button>;
};

ForgetPassword.InputLabel = function ForgetPasswordLabel({
  children,
  ...restPorps
}) {
  return <InputLabel {...restPorps}>{children}</InputLabel>;
};

ForgetPassword.Input = function ForgetPasswordInput({
  children,
  ...restPorps
}) {
  return <Input {...restPorps}>{children}</Input>;
};

ForgetPassword.Div = function ForgetPasswordDiv({ children, ...restPorps }) {
  return <Div>{children}</Div>;
};

ForgetPassword.Text = function ForgetPasswordText({ children, ...restPorps }) {
  return <Text>{children}</Text>;
};
