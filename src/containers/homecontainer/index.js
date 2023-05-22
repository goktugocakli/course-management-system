import { Home } from "../../components";
import { user } from "../../features/user";

const renderEvents = (user) => {
  if (user.userType === "admin") {
    return (
      <>
        <Home.EventTitle>Pending Requests...</Home.EventTitle>
        <Home.Events>
          <Home.EventInner>
            {/* for loop through events as eventitem here  or map them*/}
            <Home.EventItem>Item 1</Home.EventItem>
          </Home.EventInner>
        </Home.Events>
      </>
    );
  } else if (user.userType === "instructor") {
    return (
      <>
        <Home.EventTitle>Finished Forms</Home.EventTitle>
        <Home.Events>
          <Home.EventInner>
            {/* for loop through events as eventitem here  or map them*/}
            <Home.EventItem>Item 1</Home.EventItem>
          </Home.EventInner>
        </Home.Events>
      </>
    );
  } else if (user.userType === "student") {
    return (
      <>
        <Home.EventTitle>Last days of...</Home.EventTitle>
        <Home.Events>
          <Home.EventInner>
            {/* for loop through events as eventitem here  or map them*/}
            <Home.EventItem>Form 1</Home.EventItem>
          </Home.EventInner>
        </Home.Events>
      </>
    );
  }
  //TODO: implement other user types as well
  else {
    return null;
  }
};

export default function HomeContainer() {
  //user is a json obj that contains userType and upcoming events
  return (
    <Home>
      {/*renderEvents(user)*/}
    </Home>
  );
}
