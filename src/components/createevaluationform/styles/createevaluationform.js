import styled from "styled-components/macro";
import { Colors } from "../../../constants/globalStyle";

export const Container = styled.div`
  color: ${Colors.onWhite};
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  padding-left: 70px;
  padding-top: 100px;
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
  color: ${Colors.onWhite};
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

export const FloatingContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 4rem;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropDownCourse = styled.div`
  position: relative;
  cursor: pointer;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  width: 200px;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  outline: 1px solid #d0d4e4;
  max-height: 500px;
  overflow-y: scroll;
`;

export const UploadButton = styled.div`
  cursor: pointer;
  outline: 1px solid red;
  padding: 1rem;
`;

export const AddExistingQuestion = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ExistingQContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 0;
  width: 400px;
  max-height: 500px;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  outline: 1px solid #d0d4e4;
  background: white;
  overflow-y: scroll;
`;
