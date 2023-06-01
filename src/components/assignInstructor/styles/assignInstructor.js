import styled from "styled-components";

export const TableRow = styled.div`
  background: white;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  padding: 8px;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  
`;

export const TableColumn = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: gray;
  border-radius: 10px;
  width: 1000px;
  height: 500px;
`;

export const CourseId = styled.p`
  margin-right: 160px;
  font-size: 18px;
  width: 150px;
`;

export const CourseName = styled.p`
  font-size: 18px;
  width: 200px;
`;

export const LabelDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  display: flex;
  flex-direction: row;
`;

export const Select = styled.select`
  margin-top: 8px;
  width: 200px;
  height: 40px;
  border-radius: 30px;
  font-size: 14px;
  font-family: Verdana;
  padding-left: 15px;
  margin-left: 30px;
`;

export const Option = styled.option``;

export const Line = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 1px;
  width: 710px;
  background-color: black;
`;

export const Button = styled.button`
  width: 220px;
  height: 40px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  font-size: 20px;
  color: white;
  background-color: purple;
`;
