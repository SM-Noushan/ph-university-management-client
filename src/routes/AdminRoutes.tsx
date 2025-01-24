import React from "react";
import { NavLink } from "react-router-dom";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";

type TRoute = {
  element: React.ReactNode;
} & ({ path: string } | { index: true });

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

const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if ((item.path || item.index) && item.element)
    acc.push({
      ...(item.path ? { path: item.path } : { index: true }),
      element: item.element,
    });

  if (item.children)
    item.children.forEach((child) =>
      acc.push({ path: child.path, element: child.element })
    );

  return acc;
}, []);

const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
  if (item.children)
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });

  if (item.path || item.index)
    acc.push({
      key: item.name,
      label: (
        <NavLink to={`${item.index ? "" : `admin/${item.path}`}`}>
          {item.name}
        </NavLink>
      ),
    });

  return acc;
}, []);

export { adminPaths, adminRoutes, adminSidebarItems };
