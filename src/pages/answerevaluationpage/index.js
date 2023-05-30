import { AnswerEvaluationContainer } from "../../containers";

import { useParams } from "react-router-dom";

// use navigate("/answerEval/${id of the survey}") to pass an argument with react router
export default function AsnwerEvaluation() {
  const { surveyId } = useParams();
  return <AnswerEvaluationContainer surveyId={surveyId} />;
}
