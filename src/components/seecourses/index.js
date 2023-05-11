import {
  Container,
  SearchContainer,
  SearchInput,
  SearchButton,
  ListContainer,
  Item,
  CourseId,
  CourseName,
  DetailButton,
  DetailContainer,
  DetailName,
  Details,
  DetailAKTS,
  DetailInstructorContainer,
  Instructor,
  CloseButton,
} from "./styles/seecourses";

export default function SeeCourses({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SeeCourses.SearchContainer = function SeeCoursesSearchContainer({
  children,
  ...restProps
}) {
  return <SearchContainer {...restProps}>{children}</SearchContainer>;
};

SeeCourses.SeachInput = function SeeCoursesSearchInput({ ...restProps }) {
  return <SearchInput {...restProps} />;
};

SeeCourses.SearchButton = function SeeCoursesSearchButton({
  children,
  ...restProps
}) {
  return <SearchButton {...restProps}>{children}</SearchButton>;
};

SeeCourses.ListContainer = function SeeCoursesListContainer({
  children,
  ...restProps
}) {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};

SeeCourses.Item = function SeeCoursesItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

SeeCourses.CourseId = function SeeCoursesId({ children, ...restProps }) {
  return <CourseId {...restProps}>{children}</CourseId>;
};

SeeCourses.CourseName = function SeeCoursesName({ children, ...restProps }) {
  return <CourseName {...restProps}>{children}</CourseName>;
};

SeeCourses.DetailButton = function SeeCoursesDetailButton({
  children,
  ...restProps
}) {
  return <DetailButton {...restProps}>{children}</DetailButton>;
};

SeeCourses.DetailContainer = function SeeCoursesDetailContainer({
  children,
  ...restProps
}) {
  return <DetailContainer {...restProps}>{children}</DetailContainer>;
};

SeeCourses.DetailName = function SeeCoursesDetailName({
  children,
  ...restProps
}) {
  return <DetailName {...restProps}>{children}</DetailName>;
};

SeeCourses.Details = function SeeCoursesDetails({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>;
};

SeeCourses.DetilAKTS = function SeeCoursesDetailAKTS({
  children,
  ...restProps
}) {
  return <DetailAKTS {...restProps}>{children}</DetailAKTS>;
};

SeeCourses.DetailInstructorContainer = function SeeCoursesInstructorContainer({
  children,
  ...restProps
}) {
  return (
    <DetailInstructorContainer {...restProps}>
      {children}
    </DetailInstructorContainer>
  );
};

SeeCourses.Instructor = function SeeCoursesInstructor({
  children,
  ...restProps
}) {
  return <Instructor {...restProps}>{children}</Instructor>;
};

SeeCourses.CloseButton = function SeeCoursesCloseButton({
  children,
  ...restProps
}) {
  return <CloseButton {...restProps}>{children}</CloseButton>;
};
