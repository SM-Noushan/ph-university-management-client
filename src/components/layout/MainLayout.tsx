import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes";
import { Header } from "antd/es/layout/layout";

const { Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = adminSidebarItems;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [showTrigger, setShowTrigger] = React.useState(false);
  return (
    <Layout style={{ height: "100vh" }}>
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
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            marginLeft: "1.6rem",
            fontSize: "1.6rem",
            fontWeight: "bold",
          }}
        >
          PH University
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        >
          <Button
            variant="filled"
            ghost
            onClick={() => setCollapsed(!collapsed)}
            style={{
              margin: "18px 18px 0 0",
              float: "right",
            }}
          >
            Logout
          </Button>
        </Header>
        <Button
          type="primary"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            display: showTrigger ? "block" : "none",
            fontSize: "16px",
            width: 36,
            height: 36,
            backgroundColor: "#001529",
          }}
        />
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
          Protected ©{new Date().getFullYear()} By SM Nowshan
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
