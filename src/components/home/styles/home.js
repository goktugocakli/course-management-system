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

export const EventTitle = styled.h1`
  margin-left:10px;
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
  padding:30px;
  border-radius:10px;
  align-items: center;
  background:gray;
`;

export const EventLabel = styled.p`
  font-size:18px;
  font-weight: bold;
`;

export const EventText = styled.p`
  font-size:18px;
  margin-left:5px;
  margin-right:20px;
`;

export const ButtonRow = styled.div`
  display: flex;
  margin-left:auto;
  flex-direction: row;
  background:gray;
`;

export const Button = styled.button`

  margin-left:15px;
  border-radius:10px;
  width: 150px;
  height:40px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:16px;

`;
