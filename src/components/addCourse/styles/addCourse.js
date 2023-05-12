import styled from "styled-components";

export const SaveButton = styled.button`

  border-radius:10px;
  width: 275px;
  height:45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:18px;
  position: absolute;
    bottom:15%;
    left:55%;
    transform: translate(-50%, -50%);
  
  &:hover {
      outline: 2px solid green;
  }

`;

export const CancelButton = styled.button`

  border-radius:10px;
  width: 275px;
  height:45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:18px;
  position: absolute;
    bottom:5%;
    left:55%;
    transform: translate(-50%, -50%);
  
  &:hover {
      outline: 2px solid green;
  }

`;


export const Background = styled.div`
  position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
  display:flex;
  opacity:0.6;
  background-color: #000;
`;

export const Div = styled.div`
  position:absolute;
    top:40%;
    left:50%;
    transform: translate(-50%, -50%);
  display:flex;
  
  flex-direction: column;
  background-color: #f0f0f0;
  border-radius:40px;
  width: calc(30%);
  height: calc(62%);
`;


export const InputRow = styled.div`
  display:flex;
  flex-direction: row;
  width: calc(70%);
  margin-left: 65px;
  margin-top:30px;
  justify-content:space-around;
  background-color: #f0f0f0;
`;

export const Input = styled.input`
  width: 250px;
  height:40px;
  font-size: 16px;
  font-family: Verdana;
  border-radius: 10px;
  padding-left:15px;
`;

export const Label = styled.p`
  margin-top:50px;
  margin-bottom:20px;
  margin-left:90px;
  font-weight: 500;
  font-size:24px;
`;

export const InputLabel = styled.p`
  font-weight: 500;
  margin:4px;
  font-size:20px;
`;

export const Select = styled.select`
  width: 270px;
  height:45px;
  border-radius: 10px;
  font-size: 16px;
  font-family: Verdana;
  padding-left:15px;
  margin-left:20px;
`;

export const Option = styled.option`
    
`;



