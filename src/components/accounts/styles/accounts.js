import styled from "styled-components";
import {Colors} from "../../../constants/globalStyle";

export const Button = styled.button`

  border-radius:10px;
  width: 260px;
  height:45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:18px;
  color:${Colors.onDark};
  background:${Colors.primarycolor};
  border-width:0px;
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
  display:flex;
  background-color: #f4f4f4;
  padding-left:60px;
  width:930px;

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

export const NameText = styled.p`
  width:150px;
  font-weight: 500;
  font-size:20px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

export const IdText = styled.p`
  width:100px;
  margin-left:40px;
  font-weight: 500;
  font-size:20px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

export const EmailText = styled.p`
  width:220px;
  margin-left:40px;
  font-weight: 500;
  font-size:20px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

export const DepartmentText = styled.p`
  width:200px;
  margin-left:40px;
  font-weight: 500;
  font-size:20px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

export const TypeText = styled.p`
  width:110px;
  margin-left:40px;
  margin-right:30px;
  font-weight: 500;
  font-size:20px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

export const Icon = styled.i`
    position: absolute;
    top:40%;
    left:50%;
    transform: translate(-50%, -50%);
`;

export const Line = styled.div`
  height:1px;
  width:910px;
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
  transform: translate(-50%, 0%);
`;

export const ListItem = styled.div`
  align-items:center;
  border-radius:10px;
  display:flex;
  background-color: #ffffff;
  margin-top:10px;
  margin-right:10px;
  padding-left:50px;
  width:930px;
  height:50px;
`;
