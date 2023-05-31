import React, { useEffect } from "react";
import { useState } from "react";
import { AddAccount } from "../../components";
import { AddUser, GetAllDepartments, ShowToast } from "../../constants/api";

export default function AddAccountContainer({ setIsVisible }) {
  //states for account addition inputs
  const [accountName, setAccountName] = useState();
  const [accountSurname, setAccountSurname] = useState();
  const [accountId, setAccountId] = useState();
  const [accountEmail, setAccountEmail] = useState();
  const [accountPassword, setAccountPassword] = useState();
  const [accountDepartment, setAccountDepartment] = useState();
  const [accountType, setAccountType] = useState("student");
  const [departments, setDepartments] = useState([]);

  const [account, setAccount] = useState();

  useEffect(() => {
    const op = {
      onSuccess: (response) => {
        setDepartments(response);
        setAccount({ ...account, department: response[0].name });
      },
      onError: (err) => {},
    };

    GetAllDepartments(op);
  }, []);

  const handleCancel = () => {
    setIsVisible(false);
  };

  const saveAccount = () => {
    const options = {
      onSuccess: (response) => {
        ShowToast("The Account Added Successfully", { success: true });
      },
      onError: (err) => {
        ShowToast("There was an error", { success: false });
      },
    };

    AddUser(accountType, account, account.department, options);
  };

  const checkAccountInputs = () => {
    if (accountName === undefined || accountName === "") {
      ShowToast("Please enter a name for account.", { success: false });
    } else if (accountId === undefined || accountId === "") {
      ShowToast("Please enter an id for account.", { success: false });
    } else if (accountEmail === undefined || accountEmail === "") {
      ShowToast("Please enter an email for account.", { success: false });
    } else if (accountPassword === undefined || accountPassword === "") {
      ShowToast("Please enter an password for account.", { success: false });
    } else {
      saveAccount();
    }
  };

  return (
    <>
      <AddAccount.Background />
      <AddAccount.Div>
        <AddAccount.Label>Add New Account</AddAccount.Label>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Name</AddAccount.InputLabel>
          <AddAccount.Input
            onChange={(evn) => {
              setAccountName(evn.target.value);
              setAccount({ ...account, first_name: evn.target.value });
            }}
          />
        </AddAccount.InputRow>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Surname</AddAccount.InputLabel>
          <AddAccount.Input
            onChange={(evn) => {
              setAccountSurname(evn.target.value);
              setAccount({ ...account, surname: evn.target.value });
            }}
          />
        </AddAccount.InputRow>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Id</AddAccount.InputLabel>
          <AddAccount.Input
            onChange={(evn) => {
              setAccountId(evn.target.value);
              if (accountType === "student") {
                let acc = { ...account };
                delete acc.user_name;
                setAccount({ ...acc, student_no: evn.target.value });
              } else {
                let acc = { ...account };
                delete acc.student_no;
                setAccount({ ...acc, user_name: evn.target.value });
              }
            }}
          />
        </AddAccount.InputRow>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Email</AddAccount.InputLabel>
          <AddAccount.Input
            onChange={(evn) => {
              setAccountEmail(evn.target.value);
              setAccount({ ...account, e_mail: evn.target.value });
            }}
          />
        </AddAccount.InputRow>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Password</AddAccount.InputLabel>
          <AddAccount.Input
            onChange={(evn) => {
              setAccountPassword(evn.target.value);
              setAccount({ ...account, password: evn.target.value });
            }}
          />
        </AddAccount.InputRow>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Dept.</AddAccount.InputLabel>

          <AddAccount.Select
            onChange={(evn) => {
              setAccountDepartment(evn.target.value);
              setAccount({ ...account, department: evn.target.value });
            }}
          >
            {departments.map((department) => (
              <AddAccount.Option value={department.name} key={department.name}>
                {department.name}
              </AddAccount.Option>
            ))}
          </AddAccount.Select>
        </AddAccount.InputRow>

        <AddAccount.InputRow>
          <AddAccount.InputLabel>Type</AddAccount.InputLabel>

          <AddAccount.Select
            onChange={(evn) => {
              setAccountType(evn.target.value);
              if (evn.target.value === "student") {
                let acc = { ...account };
                delete acc.first_name;
                setAccount({ ...acc, student_no: accountId });
              } else {
                let acc = { ...account };
                delete acc.student_no;
                setAccount({ ...acc, user_name: accountId });
              }
            }}
          >
            <AddAccount.Option value={"student"}>Student</AddAccount.Option>
            <AddAccount.Option value={"instructor"}>
              Instructor
            </AddAccount.Option>
            <AddAccount.Option value={"department manager"}>
              Dept. Manager
            </AddAccount.Option>
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
