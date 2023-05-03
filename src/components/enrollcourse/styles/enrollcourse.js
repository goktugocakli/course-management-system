import styled from "styled-components/macro";

import { Themes } from "../../../constants/globalStyle";

export const Container = styled.div`
    --bg-color = ${({ white }) => Themes[white].background};
    --clr-color: ${({ white }) => Themes[white].color};

    display: flex;
    flex-direction: column;
    gap:3rem;
    padding-top: 3rem;
    align-items: center;
    width: 100vw;
    height: 80vh;
    background: #146C94;

`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;

  justify-content: space-around;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 120%;
`;

export const SearchButton = styled.div`
  position: absolute;
  right: 1rem;
  cursor: pointer;

  &:hover {
    background: red;
  }
`; //this is going to be a button

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;

`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  background: #F6F1F1;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 1.25rem;
`;

export const Instructors = styled.p`
  font-size: 0.75rem;
`;

export const EnrollButton = styled.div`
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;

  background-color: #AD7BE9;
  color: white;

  &:hover {
    background: green;
  }
`;
