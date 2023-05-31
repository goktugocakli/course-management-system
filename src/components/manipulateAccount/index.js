import React from "react";

import {
  Label,
  InputLabel,
  Input,
  Button,
  OutlineButton,
  Select,
  Option,
  Div,
  ButtonRow,
} from "./styles/manipulateAccount";

export default function ManipulateAccount({ children, ...restPorps }) {
  return <Div {...restPorps}>{children}</Div>;
}

ManipulateAccount.Label = function manipulateAccountmainText({
  children,
  ...restPorps
}) {
  return <Label {...restPorps}>{children}</Label>;
};

ManipulateAccount.InputLabel = function manipulateAccountText({
  children,
  ...restPorps
}) {
  return <InputLabel {...restPorps}>{children}</InputLabel>;
};

ManipulateAccount.Input = function manipulateAccountInput({
  children,
  ...restPorps
}) {
  return <Input {...restPorps}>{children}</Input>;
};

ManipulateAccount.Button = function manipulateAccountButton({
  children,
  ...restPorps
}) {
  return <Button {...restPorps}>{children}</Button>;
};

ManipulateAccount.OutlineButton = function manipulateAccountButton({
  children,
  ...restPorps
}) {
  return <OutlineButton {...restPorps}>{children}</OutlineButton>;
};

ManipulateAccount.Select = function manipulateAccountSelect({
  children,
  ...restPorps
}) {
  return <Select {...restPorps}>{children}</Select>;
};

ManipulateAccount.Option = function manipulateAccountOption({
  children,
  ...restPorps
}) {
  return <Option {...restPorps}>{children}</Option>;
};

ManipulateAccount.ButtonRow = function buttonRow({
  children,
  ...restPorps
}) {
  return <ButtonRow {...restPorps}>{children}</ButtonRow>;
};

