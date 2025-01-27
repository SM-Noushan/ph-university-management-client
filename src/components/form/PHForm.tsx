import React from "react";
import { Form } from "antd";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  onSubmit: SubmitErrorHandler<FieldValues>;
  children: React.ReactNode;
} & TFormConfig;

export const PHForm = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const [form] = Form.useForm();
  const formConfig: TFormConfig = {};
  if (defaultValues) formConfig["defaultValues"] = defaultValues;
  const methods = useForm(formConfig);

  const handleFormSubmit = async (data: FieldValues) => {
    const result = await onSubmit(data);
    if (result) form.resetFields();
  };

  return (
    <FormProvider {...methods}>
      <Form
        form={form}
        initialValues={defaultValues || {}}
        onFinish={methods.handleSubmit(handleFormSubmit)}
        layout="vertical"
        variant={"filled"}
        requiredMark={"optional"}
        style={{ width: "100%" }}
      >
        {children}
      </Form>
    </FormProvider>
  );
};
