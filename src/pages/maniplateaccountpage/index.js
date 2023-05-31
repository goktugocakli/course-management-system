import { useParams } from "react-router-dom";

import { NavContainer, ManiplateAccountContainer } from "../../containers";

export default function ManiplateAccountPage() {
  const { userType } = useParams();
  const { userId } = useParams();

  return (
    <>
      <NavContainer />
      <ManiplateAccountContainer userType={userType} userId={userId} />
    </>
  );
}
