import React from "react";
import { useState } from "react";
import { AddCourse } from "../../components";
import { ShowToast, FetchAddCourse } from "../../constants/api";

export default function AddCourseContainer({ semester, year, setIsVisible }) {
  //states for course addition inputs
  const [courseType, setCourseType] = useState("M");
  const [courseName, setCourseName] = useState();
  const [courseCode, setCourseCode] = useState();
  const [courseCredit, setCourseCredit] = useState();

  const handleCancel = () => {
    setIsVisible(false);
  };

  const saveCourse = () => {
    console.log("aasdas");
    const course = {
      code: courseCode,
      year: year,
      semester: semester,
      name: courseName,
      credit: courseCredit,
      course_type: courseType === "M" ? 0 : 1,
    };

    const options = {
      onSuccess: (response) => {
        ShowToast("The Course Added Successfully", { success: true });
      },
      onError: (err) => {
        ShowToast("There was an error", { success: false });
      },
    };
    FetchAddCourse(course, options);
  };

  const checkCourseInputs = () => {
    if (courseName === undefined || courseName === "") {
      ShowToast("Please enter a name for course.", { success: false });
    } else if (courseCode === undefined || courseCode === "") {
      ShowToast("Please enter a code for course.", { success: false });
    } else if (courseCredit === undefined || courseCredit === "") {
      ShowToast("Please enter a credit for semester.", { success: false });
    } else {
      saveCourse();
    }
  };

  if (true) {
    return (
      <>
        <AddCourse.Background />
        <AddCourse.Div>
          <AddCourse.Label>Add New Course</AddCourse.Label>

          <AddCourse.InputRow>
            <AddCourse.InputLabel>Name</AddCourse.InputLabel>
            <AddCourse.Input
              onChange={(evn) => setCourseName(evn.target.value)}
            />
          </AddCourse.InputRow>

          <AddCourse.InputRow>
            <AddCourse.InputLabel>Code</AddCourse.InputLabel>
            <AddCourse.Input
              onChange={(evn) => setCourseCode(evn.target.value)}
            />
          </AddCourse.InputRow>

          <AddCourse.InputRow>
            <AddCourse.InputLabel>Credit</AddCourse.InputLabel>
            <AddCourse.Input
              onChange={(evn) => setCourseCredit(evn.target.value)}
            />
          </AddCourse.InputRow>

          <AddCourse.InputRow>
            <AddCourse.InputLabel>Type</AddCourse.InputLabel>

            <AddCourse.Select
              onChange={(evn) => setCourseType(evn.target.value)}
            >
              <AddCourse.Option value={"M"}>Mandatory</AddCourse.Option>
              <AddCourse.Option value={"E"}>Elective</AddCourse.Option>
            </AddCourse.Select>
          </AddCourse.InputRow>

          <AddCourse.SaveButton onClick={checkCourseInputs}>
            Save Course
          </AddCourse.SaveButton>

          <AddCourse.CancelButton onClick={handleCancel}>
            Cancel
          </AddCourse.CancelButton>
        </AddCourse.Div>
      </>
    );
  } else {
    return null;
  }
}
