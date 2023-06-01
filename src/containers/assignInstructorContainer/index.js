import React, { useEffect, useState } from "react";
import { AssignInstructor } from "../../components";
import {
  FetchAssignIntructorToCourse,
  GetAllCourses,
  GetAllInstructors,
  ShowToast,
} from "../../constants/api";

export default function AssignInstructorContainer() {
  const [ins, setIns] = useState([]);
  const [cors, setCors] = useState([]);

  useEffect(() => {
    const options = {
      onSuccess: (response) => {
        let i = [];

        response.data.map((inst) => {
          if (inst.courses?.length === 0) {
            i.push(inst);
          }
        });
        setIns(i);
      },
      onError: (err) => {},
    };

    GetAllInstructors(options);

    const op2 = {
      onSuccess: (response) => {
        let cc = [];
        let i = 0;

        response.data.map((c) => {
          let x = { ...c, selected: null, id: i };

          if (x.instructors?.length === 0) {
            i++;
            cc.push(x);
          }
        });
        setCors(cc);
      },
      onError: (err) => {},
    };

    GetAllCourses(op2);
  }, []);

  return (
    <AssignInstructor.TableColumn>
      <AssignInstructor.LabelDiv>
        <AssignInstructor.CourseId>Course ID</AssignInstructor.CourseId>
        <AssignInstructor.CourseName>Course Name</AssignInstructor.CourseName>
        <AssignInstructor.CourseName>
          Course Instructor
        </AssignInstructor.CourseName>
      </AssignInstructor.LabelDiv>
      <AssignInstructor.Line />
      {cors.map((course) => (
        <AssignInstructor.TableRow key={course.code}>
          <AssignInstructor.CourseId>{course.code}</AssignInstructor.CourseId>
          <AssignInstructor.CourseName>
            {course.name}
          </AssignInstructor.CourseName>
          <AssignInstructor.Select
            onChange={(evn) => {
              let c = cors.at(course.id);
              c.selected = evn.target.value;
              let cc = [...cors];
              cc[course.id] = c;
              setCors(cc);
            }}
          >
            {ins.map((instructor) => (
              <AssignInstructor.Option
                key={instructor.user_name}
                value={instructor.user_name}
              >
                {instructor.first_name + " " + instructor.surname}
              </AssignInstructor.Option>
            ))}
          </AssignInstructor.Select>
        </AssignInstructor.TableRow>
      ))}
      <AssignInstructor.Button
        onClick={() => {
          let error = false;
          const options = {
            onSuccess: (response) => {},
            onError: (err) => {
              error = true;
            },
          };
          cors.map((c) => {
            if (c.selected !== null) {
              let cc = { ...c };
              delete cc.selected;
              delete cc.id;
              FetchAssignIntructorToCourse(c.selected, cc, options);
            }
          });

          if (error) {
            ShowToast("There is an error", { success: false });
          } else {
            ShowToast("Instructors assigned", { success: true });
          }
        }}
      >
        Save Changes
      </AssignInstructor.Button>
    </AssignInstructor.TableColumn>
  );
}
