import styled from 'styled-components'

export const Text1 = styled.p`

  margin-top:25px;
  margin-left:10px;
  font-size:32px;
  margin-block-end: 10px;
  
`;

export const Text = styled.p`
  margin: 25px 10px 10px 0;
  font-size: 16px;
  display: inline-block;
  
`;

export const Input = styled.input`
  width: 200px;
  height: 35px;
  margin: 10px 10px 0 0;
  border-radius: 10px;
  display: inline-block;
  font-size: medium;
  margin-inline-end: 100px;
  
`;

export const Button = styled.button`
  width: 170px;
  height: 40px;
  border-radius: 30px;
  margin-left:15px;
  margin-inline-end: 30px;
  margin-top: 10px;
  font-size: 15px;
  color: white;
  background-color: ${props => props.color || 'red'};
  &:hover {
    outline: 1px red;
    border-radius: 30px;
}
`;

export const Select = styled.select`
  width: 200px;
  height:40px;
  border-radius: 30px;
  font-size: 16px;
  font-family: Verdana;
  padding-left:15px;
  margin-left:20px;

`;

export const Option = styled.option`
    
`;