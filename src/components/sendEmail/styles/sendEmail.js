import styled from 'styled-components'


export const Text = styled.p`

  margin-top:25px;
  margin-left:10px;
  font-size:16px;
  margin-block-end: 10px;
  
`;

export const Input = styled.input`
  width: 450px;
  height:40px;
  margin-left: 10px; 
  margin-right: 0;
  margin-top:10px;
  border-radius: 10px;
`;


export const Input2 = styled.input`
  width: 450px;
  height:300px;
  margin-left: 10px; 
  margin-right: 0;
  margin-top:10px;
  border-radius: 10px;
`;


export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 15px;
  margin-left:365px;
  margin-inline-end: 1000px;
  margin-top: 50px;
  font-size: 20px;
  color: purple;
  background-color: greenyellow;
  &:hover {
    outline: 1px solid green;
    border-radius: 15px;
}
`;
