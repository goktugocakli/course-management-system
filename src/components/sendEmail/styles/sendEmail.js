import styled from "styled-components";
import {Colors} from "../../../constants/globalStyle";

export const Text = styled.p`
  margin-top: 25px;
  margin-left: 10px;
  font-size: 16px;
  margin-block-end: 10px;
`;

export const Div= styled.div`
  margin-left:100px;
  margin-top:50px;
`;

export const Input = styled.input`
  width: 450px;
  height: 40px;
  margin-left: 10px;
  margin-right: 0;
  margin-top: 10px;
  border-radius: 10px;
  padding-left:15px;
`;

export const Input2 = styled.textarea`
  rows: 5;
  cols: 20;
  width: 450px;
  height: 300px;
  margin-left: 10px;
  margin-right: 0;
  margin-top: 10px;
  border-radius: 10px;
  padding:15px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  margin-left: 315px;
  margin-inline-end: 1000px;
  margin-top: 50px;
  font-size: 20px;
  border-width:0px;
  background:${Colors.primarycolor};
  color:${Colors.onDark};
  &:hover {
    outline: 1px solid green;
    border-radius: 15px;
  }
`;
