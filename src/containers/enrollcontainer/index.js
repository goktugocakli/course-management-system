import { EnrollCourse } from "../../components";

const courses = [
  {
    id: 0,
    code: "BBM382",
    name: "Bilmem ne Bilmem ne",
    instructors: [
      {
        id: 0,
        name: "bla bla bla",
      },
    ],
  },

  {
    id: 1,
    code: "BBM406",
    name: "Makine Öğrenmesi bla bla",
    instructors: [
      {
        id: 0,
        name: "Hacerr Yalım Keleş",
      },
    ],
  },
];

const renderCourses = () => {
  return (
    <>
      {courses.map((course) => {
        return (
          <EnrollCourse.ListItem key={course.id}>
            <EnrollCourse.ItemInfo>
              <EnrollCourse.Name>{course.name}</EnrollCourse.Name>

              {course.instructors.map((ins) => {
                return (
                  <EnrollCourse.Instructors key={ins.id}>
                    {ins.name}
                  </EnrollCourse.Instructors>
                );
              })}
            </EnrollCourse.ItemInfo>

            <EnrollCourse.EnrollButton onClick={() => {}}>
              Enroll
            </EnrollCourse.EnrollButton>
          </EnrollCourse.ListItem>
        );
      })}
    </>
  );
};

export default function EnrollContainer() {
  return (
    <EnrollCourse>
      <EnrollCourse.SearchContainer>
        <EnrollCourse.SearchInput />
        <EnrollCourse.SearchButton>Search</EnrollCourse.SearchButton>
      </EnrollCourse.SearchContainer>
      <EnrollCourse.ListContainer>{renderCourses()}</EnrollCourse.ListContainer>
    </EnrollCourse>
  );
}
