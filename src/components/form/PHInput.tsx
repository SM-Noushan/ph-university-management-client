import React from "react";
import { Form, Input, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectOptions = {
  value: string;
  label: string;
  disabled?: boolean;
};

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  validationRules?: object[];
  prefix?: React.ReactNode;
  selectOptions?: TSelectOptions[];
};

const { Option } = Select;

export const PHInput = ({
  type,
  name,
  label,
  placeholder,
  prefix,
  validationRules,
  selectOptions,
}: TInputProps) => {
  const inputProps = {
    prefix,
    placeholder,
  };
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <>
            <Form.Item
              name={name}
              rules={validationRules || [{}]}
              label={label}
            >
              {type === "password" ? (
                <Input.Password {...field} {...inputProps} />
              ) : type === "text" ? (
                <Input {...field} {...inputProps} />
              ) : type === "select" ? (
                <Select {...field} {...inputProps}>
                  {selectOptions?.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              ) : null}
            </Form.Item>
          </>
        )}
      />
    </div>
  );
};

{
  /* <Form.Item
name="gender"
label="Gender"
rules={[
  {
    required: true,
    message: 'Please select gender!',
  },
]}
>
<Select placeholder="select your gender">
  <Option value="male">Male</Option>
  <Option value="female">Female</Option>
  <Option value="other">Other</Option>
</Select>
</Form.Item> */
}
