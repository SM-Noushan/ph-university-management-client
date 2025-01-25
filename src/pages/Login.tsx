import React from "react";
import { verifyToken } from "../utils";
import { useAppDispatch } from "../app/hooks";
import { Button, Form, Input, Flex } from "antd";
import { setUser } from "../app/features/auth/authSlice";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useLoginMutation } from "../app/features/auth/authApi";

const Login: React.FC = () => {
  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const onFinish = async (values: unknown) => {
    // console.log("Received values of form: ", values);
    try {
      const res = await login(values).unwrap();
      const user = verifyToken(res.data.accessToken);
      const userInfo = { user, token: res.data.accessToken };
      sessionStorage.setItem("auth", JSON.stringify(userInfo));
      dispatch(setUser(userInfo));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {}
  };
  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Form
        name="login"
        initialValues={{ id: "A-0001", password: "admin12" }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="id"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            value={"A-0001"}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item>
            <Flex justify="end">
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item> */}

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          {error && (
            <Form.Item>
              <Flex justify="center" style={{ color: "red" }}>
                {error.data.message}
              </Flex>
            </Form.Item>
          )}
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default Login;
