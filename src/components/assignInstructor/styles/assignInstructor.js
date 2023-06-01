import styled from "styled-components";
import { Colors } from "../../../constants/globalStyle";

export const TableRow = styled.div`
  align-items:center;
  border-radius:10px;
  display:flex;
  background-color: #ffffff;
  margin-top:10px;
  margin-right:10px;
  padding-left:50px;
  width:730px;
  height:70px;
`;

export const Div = styled.div`
  position: relative;
  display:flex;
  background-color: ${Colors.bg_lightgray};
  margin-top:110px;
  width: calc(60%);
  margin-left:auto;
  margin-right:auto;
  border-radius:40px;
  padding-top:10px;
  padding-left:30px;
  height:550px;
`;

export const List = styled.ul`
  max-height: 330px;
  overflow-y:scroll;
  position: absolute;
  top:19%;
  left:50%;
  transform: translate(-50%, 0%);
`;

export const CourseId = styled.p`
  margin-left:30px;
  font-size: 18px;
  width: 150px;
`;

export const CourseName = styled.p`
  font-size: 18px;
  width: 270px;
`;

export const Label = styled.p`
  margin-top:10px;
  margin-left:5px;
  font-weight: 500;
  font-size:24px;
`;

export const LabelDiv = styled.div`
  display:flex;
  background-color: #f4f4f4;
  padding-left:60px;
  width:730px;

  position: absolute;
    top:18%;
    left:50%;
    transform: translate(-50%, -50%);
`;

export const Select = styled.select`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  font-size: 14px;
  font-family: Verdana;
  padding-left: 15px;
`;

export const Option = styled.option``;

export const Line = styled.div`
  height:1px;
  width:710px;
  background-color: black;
  position: absolute;
  top:22%;
  left:50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  border-radius:10px;
  width: 260px;
  height:45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:18px;
  border-width:0px;
  background:${Colors.primarycolor};
  color: ${Colors.onDark};
  position: absolute;
    bottom:3%;
    left:50%;
    transform: translate(-50%, -50%);

`;
