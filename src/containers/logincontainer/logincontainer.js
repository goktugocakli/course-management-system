import React from "react";
import {Login} from '../../components';

export default function loginContainer() {
  return (
    <Login>
      <Login.Label>
        <Login.Button>Button</Login.Button>
        <Login.Button>Button</Login.Button>
        <Login.Button>Button</Login.Button>
      </Login.Label>

      <Login.Button>Sign Up</Login.Button>
    </Login>
  );
}
