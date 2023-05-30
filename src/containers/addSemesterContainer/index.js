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
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // this state used to show/hide add new course window
  const [courseDiv, setCourseDiv] = useState(false);

  // this function used to check if dates picked correctly
  const checkDates = (start, end) => {
    let date1 = new Date(start).getTime();
    let date2 = new Date(end).getTime();

    if (date1 < date2) {
      return true;
    } else if (date1 > date2) {
    } else if (start === undefined) {
      console.log(`Please pick a start date.`);
    } else if (end === undefined) {
      console.log(`Please pick an end date.`);
    } else if (date1 === date2) {
      ShowToast("Start and End Dates are equal!", { success: false });
    }
  };

  const saveSemester = () => {
    const options = {
      onSuccess: (response) => {
        setCourses(response);
      },
      onError: (err) => {},
    };
    GetAllCoursesWithSemester(
      semesterName,
      +startDate.split("-")[0],
      options
    );
  };

  // this function checks all test cases for semester addition
  const checkSemesterInputs = (start, end) => {
    if (semesterName === undefined) {
      console.log("Please enter a name for semester.");
    } else if (checkDates(start, end)) {
      saveSemester();
    }
  };

  useEffect(() => {
    checkSemesterInputs(startDate, endDate);
  }, [startDate, endDate, semesterName, courseDiv]);

  // this function used to open add new course window
  const handleClick = function addNewCourse() {
    const today = new Date();
    const start = new Date(startDate);
    if (today.getTime() > start.getTime()) {
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
            <AddSemester.DateRow>
              <AddSemester.InputColumn>
                <AddSemester.InputLabel>Start Date</AddSemester.InputLabel>
                <AddSemester.Input
                  type={"date"}
                  onChange={(evn) => setStartDate(evn.target.value)}
                />
              </AddSemester.InputColumn>
              <AddSemester.InputColumn>
                <AddSemester.InputLabel>End Date</AddSemester.InputLabel>
                <AddSemester.Input
                  type={"date"}
                  onChange={(evn) => setEndDate(evn.target.value)}
                />
              </AddSemester.InputColumn>
            </AddSemester.DateRow>
          </AddSemester.InputRow>

          <AddSemester.Label>Courses</AddSemester.Label>
          <AddSemester.LabelDiv>
            <AddSemester.Text>Course Name</AddSemester.Text>
            <AddSemester.Text>Code</AddSemester.Text>
            <AddSemester.Text>Credit</AddSemester.Text>
            <AddSemester.Text>Type</AddSemester.Text>
          </AddSemester.LabelDiv>
          <AddSemester.Line />
          <AddSemester.List>
            {courses.map((course) => (
              <AddSemester.ListItem key={course.code}>
                <AddSemester.Text>
                  {course.name.slice(0, 15) + "..."}
                </AddSemester.Text>
                <AddSemester.Text>{course.code}</AddSemester.Text>
                <AddSemester.Text>{course.credit}</AddSemester.Text>
                <AddSemester.Text>
                  {course.course_type === 0 ? "M" : "E"}
                </AddSemester.Text>
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
            year={+startDate.split("-")[0]}
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
            <AddSemester.DateRow>
              <AddSemester.InputColumn>
                <AddSemester.InputLabel>Start Date</AddSemester.InputLabel>
                <AddSemester.Input
                  type={"date"}
                  onChange={(evn) => setStartDate(evn.target.value)}
                />
              </AddSemester.InputColumn>
              <AddSemester.InputColumn>
                <AddSemester.InputLabel>End Date</AddSemester.InputLabel>
                <AddSemester.Input
                  type={"date"}
                  onChange={(evn) => setEndDate(evn.target.value)}
                />
              </AddSemester.InputColumn>
            </AddSemester.DateRow>
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
            year={+startDate?.split("-")[0]}
            setIsVisible={setCourseDiv}
          />
        ) : null}
      </>
    );
  }
}
