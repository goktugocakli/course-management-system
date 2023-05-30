import React, { useEffect } from "react";
import { useState } from "react";
import { AddSemester } from "../../components";
import { AddCourseContainer } from "../../containers";

import { GetAllCoursesWithSemester, ShowToast } from "../../constants/api";
import { useNavigate } from "react-router-dom";

export default function AddSemesterContainer() {
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();
  // states for semester addition inputs
  const [semesterName, setSemesterName] = useState("Fall");
  // these states used to pick start and end dates
  const [year, setYear] = useState();

  // this state used to show/hide add new course window
  const [courseDiv, setCourseDiv] = useState(false);

  const saveSemester = () => {
    const options = {
      onSuccess: (response) => {
        setCourses(response);
      },
      onError: (err) => {},
    };
    GetAllCoursesWithSemester(
      semesterName,
      +year,
      options
    );
  };

  // this function checks all test cases for semester addition
  const checkSemesterInputs = (year) => {
    let thisYear = new Date().getFullYear();

    if (semesterName === undefined) {
      console.log("Please enter a name for semester.");
    }else if (year === undefined) {
      //ShowToast("Please enter a year!", { success: false });
    }else if(year > thisYear){
      ShowToast("Please enter a correct year!", { success: false });
    } else{
      saveSemester();
    }
  };

  useEffect(() => {
    checkSemesterInputs(year);
  }, [year, semesterName, courseDiv]);

  // this function used to open add new course window
  const handleClick = function addNewCourse() {
    const thisYear = new Date().getFullYear();
  
    if (thisYear > year) {
      ShowToast("Start date must be present!", { success: false });
    } else {
      setCourseDiv(!courseDiv);
    }
  };

  if (courses.length > 0) {
    return (
      <>
        <AddSemester.Div>
          <AddSemester.InputRow>
            <AddSemester.InputColumn>
              <AddSemester.InputLabel>Semester</AddSemester.InputLabel>
              <AddSemester.Select  onChange={(evn) => setSemesterName(evn.target.value)}>
                <AddSemester.Option value={"Fall"}>Fall</AddSemester.Option>
                <AddSemester.Option value={"Spring"}>Spring</AddSemester.Option>
              </AddSemester.Select>
            </AddSemester.InputColumn>
            <AddSemester.InputColumn>
                <AddSemester.InputLabel>Year</AddSemester.InputLabel>
                <AddSemester.Input
                  type={"number"}
                  onChange={(evn) => setYear(evn.target.value)}
                />
              </AddSemester.InputColumn>
          </AddSemester.InputRow>

          <AddSemester.Label>Courses</AddSemester.Label>
          <AddSemester.LabelDiv>
            <AddSemester.NameText>Course Name</AddSemester.NameText>
            <AddSemester.CodeText>Code</AddSemester.CodeText>
            <AddSemester.CreditText>Credit</AddSemester.CreditText>
            <AddSemester.TypeText>Type</AddSemester.TypeText>
          </AddSemester.LabelDiv>
          <AddSemester.Line />
          <AddSemester.List>
            {courses.map((course) => (
              <AddSemester.ListItem key={course.code}>
                <AddSemester.NameText title={course.name}>
                  {course.name}
                </AddSemester.NameText>
                <AddSemester.CodeText title={course.code}>{course.code}</AddSemester.CodeText>
                <AddSemester.CreditText title={course.credit}>{course.credit}</AddSemester.CreditText>
                <AddSemester.TypeText>
                  {course.course_type === 0 ? "M" : "E"}
                </AddSemester.TypeText>
              </AddSemester.ListItem>
            ))}
          </AddSemester.List>
          <AddSemester.AddButton onClick={handleClick}>
            Add new course
          </AddSemester.AddButton>
          <AddSemester.StartButton onClick={() => navigate("/")}>
            Close
          </AddSemester.StartButton>
        </AddSemester.Div>
        {courseDiv ? (
          <AddCourseContainer
            key={0}
            semester={semesterName}
            year={year}
            setIsVisible={setCourseDiv}
          />
        ) : null}
      </>
    );
  } else {
    return (
      <>
        <AddSemester.Div>
          <AddSemester.InputRow>
          <AddSemester.InputColumn>
              <AddSemester.InputLabel>Semester</AddSemester.InputLabel>
              <AddSemester.Select  onChange={(evn) => setSemesterName(evn.target.value)}>
                <AddSemester.Option value={"Fall"}>Fall</AddSemester.Option>
                <AddSemester.Option value={"Spring"}>Spring</AddSemester.Option>
              </AddSemester.Select>
            </AddSemester.InputColumn>
            <AddSemester.InputColumn>
                <AddSemester.InputLabel>Year</AddSemester.InputLabel>
                <AddSemester.Input
                  type={"number"}
                  onChange={(evn) => setYear(evn.target.value)}
                />
              </AddSemester.InputColumn>
          </AddSemester.InputRow>

          <AddSemester.Label>Courses</AddSemester.Label>
          <AddSemester.Icon />
          <AddSemester.AlertText>
            You haven't added any course yet
          </AddSemester.AlertText>
          <AddSemester.AddButton onClick={handleClick}>
            Add new course
          </AddSemester.AddButton>
          <AddSemester.StartButton onClick={() => navigate("/")}>
            Close
          </AddSemester.StartButton>
        </AddSemester.Div>
        {courseDiv ? (
          <AddCourseContainer
            key={0}
            semester={semesterName}
            year={year}
            setIsVisible={setCourseDiv}
          />
        ) : null}
      </>
    );
  }
}
