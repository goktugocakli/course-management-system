import styled from "styled-components/macro";
import { Colors } from "../../../constants/globalStyle";

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
  
  &:hover {
      outline: 2px solid green;
  }

`;

export const PhotoButton = styled.button`

  margin-top:30px;
  margin-left:110px;
  border-radius:10px;
  width: 120px;
  height:45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:14px;
  
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
  font-size:16px;
  padding-left:10px;
  margin-left: auto; 
  margin-right: 0;
  margin-top:20px;
  border-radius: 10px;
`;


export const Form = styled.form`
  display:flex;
  padding: 100px;
  border-radius: 5px;
`;

export const Text = styled.p`
  margin-top:10px;
  margin-left:5px;
  font-size:16px;
`;

export const Photo = styled.img.attrs((props) => ({
  src:props.src
}))`
  width:150px;
  height:150px;
  margin-left:100px;
  margin-right:100px;
  margin-top:20px;
  margin-bottom:auto;
`;





