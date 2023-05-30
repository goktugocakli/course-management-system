import { useState } from "react";
import { EnrollCourse } from "../../components";
import {
  useFetchCourses,
  FetchEnrollCourse,
  ShowToast,
} from "../../constants/api";
import { useSelector } from "react-redux";
import { user } from "../../features/user";

const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const isInCourse = (student_no, course) => {
  let res = false;
  course.student.map((s) => {
    if (s.student_no === student_no) {
      res = true;
      return res;
    }
  });

  return res;
};

const renderCourses = (courses, student) => {
  const options = {
    onSuccess: (response) => {
      ShowToast("Enroll is successful", { success: true });
      delay(1000).then(() => window.location.reload(false));
    },
    onError: (err) => {
      ShowToast("There is an error", { success: false });
    },
  };
  return (
    <>
      {courses?.map((course) => {
        return (
          <EnrollCourse.ListItem key={course.code}>
            <EnrollCourse.ItemInfo>
              <EnrollCourse.Name>
                {course.name + " " + course.code}
              </EnrollCourse.Name>

              {course.instructors.map((ins) => {
                return (
                  <EnrollCourse.Instructors key={ins.id}>
                    {ins.user_name}
                  </EnrollCourse.Instructors>
                );
              })}
            </EnrollCourse.ItemInfo>

            <EnrollCourse.EnrollButton
              onClick={() => {
                if (isInCourse(student.student_no, course)) {
                  ShowToast("This student already enrolled this course", {
                    success: false,
                  });
                } else {
                  FetchEnrollCourse(student.student_no, course, options);
                }
              }}
            >
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

  const userState = useSelector(user);

  return (
    <EnrollCourse>
      {/*<EnrollCourse.SearchContainer>
        <EnrollCourse.SearchInput />
        <EnrollCourse.SearchButton>Search</EnrollCourse.SearchButton>
      </EnrollCourse.SearchContainer> */}
      <EnrollCourse.ListContainer>
        {renderCourses(data?.courses, userState.user.data)}
      </EnrollCourse.ListContainer>
    </EnrollCourse>
  );
}
