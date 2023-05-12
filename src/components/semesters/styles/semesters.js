import styled from "styled-components";

export const Button = styled.button`

  border-radius:10px;
  width: 260px;
  height:45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:18px;
  position: absolute;
    bottom:3%;
    left:50%;
    transform: translate(-50%, -50%);
  
  &:hover {
      outline: 2px solid green;
  }

`;

export const Div = styled.div`
  position: relative;
  display:flex;
  background-color: #f4f4f4;
  margin-top:150px;
  width: calc(70%);
  margin-left:auto;
  margin-right:auto;
  border-radius:40px;
  padding-top:10px;
  padding-left:30px;
  height:500px;
`;

export const LabelDiv = styled.div`
  justify-content:space-around;
  display:flex;
  background-color: #f4f4f4;
  width:700px;

  position: absolute;
    top:15%;
    left:50%;
    transform: translate(-50%, -50%);
`;

export const Label = styled.p`
  margin-top:10px;
  margin-left:5px;
  font-weight: 500;
  font-size:24px;
`;

export const AlertText = styled.p`
  font-weight: 600;
  font-size:20px;

  position: absolute;
    top:45%;
    left:50%;
    transform: translate(-50%, -50%);
`;

export const Text = styled.p`
  font-weight: 500;
  font-size:20px;
`;

export const Icon = styled.i`
    position: absolute;
    top:40%;
    left:50%;
    transform: translate(-50%, -50%);
`;

export const Line = styled.div`
  height:1px;
  width:700px;
  background-color: black;
  position: absolute;
  top:19%;
  left:50%;
  transform: translate(-50%, -50%);
`;

export const List = styled.ul`
  max-height: 300px;
  overflow-y:scroll;
  position: absolute;
  top:16%;
  left:50%;
  transform: translate(-51%, 0%);
`;

export const ListItem = styled.div`
  justify-content:space-around;
  align-items:center;
  border-radius:10px;
  display:flex;
  background-color: #ffffff;
  margin-top:10px;
  margin-right:10px;
  margin-left:10px;
  width:700px;
  height:50px;
`;
