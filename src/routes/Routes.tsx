import App from "../App";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { adminRoutes, facultyRoutes, studentRoutes } from "./";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: studentRoutes,
  },
  {
    path: "/faculty",
    element: <App />,
    children: facultyRoutes,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
]);

export default router;
