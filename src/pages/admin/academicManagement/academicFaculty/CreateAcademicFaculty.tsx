import { toast } from "sonner";
import { Button, Col, Flex } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { FieldValues, SubmitHandler } from "react-hook-form";
import ApiError from "../../../../components/shared/ApiError";
import { PHForm, PHInput } from "../../../../components/form";
import { useCreateAcademicFacultyMutation } from "../../../../app/features/admin/academicManagement/academicFaculty";

const CreateAcademicFaculty = () => {
  const [createAcademicFaculty, { error, isLoading }] =
    useCreateAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("Received values of form: ", semesterData);
    const toastId = toast.loading("Creating academic faculty...");
    try {
      await createAcademicFaculty(data).unwrap();
      toast.success("Academic faculty created successfully", { id: toastId });
      return true;
    } catch (error) {
      toast.error("Failed to create academic faculty.", { id: toastId });
    }
  };
  return (
    <Flex align="center" justify="center" style={{ height: "100%" }}>
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput
            type={"text"}
            name={"name"}
            label={"Name"}
            placeholder={"Enter academic faculty name"}
            validationRules={[
              {
                required: true,
                message: "Please input academic faculty name!",
              },
            ]}
            prefix={<FileTextOutlined />}
          />
          <Button block type="primary" htmlType="submit" loading={isLoading}>
            Create Academic Faculty
          </Button>
          <ApiError error={error} />
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
