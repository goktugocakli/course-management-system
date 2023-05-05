import React from "react";
import {Button, InputLabel, Input, Div, Text} from "./styles/signup";


export default function SignUp({children, ...restPorps}) {
    return ;
}

SignUp.Button = function signUpButton({children,...restPorps}){
    return <Button>{children}</Button>
}

SignUp.InputLabel = function signUpLabel({children,...restPorps}){
    return <InputLabel>{children}</InputLabel>
}

SignUp.Input = function signUpInput({children,...restPorps}){
    return <Input>{children}</Input>
}

SignUp.Div = function signUpDiv({children,...restPorps}){
    return <Div>{children}</Div>
}

SignUp.Text = function signUpText({children,...restPorps}){
    return <Text>{children}</Text>
}
