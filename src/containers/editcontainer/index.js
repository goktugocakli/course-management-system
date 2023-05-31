import React, { useState } from "react";
import { Edit } from "../../components";
import { Global } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import { user, fetchUser } from "../../features/user";
import { EditUser, ShowToast } from "../../constants/api";

/*

To be able to edit informations of user
for student

user = {
  student_no: "111", 
  first_name: "asdasd",
  surname: "asd",
  e_mail: "asdasda",
  password: "adasda",
  department: "asda",
}

for ins

user = {
    "user_name":"hasangebes",
    "first_name":"Hasan"
    "surname":"Gebeş",
    "e_mail": "hasangebes@hacettepe.edu.tr",
    "password": "12345",
    "department": "Computer Engineering"
}

*/

const options = {
  onSuccess: (response, user, dispatch) => {
    let logininfo = null;

    if (user.userType === "student") {
      logininfo = {
        username: user.student_no,
        password: user.password,
      };
    } else {
      logininfo = {
        username: user.user_name,
        password: user.password,
      };
    }
    ShowToast("Informations updated successfully", { success: true });
    dispatch(fetchUser(logininfo));
  },
  onError: (err) => {
    ShowToast("There is an error", { success: false });
  },
};

export default function EditContainer() {
  const userState = useSelector(user).user;

  const dispatch = useDispatch();

  const [name, setName] = useState(userState.data.first_name);
  const [surname, setSurname] = useState(userState.data.surname);
  const [email, setEmail] = useState(userState.data.e_mail);
  const [password, setPassword] = useState(userState.data.password);

  return (
    <Global.Row>
      {/*<Global.Column>
        <Edit.Photo
          src={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        />
        <Edit.PhotoButton>Change Photo</Edit.PhotoButton>
      </Global.Column> */}

      <Edit.Form>
        <Global.Column>
          <Global.Row>
            <Edit.InputLabel>Name</Edit.InputLabel>
            <Edit.Input
              type="text"
              placeholder={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Global.Row>

          <Global.Row>
            <Edit.InputLabel>Surname</Edit.InputLabel>
            <Edit.Input
              type="text"
              placeholder={surname}
              onChange={(event) => {
                setSurname(event.target.value);
              }}
            />
          </Global.Row>

          <Global.Row>
            <Edit.InputLabel>Email</Edit.InputLabel>
            <Edit.Input
              type="text"
              placeholder={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Global.Row>

          <Global.Row>
            <Edit.InputLabel>Password</Edit.InputLabel>
            <Edit.Input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Global.Row>

          <Edit.Button
            onClick={(e) => {
              e.preventDefault();
              const data = {
                ...userState.data,
                first_name: name,
                surname: surname,
                e_mail: email,
                userType: userState.userType,
                password: password,
              };

              EditUser(data, dispatch, options);
            }}
          >
            Save
          </Edit.Button>
        </Global.Column>
      </Edit.Form>
    </Global.Row>
  );
}
