import React from "react";

import{Text, Input, Button, Input2} from "./styles/sendEmail"


export default function SendEmail({children, ...restPorps}) {
    return <p{...restPorps}>{children}</p>
}

SendEmail.Text = function sendEmailText({children,...restPorps}){
    return <Text{...restPorps}>{children}</Text>
}

SendEmail.Input = function sendEmailinput({children,...restPorps}){
    return <Input{...restPorps}>{children}</Input>
}

SendEmail.Button = function sendEmailbutton({children,...restPorps}){
    return <Button{...restPorps}>{children}</Button>
}

SendEmail.Input2 = function sendEmailinput({children,...restPorps}){
    return <Input2{...restPorps}>{children}</Input2>
}