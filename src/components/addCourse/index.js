import React from "react";
import {Label, SaveButton, CancelButton, Background, InputRow, Div, Input, InputLabel, Select, Option} from "./styles/addCourse"

export default function AddCourse({children, ...restProps}) {
    return
}

AddCourse.Background = function coursesBackground({ children, ...restPorps }) {
    return (
      <Background>
        {children}
      </Background>
    );
};

AddCourse.Div = function courseDiv({ children, ...restPorps }) {
    return (
      <Div>
        {children}
      </Div>
    );
};


AddCourse.InputRow = function inputRow({ children, ...restPorps }) {
    return (
      <InputRow>
        {children}
      </InputRow>
    );
};



AddCourse.Input = function input({...restProps}) {
    return <Input {...restProps}/>;
};

AddCourse.InputLabel = function inputLabel({ children, ...restPorps }) {
    return <InputLabel>{children}</InputLabel>;
};
  

AddCourse.SaveButton = function saveButton({children, onClick}){
    return <SaveButton onClick={onClick}>{children}</SaveButton>
}

AddCourse.CancelButton = function cancelButton({children,onClick}){
    return <CancelButton onClick={onClick}>{children}</CancelButton>
}

AddCourse.Label = function addCourseLabel({ children, ...restPorps }) {
    return <Label>{children}</Label>;
};

AddCourse.Select = function selectType({children, ...restProps}){
  return <Select{...restProps}>{children}</Select>
}

AddCourse.Option = function typeOption({children, ...restProps}){
  return <Option{...restProps}>{children}</Option>
}
