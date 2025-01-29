import { toast } from "sonner";
import { AuditOutlined } from "@ant-design/icons";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PHForm, PHInput } from "../../../../components/form";
import PHFormWrapperLayout from "../../../../components/form/PHFormWrapperLayout";
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
    <PHFormWrapperLayout>
      <PHForm
        onSubmit={onSubmit}
        submitLabel="Create Academic Faculty"
        isLoading={isLoading}
        error={error}
      >
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
          prefix={<AuditOutlined />}
        />
      </PHForm>
    </PHFormWrapperLayout>
  );
};

export default CreateAcademicFaculty;
