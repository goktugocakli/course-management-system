import styled from "styled-components/macro";

import { Colors } from "../../../constants/globalStyle";

export const Container = styled.div`
  background: white;
  color: ${Colors.onWhite};
  display: flex;
  flex-direction: column;
`;

export const Events = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

`;

export const EventTitle = styled.p`
  margin-left:10px;
  font-weight:200;
  font-size:26px;
  font-family: Arial, Verdana, sans-serif;
`;

export const EventInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const EventItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height:50px;
  padding:40px;
  border-radius:10px;
  align-items: center;
  background:${Colors.bg_lightgray};
`;

export const Column= styled.div`
  display: flex;
  flex-direction: column;
  background:${Colors.bg_lightgray};
`;

export const EventLabel = styled.p`
  font-size:18px;
  font-weight: bold;
  font-family: Arial, Verdana, sans-serif;
`;

export const EventText = styled.p`
  font-size:18px;
  margin-left:5px;
  margin-right:20px;
  font-family: Arial, Verdana, sans-serif;
`;

export const ButtonRow = styled.div`
  display: flex;
  margin-left:auto;
  flex-direction: row;
  background:${Colors.bg_lightgray};
`;

export const GrantButton = styled.button`

  margin-left:15px;
  border-radius:10px;
  width: 150px;
  height:40px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:16px;
  border-width:0px;
  background: ${Colors.successcolor};
  color:white;


`;

export const DenyButton = styled.button`

  margin-left:15px;
  border-radius:10px;
  width: 150px;
  height:40px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:16px;
  border-width:0px;
  background: #F15A59;
  color:white;


`;

export const Icon = styled.i`
    margin-left:auto;
`;
