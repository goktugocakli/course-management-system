import { NavContainer, HomeContainer } from "../../containers";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { user } from "../../features/user";
import { useEffect } from "react";

export default function HomePage() {
  const userState = useSelector(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.user === null) {
      navigate("/login");
    }
  });

  return (
    <>
      <NavContainer />
      <HomeContainer
        user={
          userState.user === null
            ? {
                userType: "admin",
                data: {
                  user_name: "admin iste",
                },
              }
            : userState.user
        }
      />
    </>
  );
}
