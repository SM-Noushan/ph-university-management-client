import React from "react";
import { toast } from "sonner";
import Sidebar from "./Sidebar";
import { Layout, Button } from "antd";
import { Outlet } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../app/features/auth/authSlice";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = React.useState(false);
  const [showTrigger, setShowTrigger] = React.useState(false);

  const handleLogOut = () => {
    sessionStorage.removeItem("auth");
    dispatch(logout());
    toast.success("Logout successfully");
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        showTrigger={showTrigger}
        setShowTrigger={setShowTrigger}
      />
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: showTrigger ? "space-between" : "flex-end",
            padding: "1rem 1rem 1rem 0",
          }}
        >
          <Button
            type="primary"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              display: showTrigger ? "block" : "none",
              fontSize: "16px",
              width: 32,
              height: 32,
              backgroundColor: "#001529",
            }}
          />
          <Button variant="filled" ghost onClick={handleLogOut}>
            Logout
          </Button>
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100%",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright ©{new Date().getFullYear()} By SM Nowshan
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
