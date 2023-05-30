import React from "react";
import {
  Label,
  AlertText,
  Text,
  Icon,
  AddButton,
  StartButton,
  Div,
  Select,
  Option,
  LabelDiv,
  InputRow,
  InputColumn,
  DateRow,
  Input,
  InputLabel,
  Line,
  List,
  ListItem,
  SemesterContainer,
} from "./styles/addSemester";

export default function AddSemester({ children, ...restProps }) {
  return;
}

AddSemester.Div = function semestersDiv({ children, ...restPorps }) {
  return <Div>{children}</Div>;
};

AddSemester.LabelDiv = function labelDiv({ children, ...restPorps }) {
  return <LabelDiv>{children}</LabelDiv>;
};

AddSemester.InputRow = function inputRow({ children, ...restPorps }) {
  return <InputRow>{children}</InputRow>;
};

AddSemester.InputColumn = function inputColumn({ children, ...restPorps }) {
  return <InputColumn>{children}</InputColumn>;
};

AddSemester.DateRow = function dateRow({ children, ...restPorps }) {
  return <DateRow>{children}</DateRow>;
};

AddSemester.Input = function input({ ...restProps }) {
  return <Input {...restProps} />;
};

AddSemester.InputLabel = function inputLabel({ children, ...restPorps }) {
  return <InputLabel {...restPorps}>{children}</InputLabel>;
};

AddSemester.AddButton = function addButton({ children, onClick }) {
  return <AddButton onClick={onClick}>{children}</AddButton>;
};

AddSemester.StartButton = function startButton({ children, ...restPorps }) {
  return <StartButton {...restPorps}>{children}</StartButton>;
};

AddSemester.AlertText = function semestersAlertText({
  children,
  ...restPorps
}) {
  return <AlertText>{children}</AlertText>;
};

AddSemester.Text = function semestersText({ children, ...restPorps }) {
  return <Text>{children}</Text>;
};

AddSemester.Label = function semestersLabel({ children, ...restPorps }) {
  return <Label>{children}</Label>;
};

AddSemester.Icon = function semestersIcon({ children }) {
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

AddSemester.Line = function line() {
  return <Line />;
};

AddSemester.List = function list({ children }) {
  return <List>{children}</List>;
};

AddSemester.ListItem = function semestersListItem({ children, ...restPorps }) {
  return <ListItem>{children}</ListItem>;
};

AddSemester.Select = function selectType({children, ...restProps}){
  return <Select{...restProps}>{children}</Select>
}

AddSemester.Option = function typeOption({children, ...restProps}){
  return <Option{...restProps}>{children}</Option>
}

