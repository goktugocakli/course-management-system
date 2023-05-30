import React from "react";

import {Text1, Text, Input, Button, Select, Option} from "./styles/manipulateAccount";

export default function ManipulateAccount({children, ...restPorps}) {
    return <p{...restPorps}>{children}</p>
}

ManipulateAccount.Text1 = function manipulateAccountmainText({children,...restPorps}){
    return <Text1{...restPorps}>{children}</Text1>
}

ManipulateAccount.Text = function manipulateAccountText({children,...restPorps}){
    return <Text{...restPorps}>{children}</Text>
}

ManipulateAccount.Input = function manipulateAccountInput({children,...restPorps}){
    return <Input{...restPorps}>{children}</Input>
}

ManipulateAccount.Button = function manipulateAccountButton({children,...restPorps}){
    return <Button{...restPorps}>{children}</Button>
}

ManipulateAccount.Select = function manipulateAccountSelect({children,...restPorps}){
    return <Select{...restPorps}>{children}</Select>
}

ManipulateAccount.Option = function manipulateAccountOption({children,...restPorps}){
    return <Option{...restPorps}>{children}</Option>
}


