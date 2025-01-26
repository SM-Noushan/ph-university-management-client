import React from "react";
import { toast } from "sonner";
import { Button, Flex } from "antd";
import { verifyToken } from "../utils";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { PHForm, PHInput } from "../components/form";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { setUser, TUser } from "../app/features/auth/authSlice";
import { useLoginMutation } from "../app/features/auth/authApi";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { error, isLoading }] = useLoginMutation();

  const onSubmit = async (values: unknown) => {
    // console.log("Received values of form: ", values);
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(values).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      const userInfo = { user, token: res.data.accessToken };
      sessionStorage.setItem("auth", JSON.stringify(userInfo));
      dispatch(setUser(userInfo));
      toast.success("Login successfully", { id: toastId });
      navigate(user.role === "student" ? "/" : `/${user.role}`);
    } catch (err) {
      toast.error("Login failed", { id: toastId });
    }
  };
  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <PHForm
        onSubmit={onSubmit}
        defaultValues={{ id: "A-0001", password: "admin12" }}
      >
        <PHInput
          type="text"
          name="id"
          label="User ID"
          prefix={<UserOutlined />}
          validationRules={{
            required: "Username is required",
            minLength: { value: 4, message: "Must be at least 4 characters" },
          }}
        />
        <PHInput
          type="password"
          name="password"
          label="Password"
          prefix={<LockOutlined />}
          validationRules={{
            required: "Password is required",
            minLength: { value: 6, message: "Must be at least 6 characters" },
          }}
        />

        <Button block type="primary" htmlType="submit" disabled={isLoading}>
          Log in
        </Button>
        {error && (
          <Flex justify="center" style={{ color: "red", marginTop: "10px" }}>
            {(error as { data: { message: string } })?.data.message}
          </Flex>
        )}
      </PHForm>
    </Flex>
  );
};

export default Login;
