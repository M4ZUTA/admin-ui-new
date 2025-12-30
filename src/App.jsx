import "./App.css";
import SignInPage from "./pages/signIn.jsx";
import SignUpPage from "./pages/signUp.jsx";
import Error from "./pages/error.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-primary text-white">
            <div>Login</div>
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-primary text-white">
            <div>Register</div>
          </Link>
        </div>),
      errorElement: <Error />,
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