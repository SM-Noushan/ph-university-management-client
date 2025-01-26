import { USER_ROLE } from "../constants";
import { routeGenerator, sidebarItemsGenerator } from "../utils";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";

const facultyPaths = [
  {
    name: "Dashboard",
    path: "",
    index: true,
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AdminDashboard />,
      },
    ],
  },
];

const facultyRoutes = routeGenerator(facultyPaths, USER_ROLE.faculty);

const facultySidebarItems = sidebarItemsGenerator(facultyPaths, "/faculty");

export { facultyPaths, facultyRoutes, facultySidebarItems };
