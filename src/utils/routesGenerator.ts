import { TRoute, TUserPath } from "../types";

export const routeGenerator = (items: TUserPath[]) =>
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
