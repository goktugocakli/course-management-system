import React from "react";
import {Row, Column, Space, Header, HeaderBold, HeaderNormal} from "./styles/global";

export default function Global({children, ...restPorps}) {
    return <Column>{children}</Column>;
}

Global.Row = function globalRow({children}){
    return <Row>{children}</Row>;

}

Global.Column = function globalColumn({children}){
    return <Column>{children}</Column>;

}

Global.Space = function globalSpace({children}){
    return <Space>{children}</Space>;

}

Global.Header = function globalHeader({children}){
    return <Header>{children}</Header>;

}

Global.HeaderBold = function globalHeaderBold({children}){
    return <HeaderBold>{children}</HeaderBold>;

}

Global.HeaderNormal = function globalHeaderNormal({children}){
    return <HeaderNormal>{children}</HeaderNormal>;

}




