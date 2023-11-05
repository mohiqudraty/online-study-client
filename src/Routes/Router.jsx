import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import AssignmentForm from "../Components/AssignmentForm";
import AllAssignment from "../Pages/Assignment/AllAssignment";
import CreateAssignment from "../Pages/Assignment/CreateAssignment";
import UpdateAssignment from "../Pages/Assignment/UpdateAssignment";
import ViewAssignment from "../Pages/Assignment/ViewAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/all-assignment",
        element: <AllAssignment></AllAssignment>,
        loader: () => fetch("/ass.json"),
      },
      {
        path: "/create-assignment",
        element: <CreateAssignment></CreateAssignment>,
      },
      {
        path: "/view-assignment",
        element: <ViewAssignment></ViewAssignment>,
      },
      {
        path: "/update-assignment",
        element: <UpdateAssignment></UpdateAssignment>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/ass",
    element: <AssignmentForm></AssignmentForm>,
  },
]);

export default router;
