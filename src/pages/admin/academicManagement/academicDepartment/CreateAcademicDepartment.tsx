import { toast } from "sonner";
import { AuditOutlined } from "@ant-design/icons";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PHForm, PHInput } from "../../../../components/form";
import PHFormWrapperLayout from "../../../../components/form/PHFormWrapperLayout";
import { useGetAllAcademicFacultyQuery } from "../../../../app/features/admin/academicManagement/academicFaculty";
import { useCreateAcademicDepartmentMutation } from "../../../../app/features/admin/academicManagement/academicDepartment";

const CreateAcademicDepartment = () => {
  const [createAcademicDepartment, { error, isLoading }] =
    useCreateAcademicDepartmentMutation();
  const { data: academicFaculties, isFetching } =
    useGetAllAcademicFacultyQuery(undefined);

  const academicFacultyOptions =
    academicFaculties?.data?.map((academicFaculty) => ({
      label: academicFaculty.name,
      value: academicFaculty._id,
    })) || [];

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("Received values of form: ", semesterData);
    const toastId = toast.loading("Creating academic department...");
    try {
      await createAcademicDepartment(data).unwrap();
      toast.success("Academic department created successfully", {
        id: toastId,
      });
      return true;
    } catch (error) {
      toast.error("Failed to create academic department.", { id: toastId });
    }
  };

  return (
    <PHFormWrapperLayout>
      <PHForm
        onSubmit={onSubmit}
        submitLabel="Create Academic Department"
        isLoading={isLoading}
        error={error}
      >
        <PHInput
          type={"text"}
          name={"name"}
          label={"Name"}
          placeholder={"Enter academic department name"}
          validationRules={[
            {
              required: true,
              message: "Please input academic department name!",
            },
          ]}
          prefix={<AuditOutlined />}
        />
        <PHInput
          type={"select"}
          name={"academicFaculty"}
          label={"Academic Faculty"}
          placeholder={"Select academic faculty"}
          validationRules={[
            { required: true, message: "Please select an academic faculty" },
          ]}
          selectOptions={academicFacultyOptions}
          selectLoading={isFetching}
          prefix={<AuditOutlined />}
        />
      </PHForm>
    </PHFormWrapperLayout>
  );
};

export default CreateAcademicDepartment;
