import React from "react";

type TRoute = {
  element: React.ReactNode;
} & ({ path: string } | { index: true });

type TUserPath = {
  name: string;
  path?: string;
  index?: boolean;
  element?: React.ReactNode;
  children?: TUserPath[];
};

const routeGenerator = (items: TUserPath[]) =>
  items.reduce((acc: TRoute[], item) => {
    if ((item.path || item.index) && item.element)
      acc.push({
        ...(item.path ? { path: item.path } : { index: true }),
        element: item.element,
      });

    if (item.children)
      item.children.forEach((child) =>
        acc.push({ path: child.path!, element: child.element })
      );

    return acc;
  }, []);

export { routeGenerator };
