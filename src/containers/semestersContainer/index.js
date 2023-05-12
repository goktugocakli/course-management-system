import React from "react";
import {Semesters} from '../../components';
import { Link } from "react-router-dom";


export default function SemestersContainer() {
  const semesters = [{name:"Fall", code:"131231", startDate:"12/10/2023", endDate:"12/10/2023"},
                      {name:"Fall", code:"131231", startDate:"12/10/2023", endDate:"12/10/2023"},
                      {name:"Fall", code:"131231", startDate:"12/10/2023", endDate:"12/10/2023"},
                      {name:"Fall", code:"131231", startDate:"12/10/2023", endDate:"12/10/2023"},
                      {name:"Fall", code:"131231", startDate:"12/10/2023", endDate:"12/10/2023"},
                      {name:"Fall", code:"131231", startDate:"12/10/2023", endDate:"12/10/2023"},
                      {name:"Fall", code:"131231", startDate:"12/10/2023", endDate:"12/10/2023"}
                      ]
  if(semesters.length > 0){
    return (

      <Semesters.Div>
        <Semesters.Label>Semesters</Semesters.Label>
        <Semesters.LabelDiv>
            <Semesters.Text>Name</Semesters.Text>
            <Semesters.Text>Id</Semesters.Text>
            <Semesters.Text>Start Date</Semesters.Text>
            <Semesters.Text>End Date</Semesters.Text>
        </Semesters.LabelDiv>
        <Semesters.Line/>
        <Semesters.List>{semesters.map((semester) => 
            <Semesters.ListItem>
              <Semesters.Text>{semester.name}</Semesters.Text>
              <Semesters.Text>{semester.code}</Semesters.Text>
              <Semesters.Text>{semester.startDate}</Semesters.Text>
              <Semesters.Text>{semester.endDate}</Semesters.Text>
            </Semesters.ListItem>)}
        </Semesters.List>
        <Link to={"/addsemester"}><Semesters.Button>Add new semester</Semesters.Button></Link>
      </Semesters.Div>
    ); 
  } else {
    return (
      
      <Semesters.Div>
        <Semesters.Label>Semesters</Semesters.Label>
        <Semesters.Icon/> 
        <Semesters.AlertText>You haven't added any semester yet</Semesters.AlertText>
        <Link to={"/addsemester"}><Semesters.Button>Add new semester</Semesters.Button></Link>       
      </Semesters.Div>
    ); 

  }
    
}