import { useState } from "react";
import { EnrollCourse } from "../../components";
import {
  useFetchCourses,
  FetchAssignIntructorToCourse,
  FetchEnrollCourse,
} from "../../constants/api";

const renderCourses = (courses) => {
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
  const { data } = useFetchCourses();

  const [succ, setS] = useState(false);

  const options = {
    onSuccess: (response) => {
      console.log(response);
      setS(true);
    },
    onError: (err) => {
      console.log(err.message);
      setS(false);
    },
  };

  return (
    <EnrollCourse>
      <EnrollCourse.SearchContainer>
        <EnrollCourse.SearchInput />
        <EnrollCourse.SearchButton>Search</EnrollCourse.SearchButton>
      </EnrollCourse.SearchContainer>
      <EnrollCourse.ListContainer>
        {renderCourses([])}
      </EnrollCourse.ListContainer>
      {succ ? <p>asdhkasjdaskdl</p> : <p>yanlis</p>}
      <button
        onClick={() => {
          /*FetchAssignIntructorToCourse(
            "ins",
            {
              id: "BBM-456",
              semester: "Spring",
              year: "2023",
            },
            options
          );*/

          FetchEnrollCourse(
            "01",
            {
              id: "BBM-456",
              semester: "Spring",
              year: 2023,
            },
            options
          );
        }}
      >
        Assign ins
      </button>
    </EnrollCourse>
  );
}
