import styled from "styled-components/macro";

import { Themes } from "../../../constants/globalStyle";

export const Container = styled.div`
    --bg-color = ${({ white }) => Themes[white].background};
    --clr-color: ${({ white }) => Themes[white].color};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input``;

export const SearchButton = styled.div`
  cursor: pointer;

  &:hover {
    background: red;
  }
`; //this is going to be a button

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p``;

export const Instructors = styled.p``;

export const EnrollButton = styled.div`
  cursor: pointer;

  &:hover {
    background: green;
  }
`;
