import styled from "styled-components/macro";

import { Themes } from "../../../constants/globalStyle";

import { ToastContainer } from "react-toastify";

export const Container = styled.div`
  --bg-color: ${({ white }) => Themes[white].background};
  --c-color: ${({ white }) => Themes[white].color};
  background: var(--bg-color);
  color: var(--c-color);
  display: flex;
  flex-direction: column;
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
  gap: 1rem;
`;

export const EventItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
  align-items: center;
  justify-content: space-between;
`;
