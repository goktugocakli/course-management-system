import {  useState } from "react";
import { SeeCourses } from "../../components";


const courses = [
  {
    id: 0,
    code: "BBM406",
    name: "asdasd",
    akts: "akts",
    instructors: [
      {
        id: 0,
        name: "name of the instructor",
        surname: "surname of the ins",
      },
      {
        id: 1,
        name: "name of the instructor",
        surname: "surname of the ins",
      },
    ],
  },
  {
    id: 1,
    code: "BBM409",
    name: "asdasdasdasdasd",
    akts: "akts",
    instructors: [
      {
        id: 0,
        name: "name of the instructor",
        surname: "surname of the ins",
      },
      {
        id: 1,
        name: "name of the instructor",
        surname: "surname of the ins",
      },
    ],
  },
];

export default function SeeCoursesContainer() {
  const [details, setDetails] = useState({
    expanded: false,
    courseId: 0,
    course: null,
  });


  return (
    <SeeCourses>
      <SeeCourses.SearchContainer>
        <SeeCourses.SeachInput />
        <SeeCourses.SearchButton>Search</SeeCourses.SearchButton>
      </SeeCourses.SearchContainer>

      <SeeCourses.ListContainer>
        {courses.map((course) => {
          return (
            <SeeCourses.Item key={course.id}>
              <SeeCourses.CourseId>{course.code}</SeeCourses.CourseId>
              <SeeCourses.CourseName>{course.name}</SeeCourses.CourseName>
              <SeeCourses.DetailButton
                onClick={() => {
                  var det = { ...details };
                  det.courseId = course.id;
                  det.expanded = true;
                  det.course = course;
                  setDetails(det);
                }}
              >
                Details
              </SeeCourses.DetailButton>
            </SeeCourses.Item>
          );
        })}

        {!details.expanded ? null : (
          <SeeCourses.DetailContainer>
            <SeeCourses.DetailName>
              {details.course.code}
              {details.course.name}
            </SeeCourses.DetailName>
            <SeeCourses.Details>
              <SeeCourses.DetilAKTS>{details.course.akts}</SeeCourses.DetilAKTS>
            </SeeCourses.Details>
            <SeeCourses.DetailInstructorContainer>
              {details.course.instructors.map((inst) => {
                return (
                  <SeeCourses.Instructor key={inst.id}>
                    {inst.name + " " + inst.surname}
                  </SeeCourses.Instructor>
                );
              })}
            </SeeCourses.DetailInstructorContainer>

            <SeeCourses.CloseButton
              onClick={() => {
                var det = { ...details };
                det.expanded = false;
                setDetails(det);
              }}
            >
              Close
            </SeeCourses.CloseButton>
          </SeeCourses.DetailContainer>
        )}
      </SeeCourses.ListContainer>
    </SeeCourses>
  );
}
