import React from "react";
import {Button, InputLabel, Input, Form, Text} from "./styles/signup";


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

SignUp.Form = function signUpForm({children,...restPorps}){
    return <Form>{children}</Form>
}

SignUp.Text = function signUpText({children,...restPorps}){
    return <Text>{children}</Text>
}
