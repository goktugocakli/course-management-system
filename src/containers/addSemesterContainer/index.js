import React from "react";
import { useState } from "react";
import {AddSemester} from '../../components';
import {AddCourse} from '../../components';



export default function AddSemesterContainer() {
  const courses = [{name:"Fall", code:"131231", credit:"3", type:"M"},
                      {name:"Fall", code:"131231", credit:"3", type:"M"},
                      {name:"Fall", code:"131231", credit:"3", type:"M"},
                      {name:"Fall", code:"131231", credit:"3", type:"M"},
                      {name:"Fall", code:"131231", credit:"3", type:"M"},
                      {name:"Fall", code:"131231", credit:"3", type:"M"},
                      {name:"Fall", code:"131231", credit:"3", type:"M"}
                      ]


  

  // states for semester addition inputs
  const [semesterName, setSemesterName] = useState();
  // these states used to pick start and end dates
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  

  // this state used to show/hide add new course window                    
  const [courseDiv, setCourseDiv] = useState([]);
  
  //states for course addition inputs
  const [courseType, setCourseType] = useState("M");
  const [courseName, setCourseName] = useState();
  const [courseCode, setCourseCode] = useState();
  const [courseCredit, setCourseCredit] = useState();

  


  // this function used to check if dates picked correctly
  const checkDates = (start, end) => {
    let date1 = new Date(start).getTime();
    let date2 = new Date(end).getTime();
  
    if (date1 < date2) {
      console.log(`${start} is less than ${end}`);
      return true;
    } else if (date1 > date2) {
      console.log(`${start} is greater than ${end}`);
    } else if (start === undefined ) {
      console.log(`Please pick a start date.`);
    } else if (end === undefined ) {
      console.log(`Please pick an end date.`);
    } else if (date1 === date2 ) {
      console.log(`${start} is equal to ${end}`);
    } 
  };

  const saveSemester = () => {
      console.log("Semester saved.")
  }

  // this function checks all test cases for semester addition
  const checkSemesterInputs = (start,end) => {
      if(courses.length === 0){
        console.log("You haven't added any course yet.")
      } else if(semesterName === undefined){
        console.log("Please enter a name for semester.")
      } else if(checkDates(start,end)) {
        saveSemester();
      }
  }


  // this function used to cancel add new course window
  const handleCancel = function cancelCourseDiv(){
    setCourseDiv([])
  }

  // this function used to open add new course window
  const handleClick = function addNewCourse() {
    return(
      setCourseDiv(courseDiv.concat(
        <>
          <AddCourse.Background/>
          <AddCourse.Div>
              <AddCourse.Label>Add New Course</AddCourse.Label>

              <AddCourse.InputRow>
                <AddCourse.InputLabel>Name</AddCourse.InputLabel>
                <AddCourse.Input onChange={evn => setCourseName(evn.target.value)}/>
              </AddCourse.InputRow>

              <AddCourse.InputRow>
                <AddCourse.InputLabel>Code</AddCourse.InputLabel>
                <AddCourse.Input onChange={evn => setCourseCode(evn.target.value)}/>
              </AddCourse.InputRow>

              <AddCourse.InputRow>
                <AddCourse.InputLabel>Credit</AddCourse.InputLabel>
                <AddCourse.Input onChange={evn => setCourseCredit(evn.target.value)}/>
              </AddCourse.InputRow>

              <AddCourse.InputRow>
                <AddCourse.InputLabel>Type</AddCourse.InputLabel>

                <AddCourse.Select onChange={evn => setCourseType(evn.target.value)}>
                    <AddCourse.Option value={"M"} >Mandatory</AddCourse.Option>
                    <AddCourse.Option value={"E"} >Elective</AddCourse.Option>
                </AddCourse.Select>

              </AddCourse.InputRow>

              <AddCourse.SaveButton>Save Course</AddCourse.SaveButton>

              <AddCourse.CancelButton onClick={handleCancel}>Cancel</AddCourse.CancelButton>
          </AddCourse.Div>
        </>
        )
      )
    )

  }                   
  
  if(courses.length > 0){
    return (

      <>
        <AddSemester.Div>
        <AddSemester.InputRow>
            <AddSemester.InputColumn>
              <AddSemester.InputLabel>Name</AddSemester.InputLabel>
              <AddSemester.Input onChange={evn => setSemesterName(evn.target.value)}/>
            </AddSemester.InputColumn>
            <AddSemester.DateRow>
                <AddSemester.InputColumn>
                  <AddSemester.InputLabel>Start Date</AddSemester.InputLabel>
                  <AddSemester.Input type={"date"} onChange={evn => setStartDate(evn.target.value)}/>
                </AddSemester.InputColumn>
                <AddSemester.InputColumn>
                  <AddSemester.InputLabel>End Date</AddSemester.InputLabel>
                  <AddSemester.Input type={"date"} onChange={evn => setEndDate(evn.target.value)}/>
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
        <AddSemester.Line/>
        <AddSemester.List>{courses.map((course) => 
            <AddSemester.ListItem>
              <AddSemester.Text>{course.name}</AddSemester.Text>
              <AddSemester.Text>{course.code}</AddSemester.Text>
              <AddSemester.Text>{course.credit}</AddSemester.Text>
              <AddSemester.Text>{course.type}</AddSemester.Text>
            </AddSemester.ListItem>)}
        </AddSemester.List>
        <AddSemester.AddButton onClick={handleClick}>Add new course</AddSemester.AddButton>
        <AddSemester.StartButton onClick={() => checkSemesterInputs(startDate,endDate)}>Start semester</AddSemester.StartButton> 
      </AddSemester.Div>
      {courseDiv}
      </>

      
    ); 
  } else {
    return (
      <>
        <AddSemester.Div>
          <AddSemester.InputRow>
              <AddSemester.InputColumn>
                <AddSemester.InputLabel>Name</AddSemester.InputLabel>
                <AddSemester.Input onChange={evn => setSemesterName(evn.target.value)}/>
              </AddSemester.InputColumn>
              <AddSemester.DateRow>
                  <AddSemester.InputColumn>
                    <AddSemester.InputLabel>Start Date</AddSemester.InputLabel>
                    <AddSemester.Input type={"date"} onChange={evn => setStartDate(evn.target.value)}/>
                  </AddSemester.InputColumn>
                  <AddSemester.InputColumn>
                    <AddSemester.InputLabel>End Date</AddSemester.InputLabel>
                    <AddSemester.Input type={"date"} onChange={evn => setEndDate(evn.target.value)}/>
                  </AddSemester.InputColumn>
              </AddSemester.DateRow>
              
          </AddSemester.InputRow>

          <AddSemester.Label>Courses</AddSemester.Label>
          <AddSemester.Icon/> 
          <AddSemester.AlertText>You haven't added any course yet</AddSemester.AlertText>
          <AddSemester.AddButton onClick={handleClick}>Add new course</AddSemester.AddButton>
          <AddSemester.StartButton onClick={() => checkSemesterInputs(startDate,endDate)}>Start semester</AddSemester.StartButton>       
        </AddSemester.Div>
        {courseDiv}
      </>
      

    ); 

  }
    
}