import { EnrollCourse } from "../../components";

export default function EnrollContainer() {
  return (
    <EnrollCourse>
      <EnrollCourse.SearchContainer>
        <EnrollCourse.SearchInput />
        <EnrollCourse.SearchButton>Search</EnrollCourse.SearchButton>
      </EnrollCourse.SearchContainer>
      <EnrollCourse.ListContainer>
        <EnrollCourse.ListItem>
          <EnrollCourse.ItemInfo>
            <EnrollCourse.Name>Name</EnrollCourse.Name>

            <EnrollCourse.Instructors>Ins</EnrollCourse.Instructors>
          </EnrollCourse.ItemInfo>

          <EnrollCourse.EnrollButton>Enroll</EnrollCourse.EnrollButton>
        </EnrollCourse.ListItem>
      </EnrollCourse.ListContainer>
    </EnrollCourse>
  );
}
