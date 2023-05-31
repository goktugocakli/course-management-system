import React, { useState, useEffect } from "react";
import { SeeEvaRes } from "../../components";
import { GetSurveyWithId, GetStdeuntPercentWithId } from "../../constants/api";

export default function SeeEvaResContainer({ surveyId }) {
  const [survey, setSurvey] = useState(null);
  const [answered, setAnswered] = useState(0);
  useEffect(() => {
    const options = {
      onSuccess: (response) => {
        setSurvey(response.data);
      },
      onError: (err) => {},
    };

    GetSurveyWithId(surveyId, options);

    const op2 = {
      onSuccess: (response) => {
        setAnswered(response);
      },
      onError: (err) => {},
    };

    GetStdeuntPercentWithId(surveyId, op2);
  }, []);
  return (
    <SeeEvaRes>
      <SeeEvaRes.InputLabel>{survey?.course.name}</SeeEvaRes.InputLabel>
      <br></br>
      <SeeEvaRes.Text>Start Date : {survey?.submitDate}</SeeEvaRes.Text>
      <SeeEvaRes.Text>End Date : {survey?.dueDate}</SeeEvaRes.Text>
      <SeeEvaRes.Text>Answered : {answered} %</SeeEvaRes.Text>
      <br></br>
      <br></br>
      <br></br>
      <SeeEvaRes.Button>Download</SeeEvaRes.Button>
      {/**<SeeEvaRes.Button>Re-Evaluate</SeeEvaRes.Button> */}
    </SeeEvaRes>
  );
}
