import React from "react";
import {Button, InputLabel, Input, Form, Text, Photo, PhotoButton} from "./styles/editprofile";


export default function Edit({children, ...restPorps}) {
    return ;
}

Edit.Button = function editButton({children,...restPorps}){
    return <Button {...restPorps}>{children}</Button>
}
Edit.PhotoButton = function editPhotoButton({children,...restPorps}){
    return <PhotoButton>{children}</PhotoButton>
}

Edit.InputLabel = function editLabel({children,...restPorps}){
    return <InputLabel>{children}</InputLabel>
}

Edit.Input = function editInput({children,...restPorps}){
    return <Input>{children}</Input>
}

Edit.Form = function editForm({children,...restProps}){
    return <Form {...restProps}>{children}</Form>
}

Edit.Text = function editText({children,...restPorps}){
    return <Text>{children}</Text>
}

Edit.Photo = function editPhoto({children,...restProps}){
    return <Photo {...restProps}>{children}</Photo>

}