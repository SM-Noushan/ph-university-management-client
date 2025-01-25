// import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import { useLocation } from "react-router-dom";
import { adminSidebarItems } from "../../routes";

interface SidebarProps {
  collapsed: boolean;
  showTrigger: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setShowTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const { Sider } = Layout;

const items: MenuProps["items"] = adminSidebarItems;

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
  showTrigger,
  setShowTrigger,
}) => {
  const { pathname } = useLocation();
  return (
    <Sider
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      collapsedWidth="0"
      trigger={null}
      onBreakpoint={(broken) => {
        setShowTrigger(broken);
      }}
      onCollapse={(collapsed) => {
        setCollapsed(collapsed);
      }}
      zeroWidthTriggerStyle={{ top: "64px", position: "absolute", zIndex: 1 }}
    >
      <h1
        style={{
          color: "white",
          height: "4rem",
          minWidth: "120px",
          display: "flex",
          alignItems: "center",
          marginLeft: "1.6rem",
          fontSize: showTrigger ? "1rem" : "1.6rem",
          fontWeight: "bold",
        }}
      >
        PH University
      </h1>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[pathname]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
