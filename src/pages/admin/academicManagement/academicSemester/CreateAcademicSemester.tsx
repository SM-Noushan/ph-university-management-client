import { Button, Col, Flex, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PHForm, PHInput } from "../../../../components/form";

const semesterNameOptions = [
  {
    value: "Autumn",
    label: "Autumn",
  },
  {
    value: "Summer",
    label: "Summer",
  },
  {
    value: "Fall",
    label: "Fall",
  },
];

const semesterCode = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const selectedSemester = data["name"] as keyof typeof semesterCode;
    const semesterData = {
      name: selectedSemester,
      code: semesterCode[selectedSemester],
    };
    console.log("Received values of form: ", semesterData);
  };
  return (
    <Flex  justify="center" style={{ height: "100%" }}>
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          // defaultValues={}
        >
          <PHInput
            type="select"
            name="name"
            label="Semester Name"
            placeholder="Select semester"
            validationRules={[
              {
                required: true,
                message: "Please select semester name",
              },
            ]}
            selectOptions={semesterNameOptions}
            // prefix={<UserOutlined />}
          />
          {/* <PHInput
          type="text"
          name="id"
          label="User ID"
          // prefix={<UserOutlined />}
        /> */}
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
          {/* {error && (
        <Flex justify="center" style={{ color: "red", marginTop: "10px" }}>
          {(error as { data: { message: string } })?.data.message}
        </Flex>
      )} */}
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
