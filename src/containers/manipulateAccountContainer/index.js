import React, { useEffect, useState } from "react";
import { Edit, ManipulateAccount } from "../../components";
import { ButtonRow } from "../../components/manipulateAccount/styles/manipulateAccount";
import {
  ChangeDepManager,
  DeleteUser,
  EditUser,
  GetSpecificDepartment,
  GetSpecificUser,
  ShowToast,
} from "../../constants/api";
import { useNavigate } from "react-router-dom";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function ManipulateAccountContainer({ userType, userId }) {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [insType, setInsType] = useState("instructor");

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserSurnameChange = (event) => {
    setUserSurname(event.target.value);
  };

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  useEffect(() => {
    const options = {
      onSuccess: (response) => {
        setUserName(response.data.first_name);
        setUserSurname(response.data.surname);
        setUserEmail(response.data.e_mail);

        setUser({
          ...response.data,
          userType: userType.toLowerCase(),
        });

        const op = {
          onSuccess: (response2) => {
            if (response2.data.manager != null) {
              if (
                response2.data.manager.user_name === response.data.user_name
              ) {
                setInsType("department manager");
              }
            }
          },
          onError: (err) => {},
        };

        GetSpecificDepartment(response.data.department?.name, op);
      },
      onError: (err) => {},
    };

    GetSpecificUser(userType.toLowerCase(), userId, options);
  }, []);

  return (
    <ManipulateAccount>
      <ManipulateAccount.Label>Edit Account</ManipulateAccount.Label>
      <ManipulateAccount.InputLabel>Name</ManipulateAccount.InputLabel>
      <ManipulateAccount.Input
        value={userName}
        onChange={handleUserNameChange}
      ></ManipulateAccount.Input>
      <ManipulateAccount.InputLabel>Surname</ManipulateAccount.InputLabel>
      <ManipulateAccount.Input
        value={userSurname}
        onChange={handleUserSurnameChange}
      ></ManipulateAccount.Input>
      <br></br> <br></br> <br></br>
      <ManipulateAccount.InputLabel>Email</ManipulateAccount.InputLabel>
      <ManipulateAccount.Input
        value={userEmail}
        onChange={handleUserEmailChange}
      ></ManipulateAccount.Input>
      {userType.toLowerCase() === "instructor" ? (
        <>
          <ManipulateAccount.InputLabel>Type</ManipulateAccount.InputLabel>
          <ManipulateAccount.Select
            value={insType}
            onChange={(evn) => setInsType(evn.target.value)}
          >
            <ManipulateAccount.Option value={"instructor"}>
              Instructor
            </ManipulateAccount.Option>
            <ManipulateAccount.Option value={"department manager"}>
              Department Manager
            </ManipulateAccount.Option>
          </ManipulateAccount.Select>
        </>
      ) : null}
      <ButtonRow>
        <ManipulateAccount.OutlineButton
          onClick={() => {
            const options = {
              onSuccess: (response) => {
                ShowToast("User Deleted Successfully", { success: true });
                delay(1000).then(() => navigate("/accounts"));
              },
              onError: (err) => {
                ShowToast("There is an error", { success: false });
              },
            };
            DeleteUser(user, options);
          }}
        >
          Delete Account
        </ManipulateAccount.OutlineButton>

        {/**<ManipulateAccount.OutlineButton color="purple">
          Ban Account
        </ManipulateAccount.OutlineButton> */}

        <ManipulateAccount.Button
          color="green"
          onClick={() => {
            const options = {
              onSuccess: (response, user, dispatch) => {
                ShowToast("The user updated successfully", { success: true });
                setUser(user);

                if (insType === "department manager") {
                  ChangeDepManager(user.department?.name, user.user_name);
                }
              },
              onError: (err) => {
                ShowToast("There is an error", { success: false });
              },
            };

            const changedUser = {
              ...user,
              first_name: userName,
              surname: userSurname,
              e_mail: userEmail,
            };
            EditUser(changedUser, {}, options);
          }}
        >
          Save Changes
        </ManipulateAccount.Button>
      </ButtonRow>
    </ManipulateAccount>
  );
}
