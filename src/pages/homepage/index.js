import { NavContainer, HomeContainer } from "../../containers";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { user } from "../../features/user";
import { useEffect } from "react";

export default function HomePage() {
  const userState = useSelector(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  /*useEffect(() => {
    if (userState.user === null) {
      navigate("/login", {
        replace: true,
      });
    }
  }, [userState.user]);*/

  return (
    <>
      <NavContainer />
      <HomeContainer
        user={
          userState.user === null
            ? { userType: "admin", fullName: "admin dedik ya la" }
            : userState.user
        }
      />

    </>
  );
}
