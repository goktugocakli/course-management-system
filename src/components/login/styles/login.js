import styled from "styled-components/macro";

export const Button = styled.button`

  margin-top:30px;
  margin-left:auto;
  border-radius:10px;
  width: 260px;
  height:45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:18px;
  
  &:hover {
      outline: 2px solid green;
  }

`;

export const InputLabel = styled.label`
  margin-top:10px;
  margin-right:15px;
  font-size:24px;
`;

export const Input = styled.input.attrs((props) => ({type:props.type}))`
  width: 250px;
  height:40px;
  font-size: 16px;
  font-family: Verdana;
  margin-left: auto; 
  margin-right: 0;
  margin-top:20px;
  padding-left:10px;
  border-radius: 10px;
`;


export const Form = styled.form`
  display:flex;
  background-color: #f4f4f4;
  padding: 100px;
  border-radius: 5px;
`;

export const Text = styled.p`
  margin-top:10px;
  margin-left:5px;
  font-size:16px;
`;

export const Icon = styled.i`
    position: absolute;
    top:50%;
    right:8px;
`;



