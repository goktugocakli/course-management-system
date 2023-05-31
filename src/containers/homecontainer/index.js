import { useEffect, useState } from "react";
import { Home } from "../../components";
import {
  FetchPendingRequests,
  FetchonGoingEvaluations,
  FetchonGoingEvaluationsWithStudentNo,
  GrantRequestToStudent,
  ShowToast,
} from "../../constants/api";
import { useNavigate } from "react-router-dom";

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
const renderEvents = (user, data, navigate) => {
  if (user?.userType === "admin") {
    return (
      <>
        <Home.Events>
          <Home.EventInner>
            <Home.EventTitle>Pending Requests...</Home.EventTitle>
            {/* for loop through events as eventitem here  or map them*/}
            {data?.map((student) => {
              return (
                <Home.EventItem key={student.student_no}>
                  <Home.EventLabel>Student No:</Home.EventLabel>
                  <Home.EventText>{student.student_no}</Home.EventText>
                  <Home.EventLabel>Student Name:</Home.EventLabel>
                  <Home.EventText>{student.first_name}</Home.EventText>
                  <Home.ButtonRow>
                    <Home.Button
                      onClick={() => {
                        GrantReq(student.student_no);
                      }}
                    >
                      Grant
                    </Home.Button>

                    <Home.Button
                      onClick={() => {
                        ShowToast("Access Denied ", {
                          success: false,
                        });
                      }}
                    >
                      Deny
                    </Home.Button>
                  </Home.ButtonRow>
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
        <Home.EventTitle>My Evaluation Forms</Home.EventTitle>
        <Home.Events>
          <Home.EventInner>
            {/* for loop through events as eventitem here  or map them*/}
            {data?.map((evaluation) => {
              return (
                <Home.EventItem
                  key={evaluation.id}
                  onClick={() => {
                    navigate?.(`/seeEvares/${evaluation.id}`);
                  }}
                >
                  {evaluation.course.name +
                    " " +
                    evaluation.description +
                    ". Due Date: " +
                    evaluation.dueDate +
                    " Evaluation ID: " +
                    evaluation.id}
                </Home.EventItem>
              );
            })}
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
            {data?.map((evalu) => {
              const today = new Date();
              const endDate = new Date(evalu.dueDate);

              if (today < endDate) {
                return (
                  <Home.EventItem
                    key={evalu.id}
                    onClick={() => {
                      navigate?.(`/answerEval/${evalu.id}`);
                    }}
                  >
                    {evalu.course.name +
                      " " +
                      evalu.description +
                      ". Due Date: " +
                      evalu.dueDate +
                      " Evaluation ID: " +
                      evalu.id}
                  </Home.EventItem>
                );
              }
            })}
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
  const navigate = useNavigate();
  const options = {
    onSuccess: (response) => {
      setData([].concat(response.data));
    },
    onError: (err) => {},
  };
  useEffect(() => {
    if (user?.userType === "admin") {
      FetchPendingRequests(options);
    } else if (user?.userType === "student") {
      // FetchonGoingEvaluationsWithStudentNo(user.data.student_no, options);
      FetchonGoingEvaluations(options);
    } else if (user?.userType === "instructor") {
      setData(user.data.surveys);
    }
  }, []);

  return <Home>{renderEvents(user, data, navigate)}</Home>;
}
