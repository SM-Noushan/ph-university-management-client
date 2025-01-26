import { USER_ROLE } from "../constants";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { routeGenerator, sidebarItemsGenerator } from "../utils";
import AcademicSemester from "../pages/admin/academicManagement/academicSemester/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/academicSemester/CreateAcademicSemester";
import AcademicFaculty from "../pages/admin/academicManagement/academicFaculty/AcademicFaculty";
import CreateAcademicFaculty from "../pages/admin/academicManagement/academicFaculty/CreateAcademicFaculty";
import AcademicDepartment from "../pages/admin/academicManagement/academicDepartment/AcademicDepartment";
import CreateAcademicDepartment from "../pages/admin/academicManagement/academicDepartment/CreateAcademicDepartment";

const adminPaths = [
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
    name: "Academic Semester",
    children: [
      {
        name: "Create",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "View",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: "Academic Faculty",
    children: [
      {
        name: "Create",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "View",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
    ],
  },
  {
    name: "Academic Department",
    children: [
      {
        name: "Create",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "View",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
];

const adminRoutes = routeGenerator(adminPaths, USER_ROLE.admin);

const adminSidebarItems = sidebarItemsGenerator(adminPaths, "/admin");

export { adminPaths, adminRoutes, adminSidebarItems };
