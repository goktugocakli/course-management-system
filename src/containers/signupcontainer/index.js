import React from "react";
import {SignUp} from '../../components';
import {Global} from '../../components';

export default function SignUpContainer() {
  return (
    <Global.Column>

      <Global.Header>
        <Global.HeaderBold>Example University</Global.HeaderBold>
        <Global.Space/>
        <Global.HeaderNormal>Information System</Global.HeaderNormal>
      </Global.Header>
      
      <SignUp.Div>
        <Global.Column>
            <Global.Row>
            <SignUp.InputLabel>Name</SignUp.InputLabel>
            <SignUp.Input type="text"/>
            </Global.Row>

            <Global.Row>
            <SignUp.InputLabel>Surname</SignUp.InputLabel>
            <SignUp.Input type="text"/>
            </Global.Row>

            <Global.Row>
            <SignUp.InputLabel>Email</SignUp.InputLabel>
            <SignUp.Input type="text"/>
            </Global.Row>
            
            <SignUp.Button>Sign up</SignUp.Button>
            
        </Global.Column>
        
      </SignUp.Div>

    </Global.Column>
  );
}
