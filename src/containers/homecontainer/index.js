import { useEffect, useState } from "react";
import { Home } from "../../components";
import {
  FetchPendingRequests,
  GrantRequestToStudent,
  ShowToast,
} from "../../constants/api";

/*

data = [
  of users or surveys
]

*/

const GrantReq = (student_no) => {
  const options = {
    onSuccess: (response) => {
      ShowToast(response.data, { success: true });
      console.log(response.data);
    },
    onError: (err) => {
      ShowToast(err.message, { success: false });
      console.log(err.message);
    },
  };
  GrantRequestToStudent(student_no, options);
};
const renderEvents = (user, data) => {
  if (user?.userType === "admin") {
    return (
      <>
        <Home.EventTitle>Pending Requests...</Home.EventTitle>
        <Home.Events>
          <Home.EventInner>
            {/* for loop through events as eventitem here  or map them*/}
            {data?.map((student) => {
              return (
                <Home.EventItem key={student.student_no}>
                  {`Student No: ${student.student_no}   Student Name: ${student.first_name}`}
                  <button
                    onClick={() => {
                      ShowToast("Access Granted Successfully", { success: true });
                    }}
                  >
                    Grant Request
                  </button>
                </Home.EventItem>
              );
            })}
          </Home.EventInner>
        </Home.Events>
      </>
    );
  } else if (user?.userType === "instructor") {
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
  } else if (user?.userType === "student") {
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

export default function HomeContainer({ user }) {
  const [data, setData] = useState(null);
  const options = {
    onSuccess: (response) => {
      setData(response.data);
    },
    onError: (err) => {},
  };
  useEffect(() => {
    if (user?.userType === "admin") {
      FetchPendingRequests(options);
    }
  }, []);

  return <Home>{renderEvents(user, data)}</Home>;
}
