import React from "react";
import { Button, Form } from "antd";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  useForm,
} from "react-hook-form";
import ApiError from "../shared/ApiError";
import { TResponseError } from "../../types/Global.Types";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  onSubmit: SubmitErrorHandler<FieldValues>;
  children: React.ReactNode;
  submitLabel?: string;
  isLoading?: boolean;
  showErrorBelowSubmitBtn?: boolean;
} & TFormConfig &
  TResponseError;

export const PHForm = ({
  onSubmit,
  children,
  defaultValues,
  submitLabel = "Submit",
  isLoading = false,
  error,
  showErrorBelowSubmitBtn = false,
}: TFormProps) => {
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
        {!showErrorBelowSubmitBtn && <ApiError error={error} />}
        <Button block type="primary" htmlType="submit" loading={isLoading}>
          {submitLabel}
        </Button>
        {showErrorBelowSubmitBtn && <ApiError error={error} />}
      </Form>
    </FormProvider>
  );
};
