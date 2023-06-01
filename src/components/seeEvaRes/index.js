import React from "react";

import { InputLabel, Text, Label, Button , Div, Row } from "./styles/seeevares";

export default function SeeEvaRes({ children, ...restPorps }) {
  return <Div>{children}</Div>;
}

SeeEvaRes.InputLabel = function SeeEvaResInputLabel({
  children,
  ...restPorps
}) {
  return <InputLabel>{children}</InputLabel>;
};

SeeEvaRes.Text = function SeeEvaResText({ children, ...restPorps }) {
  return <Text>{children}</Text>;
};

SeeEvaRes.Label = function SeeEvaResLabel({ children, ...restPorps }) {
  return <Label>{children}</Label>;
};

SeeEvaRes.Button = function SeeEvaResButton({ children, ...restPorps }) {
  return <Button>{children}</Button>;
};

SeeEvaRes.Row = function SeeEvaResRow({ children, ...restPorps }) {
  return <Row>{children}</Row>;
};

