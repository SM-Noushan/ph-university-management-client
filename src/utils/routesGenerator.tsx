import React from "react";
import { USER_ROLE } from "../constants";
import { TRoute, TUserPath } from "../types";
import {
  AdminProtectedRoute,
  FacultyProtectedRoute,
  StudentProtectedRoute,
} from "../components/layout/ProtectedByRole";

// Function to wrap the route element based on the role
const wrapWithRoleBasedRoute = (
  role: string,
  element: React.ReactNode
): React.ReactNode => {
  switch (role) {
    case USER_ROLE.admin:
      return <AdminProtectedRoute>{element}</AdminProtectedRoute>;
    case USER_ROLE.faculty:
      return <FacultyProtectedRoute>{element}</FacultyProtectedRoute>;
    case USER_ROLE.student:
      return <StudentProtectedRoute>{element}</StudentProtectedRoute>;
    default:
      return element;
  }
};

export const routeGenerator = (items: TUserPath[], role: string) =>
  items.reduce((acc: TRoute[], item) => {
    // Add the main route
    if ((item.path || item.index) && item.element)
      acc.push({
        ...(item.path ? { path: item.path } : { index: true }),
        element: wrapWithRoleBasedRoute(role, item.element),
      });

    // Add child routes
    if (item.children)
      item.children.forEach((child) =>
        acc.push({
          path: child.path!,
          element: wrapWithRoleBasedRoute(role, child.element),
        })
      );

    return acc;
  }, []);
