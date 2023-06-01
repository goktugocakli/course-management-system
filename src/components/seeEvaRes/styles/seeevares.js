import styled from 'styled-components'
import { Colors } from "../../../constants/globalStyle";

export const InputLabel = styled.div`
  font-size: 24px;
  font-family: Arial, Verdana, sans-serif;
  margin-left:20px;
`;

export const Div = styled.div`
  margin-left:auto;
  margin-right:auto;
  margin-top:50px;
  padding:20px;
  width:700px;
  border-radius: 20px;
  background: ${Colors.bg_lightgray};
`;

export const Text = styled.p`
  font-family: Arial, Verdana, sans-serif;
  margin-top:25px;
  margin-left:25px;
  font-size:20px;
  
`;

export const Label = styled.p`
  font-family: Arial, Verdana, sans-serif;
  margin-top:25px;
  margin-left:25px;
  font-size:20px;
  font-weight:600;
  
`;

export const Button = styled.button`
  margin-left:45px;
  margin-inline-end: 100px;
  color: purple;
  &:hover {
    outline: 1px solid green;
    border-radius: 15px;
}
`;

export const Row= styled.div`
 display: flex;
 flex-direction: row;
 `;


 

