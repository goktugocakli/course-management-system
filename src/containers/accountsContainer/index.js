import React, { useEffect } from "react";
import { useState } from "react";
import { Accounts } from "../../components";
import AddAccountContainer from "../addAccountContainer";
import { GetUser } from "../../constants/api";
import { useNavigate } from "react-router-dom";

export default function AccountsContainer() {
  const [accounts, setAccounts] = useState([]);

  const navigate = useNavigate();

  const options = {
    onSuccess: (response) => {
      let acc = accounts.concat(response);
      setAccounts(acc);
    },
    onError: (err) => {},
  };

  useEffect(() => {
    GetUser(options);
  }, []);

  const [addAccountDiv, setAddAccountDiv] = useState(false);

  // this function used to open add new course window
  const openAddAccountDiv = function addNewAccount() {
    setAddAccountDiv(!addAccountDiv);
  };

  if (accounts.length > 0) {
    return (
      <>
        <Accounts.Div>
          <Accounts.Label>Accounts</Accounts.Label>
          <Accounts.LabelDiv>
            <Accounts.NameText>Name</Accounts.NameText>
            <Accounts.IdText>Id</Accounts.IdText>
            <Accounts.EmailText>Email</Accounts.EmailText>
            <Accounts.DepartmentText>Department</Accounts.DepartmentText>
            <Accounts.TypeText>Type</Accounts.TypeText>
          </Accounts.LabelDiv>
          <Accounts.Line />
          <Accounts.List>
            {accounts.map((account) => (
              <Accounts.ListItem
                key={account.id}
                onClick={() => {
                  navigate(
                    `/maniplate/${account.type}/${
                      account.type === "student"
                        ? account.student_no
                        : account.user_name
                    }`
                  );
                }}
              >
                <Accounts.NameText title={account.first_name}>
                  {account.first_name}
                </Accounts.NameText>
                <Accounts.IdText
                  title={
                    account.type === "student"
                      ? account.student_no
                      : account.user_name
                  }
                >
                  {account.type === "student"
                    ? account.student_no
                    : account.user_name}
                </Accounts.IdText>
                <Accounts.EmailText title={account.e_mail}>
                  {account.e_mail}
                </Accounts.EmailText>
                <Accounts.DepartmentText title={account.department?.name}>
                  {account.department?.name}
                </Accounts.DepartmentText>
                <Accounts.TypeText title={account.type}>
                  {account.type}
                </Accounts.TypeText>
              </Accounts.ListItem>
            ))}
          </Accounts.List>

          <Accounts.Button onClick={openAddAccountDiv}>
            Add new account
          </Accounts.Button>
        </Accounts.Div>

        {addAccountDiv ? (
          <AddAccountContainer setIsVisible={setAddAccountDiv} />
        ) : null}
      </>
    );
  } else {
    return (
      <>
        <Accounts.Div>
          <Accounts.Label>Accounts</Accounts.Label>
          <Accounts.Icon />
          <Accounts.AlertText>
            You haven't added any account yet
          </Accounts.AlertText>

          <Accounts.Button onClick={openAddAccountDiv}>
            Add new account
          </Accounts.Button>
        </Accounts.Div>
        {addAccountDiv ? (
          <AddAccountContainer setIsVisible={setAddAccountDiv} />
        ) : null}
      </>
    );
  }
}
