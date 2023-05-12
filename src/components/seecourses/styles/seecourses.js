import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding: 2rem;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 30vw;
`;

export const SearchButton = styled.div`
  position: absolute;
  right: 1%;
  top: 0;

  cursor: pointer;

  &:hover {
    background: red;
  }
`;

export const ListContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: green;
  padding: 1rem;
`;

export const CourseId = styled.p`
  font-weight: 900;
  font-size: 1.25rem;
`;

export const CourseName = styled.p``;

export const DetailButton = styled.div`
  cursor: pointer;

  &:hover {
    background: blue;
  }
`;

export const DetailContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: grey;

  gap: 2rem;
  padding: 1rem;
`;

export const DetailName = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`;

export const Details = styled.div``;

export const DetailAKTS = styled.div``;

export const DetailInstructorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Instructor = styled.div`
  font-size: 1.25rem;
`;

export const CloseButton = styled.div`
  cursor: pointer;

  &:hover {
    background: purple;
  }
`;
