import { useParams } from "react-router-dom";
import { NavContainer, SeeEvaResContainer } from "../../containers";

export default function SeeEvaResPage() {
  const { surveyId } = useParams();

  return (
    <>
      <NavContainer />
      <SeeEvaResContainer surveyId={surveyId} />
    </>
  );
}
