import React, { useState } from "react";
import { ManipulateAccount } from "../../components";
export default function ManipulateAccountContainer() {

    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
      };

    const handleUserSurnameChange = (event) => {
        setUserSurname(event.target.value);
      };

    const handleUserEmailChange = (event) => {
        setUserEmail(event.target.value);
      };

    return(
        <ManipulateAccount>
            <ManipulateAccount.Text1>Edit Account</ManipulateAccount.Text1>
            <ManipulateAccount.Text>Name :  </ManipulateAccount.Text>
            <ManipulateAccount.Input value={userName} onChange={handleUserNameChange}></ManipulateAccount.Input>
            <ManipulateAccount.Text>Surname :  </ManipulateAccount.Text>
            <ManipulateAccount.Input value={userSurname} onChange={handleUserSurnameChange}></ManipulateAccount.Input>
            <br></br> <br></br> <br></br>
            <ManipulateAccount.Text>Email :  </ManipulateAccount.Text>
            <ManipulateAccount.Input value={userEmail} onChange={handleUserEmailChange}></ManipulateAccount.Input>
            <ManipulateAccount.Text>Type :    </ManipulateAccount.Text>
            <ManipulateAccount.Select>
                <ManipulateAccount.Option>Student</ManipulateAccount.Option>
                <ManipulateAccount.Option>Instructor</ManipulateAccount.Option>
                <ManipulateAccount.Option>Department Manager</ManipulateAccount.Option>
                <ManipulateAccount.Option>Admin</ManipulateAccount.Option>
            </ManipulateAccount.Select>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

            <ManipulateAccount.Button>Delete Account</ManipulateAccount.Button>
            <ManipulateAccount.Button color="purple">Ban Account</ManipulateAccount.Button>
            <ManipulateAccount.Button color="green">Save Changes</ManipulateAccount.Button>
        
        </ManipulateAccount>


    );

      




}