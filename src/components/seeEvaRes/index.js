import React from "react";

import { InputLabel, Text, Button } from "./styles/seeevares";

export default function SeeEvaRes({ children, ...restPorps }) {
  return <div>{children}</div>;
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

SeeEvaRes.Button = function SeeEvaResButton({ children, ...restPorps }) {
  return <Button>{children}</Button>;
};
