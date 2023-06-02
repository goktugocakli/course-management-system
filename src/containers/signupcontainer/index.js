import React, { useEffect, useState } from "react";
import { SignUp } from "../../components";
import { Global } from "../../components";
import {
  GetAllDepartments,
  ShowToast,
  SignUpStudent,
} from "../../constants/api";
import { useNavigate } from "react-router-dom";

const options = {
  onSuccess: (response) => {
    ShowToast("The signup request sent to admin.", { success: true });
  },
  onError: (err) => {
    ShowToast("There is an error", { success: false });
  },
};

export default function SignUpContainer() {
  const navigate = useNavigate();

  const [departments, setDepatments] = useState(["Deneme1", "deneme2"]);
  const [selected, setSelected] = useState();

  const [user, setUser] = useState({
    student_no: null,
    first_name: null,
    surname: null,
    e_mail: null,
    password: null,
    department: null,
  });

  useEffect(() => {
    const options = {
      onSuccess: (response) => {
        setDepatments(response);
      },
    };
    GetAllDepartments(options);
  }, []);

  return (
    <Global.Column>
      <Global.Header>
        <Global.HeaderBold>Hacettepe University</Global.HeaderBold>
        <Global.Space />
        <Global.HeaderNormal>Information System</Global.HeaderNormal>
      </Global.Header>

      <SignUp.Div>
        <Global.Column>
          <Global.Row>
            <SignUp.InputLabel>Student Number</SignUp.InputLabel>
            <SignUp.Input
              onChange={(event) => {
                setUser({ ...user, student_no: event.target.value });
              }}
              type="text"
            />
          </Global.Row>
          <Global.Row>
            <SignUp.InputLabel>Name</SignUp.InputLabel>
            <SignUp.Input
              onChange={(event) => {
                setUser({ ...user, first_name: event.target.value });
              }}
              type="text"
            />
          </Global.Row>

          <Global.Row>
            <SignUp.InputLabel>Surname</SignUp.InputLabel>
            <SignUp.Input
              onChange={(event) => {
                setUser({ ...user, surname: event.target.value });
              }}
              type="text"
            />
          </Global.Row>

          <Global.Row>
            <SignUp.InputLabel>Password</SignUp.InputLabel>
            <SignUp.Input
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
              type="text"
            />
          </Global.Row>

          <Global.Row>
            <SignUp.InputLabel>Email</SignUp.InputLabel>
            <SignUp.Input
              onChange={(event) => {
                setUser({ ...user, e_mail: event.target.value });
              }}
              type="text"
            />
          </Global.Row>

          <Global.Row>
            <SignUp.InputLabel>Department</SignUp.InputLabel>
            <SignUp.Select
              onChange={(evn) => {
                setSelected(evn.target.value);
                setUser({ ...user, department: evn.target.value });
              }}
            >
              {departments.map((department) => (
                <SignUp.Option value={department.name}>
                  {department.name}
                </SignUp.Option>
              ))}
            </SignUp.Select>
          </Global.Row>

          <SignUp.Button
            onClick={() => {
              SignUpStudent(user, options);
            }}
          >
            Sign up
          </SignUp.Button>
        </Global.Column>
      </SignUp.Div>
    </Global.Column>
  );
}
