import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Common/Home";
import Login from "../pages/Common/Login";
import Register from "../pages/Common/Register";
import ErrorPage from "../pages/Common/ErrorPage";
import JobDetails from "../components/JobDetails";
import Loader from "../components/Loader";
import PrivateRoute from "./PrivateRoute";
import ApplyNow from "../pages/Candidate/ApplyNow";
import MyApplications from "../pages/Candidate/MyApplications";
console.log("ROUTER FILE LOADED");
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
        element: <JobDetails />,
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/apply/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
        element: (
          <PrivateRoute>
            <ApplyNow></ApplyNow>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
