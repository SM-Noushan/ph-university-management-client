import { Input } from "antd";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  validationRules?: object;
  prefix?: React.ReactNode;
};

export const PHInput = ({
  type,
  name,
  label,
  prefix,
  validationRules,
}: TInputProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const isPasswordField = /password/i.test(name);

  return (
    <div style={{ marginBottom: "20px" }}>
      {label && (
        <label
          htmlFor={name}
          style={{
            color: errors[name] ? "red" : "black",
            fontWeight: 600,
          }}
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        rules={validationRules}
        render={({ field }) => (
          <Input
            {...field}
            type={isPasswordField ? (isPasswordVisible ? "text" : type) : type}
            id={name}
            status={errors[name] ? "error" : undefined}
            prefix={prefix}
            style={{ marginTop: "8px" }}
            suffix={
              isPasswordField &&
              (isPasswordVisible ? (
                <EyeInvisibleOutlined
                  onClick={() => setPasswordVisible(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <EyeOutlined
                  onClick={() => setPasswordVisible(true)}
                  style={{ cursor: "pointer" }}
                />
              ))
            }
          />
        )}
      />
      {errors[name] && (
        <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
