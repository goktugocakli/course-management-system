import React from "react";
import {Profile} from '../../components';
import {Global} from '../../components';


export default function profileContainer() {
  return (

    

    <Global.Row>

      <Profile.Photo src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}/>

      <Global.Column>
        <Profile.TextBold>Ahmet Yılmaz</Profile.TextBold>

        <Global.Row>
          <Profile.Text>Email:</Profile.Text>
          <Profile.Text>ahmetyilmaz@email.com</Profile.Text>
        </Global.Row>

        <Global.Row>
          <Profile.Text>User Type: </Profile.Text>
          <Profile.Text>Student</Profile.Text>
        </Global.Row>

        <Profile.Button>Change Password</Profile.Button>
        <Profile.Button>Edit Profile</Profile.Button>
      </Global.Column>

      


    </Global.Row>
  );
}
