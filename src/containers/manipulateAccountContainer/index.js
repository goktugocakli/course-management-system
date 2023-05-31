import React, { useState } from "react";
import { ManipulateAccount } from "../../components";
import { ButtonRow } from "../../components/manipulateAccount/styles/manipulateAccount";
export default function ManipulateAccountContainer({ userType, userId }) {
  console.log(userType);
  console.log(userId);

  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserSurnameChange = (event) => {
    setUserSurname(event.target.value);
  };

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

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

      <ManipulateAccount.InputLabel>Type</ManipulateAccount.InputLabel>

      <ManipulateAccount.Select>
        <ManipulateAccount.Option>Student</ManipulateAccount.Option>
        <ManipulateAccount.Option>Instructor</ManipulateAccount.Option>
        <ManipulateAccount.Option>Department Manager</ManipulateAccount.Option>
        <ManipulateAccount.Option>Admin</ManipulateAccount.Option>
      </ManipulateAccount.Select>

      <ButtonRow>
        <ManipulateAccount.OutlineButton>
          Delete Account
        </ManipulateAccount.OutlineButton>

        <ManipulateAccount.OutlineButton color="purple">
          Ban Account
        </ManipulateAccount.OutlineButton>

        <ManipulateAccount.Button color="green">
          Save Changes
        </ManipulateAccount.Button>
      </ButtonRow>

      
    </ManipulateAccount>
  );
}
