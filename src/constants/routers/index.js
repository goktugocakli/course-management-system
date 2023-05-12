import { createBrowserRouter } from "react-router-dom";
import {
  CreateEvaluationPage,
  HomePage,
  SignInOut,
  EnrollPage,
  SeeEvaResPage,
  SeeCoursesPage,
  SemestersPage
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
    path: "/seeEvares",
    element: <SeeEvaResPage />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/seeCourses",
    element: <SeeCoursesPage />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/semesters",
    element: <SemestersPage/>,
    errorElement: <h1>404</h1>,
  },
]);
