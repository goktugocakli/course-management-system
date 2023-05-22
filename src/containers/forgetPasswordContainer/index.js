import React from "react";
import {ForgetPassword} from '../../components';
import {Global} from '../../components';

export default function ForgetPasswordContainer() {
  return (
    <Global.Column>

      <Global.Header>
        <Global.HeaderBold>Example University</Global.HeaderBold>
        <Global.Space/>
        <Global.HeaderNormal>Information System</Global.HeaderNormal>
      </Global.Header>
      
      <ForgetPassword.Div>
        <Global.Column>
            <Global.Row>
            <ForgetPassword.InputLabel>Username</ForgetPassword.InputLabel>
            <ForgetPassword.Input type="text"/>
            </Global.Row>

            <Global.Row>
            <ForgetPassword.InputLabel>Email</ForgetPassword.InputLabel>
            <ForgetPassword.Input type="text"/>
            </Global.Row>
            
            <ForgetPassword.Button>Send Request</ForgetPassword.Button>
            
        </Global.Column>
        
      </ForgetPassword.Div>

    </Global.Column>
  );
}
