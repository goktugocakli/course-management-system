import React from "react";
import { useState } from "react";
import {AddCourse} from '../../components';


export default function AddCourseContainer() {

    //states for course addition inputs
    const [courseType, setCourseType] = useState("M");
    const [courseName, setCourseName] = useState();
    const [courseCode, setCourseCode] = useState();
    const [courseCredit, setCourseCredit] = useState();

    const [isVisible, setIsVisible] = useState(true)

    const handleCancel = () => {
        setIsVisible(false)
    }

    const saveCourse = () => {
        console.log("Course saved.")
      }
    
    const checkCourseInputs = () => {

        if(courseName === undefined){
            console.log("Please enter a name for course.")
        }else if(courseCode === undefined){
            console.log("Please enter a code for course.")
        }else if(courseCredit === undefined){
            console.log("Please enter a credit for semester.")
        }else{
            saveCourse()
        }
    }

    if(isVisible){
        return(
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
    
                  <AddCourse.SaveButton onClick={checkCourseInputs}>Save Course</AddCourse.SaveButton>
    
                  <AddCourse.CancelButton onClick={handleCancel}>Cancel</AddCourse.CancelButton>
              </AddCourse.Div>
            </>
        )
    }else{
        return
    }

    

    


}