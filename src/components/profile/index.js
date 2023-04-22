import React from "react";
import {Photo, TextBold, Text, Button} from "./styles/profile";

export default function Profile({children, ...restPorps}) {
    return ;
}

Profile.Photo = function profilePhoto({children, ...restPorps}){
    return <Photo {...restPorps}>{children}</Photo>

}

Profile.Text = function profileText({children}){
    return <Text>{children}</Text>

}

Profile.TextBold = function profileTextBold({children}){
    return <TextBold>{children}</TextBold>

}

Profile.Button = function profileButton({children,...restPorps}){
    return <Button>{children}</Button>
}