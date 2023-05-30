import React from "react";
import { useState } from "react";
import { AddAccount } from "../../components";
import { ShowToast} from "../../constants/api";

export default function AddAccountContainer({ setIsVisible }) {

  //states for account addition inputs
  const [accountName, setAccountName] = useState();
  const [accountId, setAccountId] = useState();
  const [accountEmail, setAccountEmail] = useState();
  const [accountDepartment, setAccountDepartment] = useState("Computer Engineering");
  const [accountType, setAccountType] = useState("Student");

  const handleCancel = () => {
    setIsVisible(false);
  };

  const saveAccount = () => {
    const account = {
      name: accountName,
      id: accountId,
      email: accountEmail,
      department: accountDepartment,
      type: accountType,
    };

    const options = {
      onSuccess: (response) => {
        ShowToast("The Account Added Successfully", { success: true });
      },
      onError: (err) => {
        ShowToast("There was an error", { success: false });
      },
    };
    //FetchAddAccount(account, options);
  };

  const checkAccountInputs = () => {
    if (accountName === undefined || accountName === "") {
      ShowToast("Please enter a name for account.", { success: false });
    } else if (accountId === undefined || accountId === "") {
      ShowToast("Please enter an id for account.", { success: false });
    } else if (accountEmail === undefined || accountEmail === "") {
      ShowToast("Please enter an email for account.", { success: false });
    } else {
      saveAccount();
    }
  };

  const departments = [
    "Computer Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Genetic Engineering",
  ]

  
  return (
    <>
      <AddAccount.Background />
      <AddAccount.Div>
        <AddAccount.Label>Add New Account</AddAccount.Label>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Name</AddAccount.InputLabel>
          <AddAccount.Input
            onChange={(evn) => setAccountName(evn.target.value)}
          />
        </AddAccount.InputRow>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Id</AddAccount.InputLabel>
          <AddAccount.Input
            onChange={(evn) => setAccountId(evn.target.value)}
          />
        </AddAccount.InputRow>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Email</AddAccount.InputLabel>
          <AddAccount.Input
            onChange={(evn) => setAccountEmail(evn.target.value)}
          />
        </AddAccount.InputRow>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Dept.</AddAccount.InputLabel>

          <AddAccount.Select
            onChange={(evn) => setAccountDepartment(evn.target.value)}
          >
            {departments.map((department) => (
              <AddAccount.Option value={department}>{department}</AddAccount.Option>
            ))}
        
          </AddAccount.Select>
        </AddAccount.InputRow>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Type</AddAccount.InputLabel>

          <AddAccount.Select
            onChange={(evn) => setAccountType(evn.target.value)}
          >
            <AddAccount.Option value={"Student"}>Student</AddAccount.Option>
            <AddAccount.Option value={"Instructor"}>Instructor</AddAccount.Option>
            <AddAccount.Option value={"Dept. Manager"}>Dept. Manager</AddAccount.Option>
          </AddAccount.Select>
        </AddAccount.InputRow>

        <AddAccount.SaveButton onClick={checkAccountInputs}>
          Save Account
        </AddAccount.SaveButton>

        <AddAccount.CancelButton onClick={handleCancel}>
          Cancel
        </AddAccount.CancelButton>
      </AddAccount.Div>
    </>
  );
  
}
