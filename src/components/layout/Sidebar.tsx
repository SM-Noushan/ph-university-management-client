import {
  adminSidebarItems,
  facultySidebarItems,
  studentSidebarItems,
} from "../../routes";
import { USER_ROLE } from "../../constants";
import { Layout, Menu, MenuProps } from "antd";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentUser } from "../../app/features/auth/authSlice";

interface SidebarProps {
  collapsed: boolean;
  showTrigger: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setShowTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const { Sider } = Layout;

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
  showTrigger,
  setShowTrigger,
}) => {
  const { pathname } = useLocation();
  const currentUser = useAppSelector(selectCurrentUser);

  let sidebarItems: MenuProps["items"];

  switch (currentUser?.role) {
    case USER_ROLE.superAdmin:
    case USER_ROLE.admin:
      sidebarItems = adminSidebarItems;
      break;
    case USER_ROLE.faculty:
      sidebarItems = facultySidebarItems;
      break;
    case USER_ROLE.student:
      sidebarItems = studentSidebarItems;
      break;
    default:
      sidebarItems = [];
  }

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
      style={{
        overflowY: "auto",
        scrollbarWidth: "none",
        position: showTrigger ? "absolute" : "initial",
        height: "100vh",
        zIndex: 1,
      }}
    >
      <h1
        style={{
          position: "fixed",
          color: "white",
          height: "4rem",
          width: "200px",
          display: "flex",
          alignItems: "center",
          paddingLeft: showTrigger ? "2.6rem" : "1.6rem",
          fontSize: showTrigger ? "1rem" : "1.6rem",
          fontWeight: "bold",
          backgroundColor: "#001529",
          zIndex: 1,
        }}
      >
        PH University
      </h1>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        // defaultSelectedKeys={[pathname]}
        items={sidebarItems}
        style={{ marginTop: "4.5em" }}
      />
    </Sider>
  );
};

export default Sidebar;
