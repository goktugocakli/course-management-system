import styled from "styled-components/macro";
import {Colors} from "../../../constants/globalStyle";

export const Button = styled.button`

  margin-top:30px;
  margin-left:auto;
  border-radius:10px;
  width: 260px;
  height:45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:18px;
  background:${Colors.primarycolor};
  color:${Colors.onDark};
  border-width:0px;

  
  &:hover {
      outline: 2px solid green;
  }

`;

export const InputLabel = styled.label`
  margin-top:10px;
  margin-right:15px;
  font-size:24px;
`;

export const Input = styled.input`
  width: 250px;
  height:40px;
  margin-left: auto; 
  margin-right: 0;
  margin-top:20px;
  border-radius: 10px;
  font-size: 16px;
  font-family: Verdana;
  padding-left:10px;
`;


export const Div = styled.div`
  display:flex;
  background-color: ${Colors.bg_lightgray};
  padding: 100px;
  border-radius: 5px;
  height: 550px;
`;

export const Text = styled.p`
  margin-top:10px;
  margin-left:5px;
  font-size:16px;
`;