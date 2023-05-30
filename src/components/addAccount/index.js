import React from "react";
import {Label, SaveButton, CancelButton, Background, InputRow, Div, Input, InputLabel, Select, Option} from "./styles/addAccount"

export default function AddAccount({children, ...restProps}) {
    return 
}

AddAccount.Background = function accountsBackground({ children, ...restPorps }) {
    return (
      <Background>
        {children}
      </Background>
    );
};

AddAccount.Div = function accountDiv({ children, ...restPorps }) {
    return (
      <Div>
        {children}
      </Div>
    );
};


AddAccount.InputRow = function inputRow({ children, ...restPorps }) {
    return (
      <InputRow>
        {children}
      </InputRow>
    );
};



AddAccount.Input = function input({...restProps}) {
    return <Input {...restProps}/>;
};

AddAccount.InputLabel = function inputLabel({ children, ...restPorps }) {
    return <InputLabel>{children}</InputLabel>;
};
  

AddAccount.SaveButton = function saveButton({children, onClick}){
    return <SaveButton onClick={onClick}>{children}</SaveButton>
}

AddAccount.CancelButton = function cancelButton({children,onClick}){
    return <CancelButton onClick={onClick}>{children}</CancelButton>
}

AddAccount.Label = function addAccountLabel({ children, ...restPorps }) {
    return <Label>{children}</Label>;
};

AddAccount.Select = function selectType({children, ...restProps}){
  return <Select{...restProps}>{children}</Select>
}

AddAccount.Option = function typeOption({children, ...restProps}){
  return <Option{...restProps}>{children}</Option>
}
