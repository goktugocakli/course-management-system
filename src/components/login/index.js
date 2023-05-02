import React from "react";
import {Label, Button} from "./styles/login";


export default function Login({children, ...restPorps}) {
    return <p>{children}</p>;
}



Login.Label = function LoginLabel({children}){
    return <Label >{children}</Label>;

}

Login.Button = function LoginButton({children,...restPorps}){
    return <Button>{children}</Button>
}

