import { USER_ROLE } from "../constants";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { routeGenerator, sidebarItemsGenerator } from "../utils";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";

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
        element: <AcademicSemester />,
      },
    ],
  },
];

const facultyRoutes = routeGenerator(facultyPaths, USER_ROLE.faculty);

const facultySidebarItems = sidebarItemsGenerator(facultyPaths, "/faculty");

export { facultyPaths, facultyRoutes, facultySidebarItems };
