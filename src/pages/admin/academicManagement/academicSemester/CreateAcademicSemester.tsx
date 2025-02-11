import { toast } from "sonner";
import {
  monthOptions,
  semesterCode,
  semesterNameOptions,
  yearOptions,
} from "../../../../constants";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PHForm, PHInput } from "../../../../components/form";
import { AuditOutlined, CalendarOutlined } from "@ant-design/icons";
import PHFormWrapperLayout from "../../../../components/form/PHFormWrapperLayout";
import { useCreateSemesterMutation } from "../../../../app/features/admin/academicManagement/academicSemesterApi";

const inputConfigs = [
  {
    type: "select",
    name: "name",
    label: "Name",
    placeholder: "Select semester",
    validationRules: [
      {
        required: true,
        message: "Please select semester name",
      },
    ],
    selectOptions: semesterNameOptions,
    prefix: <AuditOutlined />,
  },
  {
    type: "select",
    name: "year",
    label: "Year",
    placeholder: "Select year",
    validationRules: [
      {
        required: true,
        message: "Please select a year",
      },
    ],
    selectOptions: yearOptions,
    prefix: <CalendarOutlined />,
  },
  {
    type: "select",
    name: "startMonth",
    label: "Start Month",
    placeholder: "Select start month",
    validationRules: [
      {
        required: true,
        message: "Please select a start month",
      },
    ],
    selectOptions: monthOptions,
    prefix: <CalendarOutlined />,
  },
  {
    type: "select",
    name: "endMonth",
    label: "End Month",
    placeholder: "Select end month",
    validationRules: [
      {
        required: true,
        message: "Please select a end month",
      },
    ],
    selectOptions: monthOptions,
    prefix: <CalendarOutlined />,
  },
];

const CreateAcademicSemester = () => {
  const [createSemester, { error, isLoading }] = useCreateSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("Received values of form: ", semesterData);
    const toastId = toast.loading("Creating semester...");
    const { year, name, startMonth, endMonth } = data;
    const semesterData = {
      name,
      code: semesterCode[name as keyof typeof semesterCode],
      year,
      startMonth,
      endMonth,
    };
    try {
      await createSemester(semesterData).unwrap();
      toast.success("Academic semester created successfully", { id: toastId });
      return true;
    } catch (error) {
      toast.error("Failed to create academic semester.", { id: toastId });
    }
  };
  return (
    <PHFormWrapperLayout>
      <PHForm
        onSubmit={onSubmit}
        error={error}
        submitLabel="  Create Semester"
        isLoading={isLoading}
      >
        {inputConfigs.map((config, index) => (
          <PHInput
            key={index}
            type={config.type}
            name={config.name}
            label={config.label}
            placeholder={config.placeholder}
            validationRules={config.validationRules}
            selectOptions={config.selectOptions}
            prefix={config.prefix}
          />
        ))}
      </PHForm>
    </PHFormWrapperLayout>
  );
};

export default CreateAcademicSemester;
