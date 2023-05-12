import React from "react";
import {Label, AlertText, Text, Icon , Button, Div, LabelDiv, Line, List, ListItem} from "./styles/semesters"

export default function Semesters({children, ...restProps}) {
    return
}

Semesters.Div = function semestersDiv({ children, ...restPorps }) {
    return (
      <Div>
        {children}
      </Div>
    );
};

Semesters.LabelDiv = function semestersLabelDiv({ children, ...restPorps }) {
    return (
      <LabelDiv>
        {children}
      </LabelDiv>
    );
};

Semesters.Button = function semesterButton({children,...restPorps}){
    return <Button>{children}</Button>
}
  
Semesters.AlertText = function semestersAlertText({ children, ...restPorps }) {
    return <AlertText>{children}</AlertText>;
};

Semesters.Text = function semestersText({ children, ...restPorps }) {
    return <Text>{children}</Text>;
};

Semesters.Label = function semestersLabel({ children, ...restPorps }) {
    return <Label>{children}</Label>;
};

Semesters.Icon = function semestersIcon({ children }) {

    return (
        <Icon>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="48" 
            viewBox="0 96 960 960" 
            width="48">
                <path d="m40 936 440-760 440 760H40Zm104-60h672L480 296 144 876Zm340.175-57q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM454 708h60V484h-60v224Zm26-122Z"/>
            </svg>
        </Icon>
    );

};

Semesters.Line = function line(){
    return(
        <Line/>
    )
}

Semesters.List = function list({children}) {
    return(
        <List>{children}</List>
    )
}

Semesters.ListItem = function semestersListItem({ children, ...restPorps }) {
    return (
      <ListItem>{children}</ListItem>
    );
};
  