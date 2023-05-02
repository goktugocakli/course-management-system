import styled from "styled-components/macro";

import { Themes } from "../../../constants/globalStyle";

export const Container = styled.div`
  --bg-color: ${({ white }) => Themes[white].background};
  --c-color: ${({ white }) => Themes[white].color};
  background: var(--bg-color);
  color: var(--c-color);
  display: flex;
  flex-direction: column;
`;

export const InformationContainer = styled.div`
  background: green;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const Name = styled.p``;

export const Role = styled.p``;

export const Picture = styled.img`
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
`;

export const Events = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const EventTitle = styled.h1``;

export const EventInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const EventItem = styled.div`
  background: red;
`;
