import styled from "styled-components/macro";
import { Themes } from "../../../constants/globalStyle";

export const Container = styled.div`
  --bg-color: ${({ white }) => Themes[white].background};
  --clr-color: ${({ white }) => Themes[white].color};
  color: var(--clr-color);

  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  padding-left: 1px;
  padding-top: 1px;
  height: 88vh;
  overflow: scroll;
`;

export const Wrapper = styled.div`
  outline: 1px solid #d0d4e4;
  padding: 1rem;
`;

export const EvaluationColumn = styled.input`
  border: none;

  &:hover,
  &:focus {
    outline: 1px solid #d0d4e4;
  }
`;

export const EvaluationItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--clr-color);
  width: max-content;
  min-width: 1300px;
`;

export const EvaluationQuestionContainer = styled.div`
  display: flex;
  position: sticky;
  left: 0px;
  background: white;
`;

export const EvaluationQuestion = styled.input`
  flex: 1;
  width: 500px;
  border: none;

  &:hover,
  &:focus {
    outline: 1px solid #d0d4e4;
  }

  &[readonly] {
    &:hover,
    &:focus {
      outline: none;
    }

    cursor: default;
  }
`;

export const EvaluationAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EvaluationAnswer = styled.input`
  border: none;

  &:hover,
  &:focus {
    outline: 1px solid #d0d4e4;
  }
`;

export const EvaluationAddAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  & svg path {
    stroke: #d0d4e4;
    stroke-dasharray: 5 95;
    transition: all 0.7s ease;
  }
  &:hover svg path {
    stroke-dasharray: 100 0;
    stroke: black;
  }
`;
