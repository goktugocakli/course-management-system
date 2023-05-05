import React from "react";
import {Edit} from '../../components';
import {Global} from '../../components';

export default function editContainer() {
  return (

    <Global.Row>
        <Global.Column>
            <Edit.Photo src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}/>
            <Edit.PhotoButton>Change Photo</Edit.PhotoButton>
        </Global.Column>
        
      <Edit.Form>
        <Global.Column>
            <Global.Row>
            <Edit.InputLabel>Name</Edit.InputLabel>
            <Edit.Input type="text"/>
            </Global.Row>

            <Global.Row>
            <Edit.InputLabel>Surname</Edit.InputLabel>
            <Edit.Input type="text"/>
            </Global.Row>

            <Global.Row>
            <Edit.InputLabel>Email</Edit.InputLabel>
            <Edit.Input type="text"/>
            </Global.Row>
            
            <Edit.Button>Save</Edit.Button>

            
        </Global.Column>
        
      </Edit.Form>

    </Global.Row>
  );
}
