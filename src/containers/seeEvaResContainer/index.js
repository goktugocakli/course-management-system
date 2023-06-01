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
      <SeeEvaRes.Row>
        <SeeEvaRes.Label>Start Date:</SeeEvaRes.Label>
        <SeeEvaRes.Text>{survey?.submitDate}</SeeEvaRes.Text>
      </SeeEvaRes.Row>

      <SeeEvaRes.Row>
        <SeeEvaRes.Label>End Date:</SeeEvaRes.Label>
        <SeeEvaRes.Text>{survey?.dueDate}</SeeEvaRes.Text>
      </SeeEvaRes.Row>
      
      <SeeEvaRes.Row>
        <SeeEvaRes.Label>Answered :</SeeEvaRes.Label>
        <SeeEvaRes.Text>{answered} %</SeeEvaRes.Text>
      </SeeEvaRes.Row>
      
    </SeeEvaRes>
  );
}
