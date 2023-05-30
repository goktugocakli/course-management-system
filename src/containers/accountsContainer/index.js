import React from "react";
import { useState } from "react";
import { Accounts } from "../../components";
import AddAccountContainer from "../addAccountContainer";

export default function AccountsContainer() {
  const accounts = [
    {
      name: "Ahmet Yildizzzzzzzzzzzzzzzzzzzzz",
      id: "13123196",
      email: "ahmetyildiz@email.com",
      department: "Computer Engineering",
      type:"Student"
    },
    {
      name: "Ahmet Yildiz",
      id: "13123196",
      email: "ahmetyildiz@email.com",
      department: "Computer Engineering",
      type:"Student"
    },
    {
      name: "Ahmet Yildiz",
      id: "13123196",
      email: "ahmetyildiz@email.com",
      department: "Computer Engineering",
      type:"Student"
    },
    {
      name: "Ahmet Yildiz",
      id: "13123196",
      email: "ahmetyildiz@email.com",
      department: "Computer Engineering",
      type:"Student"
    },
    {
      name: "Ahmet Yildiz",
      id: "13123196",
      email: "ahmetyildiz@email.com",
      department: "Computer Engineering",
      type:"Student"
    },
    {
      name: "Ahmet Yildiz",
      id: "13123196",
      email: "ahmetyildiz@email.com",
      department: "Computer Engineering",
      type:"Student"
    },
    {
      name: "Ahmet Yildiz",
      id: "13123196",
      email: "ahmetyildiz@email.com",
      department: "Computer Engineering",
      type:"Student Manager"
    },
  ];


  const [addAccountDiv, setAddAccountDiv] = useState(false);

  // this function used to open add new course window
  const openAddAccountDiv = function addNewAccount() {
      setAddAccountDiv(!addAccountDiv)
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
            <Accounts.ListItem>
              <Accounts.NameText title={account.name}>{account.name}</Accounts.NameText>
              <Accounts.IdText title={account.id}>{account.id}</Accounts.IdText>
              <Accounts.EmailText title={account.email}>{account.email}</Accounts.EmailText>
              <Accounts.DepartmentText title={account.department}>{account.department}</Accounts.DepartmentText>
              <Accounts.TypeText title={account.type}>{account.type}</Accounts.TypeText>
            </Accounts.ListItem>
          ))}
        </Accounts.List>
        
        <Accounts.Button onClick={openAddAccountDiv}>Add new account</Accounts.Button>
       
        </Accounts.Div>

        {addAccountDiv ? (
          <AddAccountContainer
            setIsVisible={setAddAccountDiv}
          />
        ) : null}
      
      </>
    );
  } else {
    return (
      <Accounts.Div>
        <Accounts.Label>Accounts</Accounts.Label>
        <Accounts.Icon />
        <Accounts.AlertText>
          You haven't added any account yet
        </Accounts.AlertText>
        
        <Accounts.Button onClick={openAddAccountDiv}>Add new account</Accounts.Button>
      
      </Accounts.Div>
    );
  }
}