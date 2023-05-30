import React from "react";
import { Accounts } from "../../components";

export default function AccountsContainer() {
  const accounts = [
    {
      name: "Ahmet Yildiz",
      id: "131231",
      email: "12/10/2023",
      department: "Computer Engineering",
      type:"S"
    },
    {
      name: "Ahmet Yildiz",
      id: "131231",
      email: "12/10/2023",
      department: "Computer Engineering",
      type:"S"
    },
    {
      name: "Ahmet Yildiz",
      id: "131231",
      email: "12/10/2023",
      department: "Computer Engineering",
      type:"S"
    },
    {
      name: "Ahmet Yildiz",
      id: "131231",
      email: "12/10/2023",
      department: "Computer Engineering",
      type:"S"
    },
    {
      name: "Ahmet Yildiz",
      id: "131231",
      email: "12/10/2023",
      department: "Computer Engineering",
      type:"S"
    },
    {
      name: "Ahmet Yildiz",
      id: "131231",
      email: "12/10/2023",
      department: "Computer Engineering",
      type:"S"
    },
    {
      name: "Ahmet Yildiz",
      id: "131231",
      email: "12/10/2023",
      department: "Computer Engineering",
      type:"S"
    },
  ];
  if (Accounts.length > 0) {
    return (
      <Accounts.Div>
        <Accounts.Label>Accounts</Accounts.Label>
        <Accounts.LabelDiv>
          <Accounts.Text>Name</Accounts.Text>
          <Accounts.Text>Id</Accounts.Text>
          <Accounts.Text>Email</Accounts.Text>
          <Accounts.Text>Department</Accounts.Text>
          <Accounts.Text>Type</Accounts.Text>
        </Accounts.LabelDiv>
        <Accounts.Line />
        <Accounts.List>
          {accounts.map((account) => (
            <Accounts.ListItem>
              <Accounts.Text>{account.name}</Accounts.Text>
              <Accounts.Text>{account.id}</Accounts.Text>
              <Accounts.Text>{account.email}</Accounts.Text>
              <Accounts.Text>{account.department}</Accounts.Text>
              <Accounts.Text>{account.type}</Accounts.Text>
            </Accounts.ListItem>
          ))}
        </Accounts.List>
        
        <Accounts.Button>Add new account</Accounts.Button>
       
      </Accounts.Div>
    );
  } else {
    return (
      <Accounts.Div>
        <Accounts.Label>Accounts</Accounts.Label>
        <Accounts.Icon />
        <Accounts.AlertText>
          You haven't added any account yet
        </Accounts.AlertText>
        
        <Accounts.Button>Add new account</Accounts.Button>
      
      </Accounts.Div>
    );
  }
}
