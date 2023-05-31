import React from "react";
import {
  Label,
  AlertText,
  TypeText,
  NameText,
  IdText,
  EmailText,
  DepartmentText,
  Icon,
  Button,
  Div,
  LabelDiv,
  Line,
  List,
  ListItem,
} from "./styles/accounts";

export default function Accounts({ children, ...restProps }) {
  return;
}

Accounts.Div = function accountsDiv({ children, ...restPorps }) {
  return <Div>{children}</Div>;
};

Accounts.LabelDiv = function accountsLabelDiv({ children, ...restPorps }) {
  return <LabelDiv>{children}</LabelDiv>;
};

Accounts.Button = function accountsButton({ children, ...restPorps }) {
  return <Button {...restPorps}>{children}</Button>;
};

Accounts.AlertText = function accountsAlertText({ children, ...restPorps }) {
  return <AlertText>{children}</AlertText>;
};

Accounts.NameText = function accountsNameText({ children, ...restPorps }) {
  return <NameText {...restPorps}>{children}</NameText>;
};

Accounts.IdText = function accountsIdText({ children, ...restPorps }) {
  return <IdText {...restPorps}>{children}</IdText>;
};

Accounts.EmailText = function accountsEmailText({ children, ...restPorps }) {
  return <EmailText {...restPorps}>{children}</EmailText>;
};

Accounts.DepartmentText = function accountsDepartmentText({
  children,
  ...restPorps
}) {
  return <DepartmentText {...restPorps}>{children}</DepartmentText>;
};

Accounts.TypeText = function accountsTypeText({ children, ...restPorps }) {
  return <TypeText {...restPorps}>{children}</TypeText>;
};

Accounts.Label = function accountsLabel({ children, ...restPorps }) {
  return <Label>{children}</Label>;
};

Accounts.Icon = function accountsIcon({ children }) {
  return (
    <Icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 96 960 960"
        width="48"
      >
        <path d="m40 936 440-760 440 760H40Zm104-60h672L480 296 144 876Zm340.175-57q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM454 708h60V484h-60v224Zm26-122Z" />
      </svg>
    </Icon>
  );
};

Accounts.Line = function line() {
  return <Line />;
};

Accounts.List = function list({ children }) {
  return <List>{children}</List>;
};

Accounts.ListItem = function accountsListItem({ children, ...restPorps }) {
  return <ListItem {...restPorps}>{children}</ListItem>;
};
