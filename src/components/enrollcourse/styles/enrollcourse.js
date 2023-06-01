import styled from "styled-components/macro";

import { Colors } from "../../../constants/globalStyle";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap:3rem;
    padding-top: 3rem;
    align-items: center;
    width: 100vw;
    height: 80vh;

`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background: ${Colors.bg_lightgray};
  height:100px;
  width:700px;
  margin-left:auto;
  margin-right:auto;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 1.25rem;
  margin-left:40px;
  font-family: Arial, Verdana, sans-serif;
`;

export const Instructors = styled.p`
  font-size: 1.25rem;
`;

export const EnrollButton = styled.button`
  border-radius: 10px;
  width:120px;
  height:40px;
  border-width:0px;
  margin-right:20px;

  background-color: ${Colors.successcolor};
  color: white;
`;
