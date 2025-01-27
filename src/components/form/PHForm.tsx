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
  const formConfig: TFormConfig = {};
  if (defaultValues) formConfig["defaultValues"] = defaultValues;
  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <Form
        initialValues={defaultValues || {}}
        onFinish={methods.handleSubmit(onSubmit)}
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
