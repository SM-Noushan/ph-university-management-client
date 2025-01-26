import { USER_ROLE } from "../constants";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { routeGenerator, sidebarItemsGenerator } from "../utils";

const studentPaths = [
  {
    name: "Dashboard",
    path: "",
    index: true,
    element: <AdminDashboard />,
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Academic Course",
        path: "academic-course",
        element: <AdminDashboard />,
      },
    ],
  },
];

const studentRoutes = routeGenerator(studentPaths, USER_ROLE.student);

const studentSidebarItems = sidebarItemsGenerator(studentPaths);

export { studentPaths, studentRoutes, studentSidebarItems };
