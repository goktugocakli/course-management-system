import styled from "styled-components";
import {Colors} from "../../../constants/globalStyle";

export const SaveButton = styled.button`
  border-radius: 10px;
  width: 275px;
  height: 45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 18px;
  background:${Colors.primarycolor};
  color:${Colors.onDark};
  border-width:0px;
  position: absolute;
  bottom: 15%;
  left: 55%;
  transform: translate(-50%, -50%);

`;

export const CancelButton = styled.button`
  border-radius: 10px;
  width: 275px;
  height: 45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 18px;

  border-color:${Colors.errorcolor};
  color:${Colors.errorcolor};
  border-width:1px;

  position: absolute;
  bottom: 5%;
  left: 55%;
  transform: translate(-50%, -50%);

`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  opacity: 0.6;
  background-color: #000;
`;

export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  flex-direction: column;
  background-color: #f0f0f0;
  border-radius: 40px;
  width: calc(40%);
  height: 90%;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(70%);
  margin-left: 65px;
  margin-top: 20px;
  justify-content: space-around;
  background-color: #f0f0f0;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  font-size: 16px;
  font-family: Verdana;
  border-radius: 10px;
  padding-left: 15px;
`;

export const Label = styled.p`
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 90px;
  font-weight: 500;
  font-size: 24px;
`;

export const InputLabel = styled.p`
  font-weight: 500;
  margin: 4px;
  font-size: 20px;
  width: 60px;
`;

export const Select = styled.select`
  width: 270px;
  height: 45px;
  border-radius: 10px;
  font-size: 16px;
  font-family: Verdana;
  padding-left: 15px;
`;

export const Option = styled.option``;
