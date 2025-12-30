import "./App.css";
import SignInPage from "./pages/signIn.jsx";
import SignUpPage from "./pages/signUp.jsx";
import Error from "./pages/error.jsx";
import Dashboard from "./pages/dashboard.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element : <Dashboard />,
      errorElement: <Error />,
    },
    {
      path: "/Login",
      element: (<SignInPage />),
    },
    {
      path: "/Register",
      element: <SignUpPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;