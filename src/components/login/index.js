import React from "react";
import {Button, InputLabel, Input, Form, Text} from "./styles/login";


export default function Login({children, ...restPorps}) {
    return ;
}

Login.Button = function LoginButton({children,...restPorps}){
    return <Button>{children}</Button>
}

Login.InputLabel = function loginLabel({children,...restPorps}){
    return <InputLabel>{children}</InputLabel>
}

Login.Input = function loginInput({children,...restPorps}){
    return <Input>{children}</Input>
}

Login.Form = function loginForm({children,...restPorps}){
    return <Form>{children}</Form>
}

Login.Text = function loginText({children,...restPorps}){
    return <Text>{children}</Text>
}

