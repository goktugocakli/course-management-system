import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeTheme, ThemeState } from "../../features/theme";
import { user } from "../../features/user";

import { NavBar } from "../../components";
import { logout } from "../../features/user";

import { Link, useNavigate } from "react-router-dom";

const renderLinks = (user) => {
  if (user.userType === "admin") {
    return (
      <>
        <NavBar.Link>
          <Link to={"/"}>Home</Link>
        </NavBar.Link>

        <NavBar.Link>
          <Link to={"/addsemester"}>Semesters</Link>
        </NavBar.Link>

        <NavBar.Link>
          <Link to={"/accounts"}>Accounts</Link>
        </NavBar.Link>
      </>
    );
  }
  if (user.userType === "instructor") {
    return (
      <>
        <NavBar.Link>
          <Link to={"/"}>Home</Link>
        </NavBar.Link>
        <NavBar.Link>
          <Link to={"/createEva"}>Create Evaluation Form</Link>
        </NavBar.Link>
        <NavBar.Link>
          <Link to={"/seeEvares"}>See Evaluation Result</Link>
        </NavBar.Link>
      </>
    );
  }

  if (user.userType === "student") {
    return (
      <>
        <NavBar.Link>
          <Link to={"/"}>Home</Link>
        </NavBar.Link>
        <NavBar.Link>
          <Link to={"/enrollCourse"}>Enroll Course</Link>
        </NavBar.Link>
      </>
    );
  } else {
    return null;
  }
};

export default function NavBarContainer() {
  const hamburger = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const whiteTheme = useSelector(ThemeState).theme;
  const userState = useSelector(user).user;
  const [expanded, setExpanded] = useState(false);

  //This useEffect used to implement a feature which is when navigation is open
  // and we click any plce but close button. The navigation will close

  useEffect(() => {
    const closeHamburger = (e) => {
      const x = document.querySelector("#navlinks");
      if (
        e.target !== hamburger.current &&
        e.target !== hamburger.current["firstChild"] &&
        e.target.closest("#navlinks") !== x
      ) {
        setExpanded(false);
      }
    };

    document.body.addEventListener("click", closeHamburger);

    return () => document.body.removeEventListener("click", closeHamburger);
  });

  return (
    <NavBar theme={whiteTheme}>
      <NavBar.Hamburger
        ref={hamburger}
        expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
        }}
      ></NavBar.Hamburger>

      <NavBar.NavLinkContainer id="navlinks" expanded={expanded}>
        {userState === null
          ? renderLinks({ userType: "student" })
          : renderLinks(userState)}

        {userState?.userType !== "admin" ? (
          <NavBar.Link
            onClick={() => {
              navigate("/editUser");
            }}
          >
            Edit User
          </NavBar.Link>
        ) : null}

        <NavBar.Link
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
        >
          Logout
        </NavBar.Link>

        <NavBar.ChangeTheme
          onClick={() => {
            //dispacth is for set the theme for redux state to change the theme of the app
            //local storage for suppling that theme option for future visits.
            dispatch(changeTheme(!whiteTheme));
            localStorage.setItem("Theme", !whiteTheme);
          }}
        ></NavBar.ChangeTheme>
      </NavBar.NavLinkContainer>

      <NavBar.Logo>3B</NavBar.Logo>

      <NavBar.InformationContainer>
        <NavBar.Name>
          {userState?.userType === "admin"
            ? "System " + userState?.data.user_name
            : userState?.data.first_name}
        </NavBar.Name>
        <NavBar.Role>{userState?.userType}</NavBar.Role>
        {/*        <NavBar.Picture
          src={
            "https://www.citypng.com/public/uploads/preview/profile-user-round-white-icon-symbol-png-11639594348fn8rlcxrqo.png"
          }
        />*/}
      </NavBar.InformationContainer>
    </NavBar>
  );
}
