import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

export const sidebarItemsGenerator = (items: TUserPath[], role: string = "") =>
  items.reduce((acc: TSidebarItem[], item) => {
    if (item.children)
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: `${role}/${child.path}`,
          label: <NavLink to={`${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });

    if (item.path || item.index)
      acc.push({
        key: `${item.index ? role : `${role.slice(1)}/${item.path}`}`,
        label: (
          <NavLink to={`${item.index ? "" : `${role.slice(1)}/${item.path}`}`}>
            {item.name}
          </NavLink>
        ),
      });

    return acc;
  }, []);
