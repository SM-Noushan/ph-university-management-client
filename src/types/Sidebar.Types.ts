import React from "react";

export type TUserPath = {
  name: string;
  path?: string;
  index?: boolean;
  element?: React.ReactNode;
  children?: TUserPath[];
};

export type TRoute = {
  element: React.ReactNode;
} & ({ path: string } | { index: true });

export type TSidebarItem = {
  key: string;
  label: React.ReactNode;
  children?: TSidebarItem[];
};
