import { createBrowserRouter } from "react-router-dom";
import { CreateEvaluationPage, HomePage, SignInOut } from "../../pages";

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
]);
