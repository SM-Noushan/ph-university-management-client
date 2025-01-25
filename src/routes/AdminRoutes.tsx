import React from "react";
import { routeGenerator } from "../utils";
import { NavLink } from "react-router-dom";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";

type TSidebarItem = {
  key: string;
  label: React.ReactNode;
  children?: TSidebarItem[];
};

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
];

const adminRoutes = routeGenerator(adminPaths);

const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
  if (item.children)
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: `/admin/${child.path}`,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });

  if (item.path || item.index)
    acc.push({
      key: `${item.index ? "/admin" : `admin/${item.path}`}`,
      label: (
        <NavLink to={`${item.index ? "" : `admin/${item.path}`}`}>
          {item.name}
        </NavLink>
      ),
    });

  return acc;
}, []);

export { adminPaths, adminRoutes, adminSidebarItems };
