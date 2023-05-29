import React, { useState } from "react";
import { ForgetPassword } from "../../components";
import { FetchForgetPassword } from "../../constants/api";
import { Global } from "../../components";
import { ShowToast } from "../../constants/api";

const options = {
  onSuccess: (response) => {
    console.log(response);
    ShowToast(response ? "E-mail successfully sended" : "invalid username", {
      success: response,
    });
  },
  onError: (err) => {
    console.log(err);
    ShowToast("User name could be invalid or there is a network error", {
      success: false,
    });
  },
};

export default function ForgetPasswordContainer() {
  const [username, setUsername] = useState("");

  return (
    <Global.Column>
      <Global.Header>
        <Global.HeaderBold>Example University</Global.HeaderBold>
        <Global.Space />
        <Global.HeaderNormal>Information System</Global.HeaderNormal>
      </Global.Header>

      <ForgetPassword.Div>
        <Global.Column>
          <Global.Row>
            <ForgetPassword.InputLabel>Username</ForgetPassword.InputLabel>
            <ForgetPassword.Input
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              type="text"
            />
          </Global.Row>

          <ForgetPassword.Button
            onClick={() => {
              FetchForgetPassword(username, options);
            }}
          >
            Send Request
          </ForgetPassword.Button>
        </Global.Column>
      </ForgetPassword.Div>
    </Global.Column>
  );
}
