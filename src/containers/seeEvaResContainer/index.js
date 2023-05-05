import React from "react";
import {SeeEvaRes} from "../../components"




export default function SeeEvaResContainer() {
    return(
        <SeeEvaRes>
            <SeeEvaRes.InputLabel>Name Of The Form</SeeEvaRes.InputLabel>
            <br></br>
            <SeeEvaRes.Text>Start Date : </SeeEvaRes.Text>
            <SeeEvaRes.Text>End Date   : </SeeEvaRes.Text>
            <SeeEvaRes.Text>Answered   : </SeeEvaRes.Text>
            <br></br>
            <br></br>
            <br></br>
            <SeeEvaRes.Button>Download</SeeEvaRes.Button>
            <SeeEvaRes.Button>Re-Evaluate</SeeEvaRes.Button>
        </SeeEvaRes>

    );
}