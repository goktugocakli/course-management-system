import { createBrowserRouter } from "react-router-dom";
import {
  CreateEvaluationPage,
  HomePage,
  SignInOut,
  EnrollPage,
  SeeEvaResPage,
  SeeCoursesPage,
  AccountsPage,
  AddSemesterPage,
  ForgetPasswordPage,
  EditPage,
  AsnwerEvaluation,
  ManiplateAccountPage,
  SendEmail,
  AssignInstructorToCourse,
} from "../../pages";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/login",
    element: <SignInOut signin={true} />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/signup",
    element: <SignInOut signin={false} />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/createEva",
    element: <CreateEvaluationPage />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/enrollCourse",
    element: <EnrollPage />,
    errorElement: <h1>404</h1>,
  },

  {
    path: "/seeEvares/:surveyId",
    element: <SeeEvaResPage />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/seeCourses",
    element: <SeeCoursesPage />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/accounts",
    element: <AccountsPage />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/addsemester",
    element: <AddSemesterPage />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/forgotpassword",
    element: <ForgetPasswordPage />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/editUser",
    element: <EditPage />,
    errorElement: <h1>404</h1>,
  },

  {
    path: "/answerEval/:surveyId",
    element: <AsnwerEvaluation />,
    errorElement: <h1>404</h1>,
  },

  {
    path: "/maniplate/:userType/:userId",
    element: <ManiplateAccountPage />,
    errorElement: <h1>404</h1>,
  },

  {
    path: "/sendemail",
    element: <SendEmail />,
    errorElement: <h1>404</h1>,
  },

  {
    path: "/assignIns",
    element: <AssignInstructorToCourse />,
    errorElement: <h1>404</h1>,
  },
]);
