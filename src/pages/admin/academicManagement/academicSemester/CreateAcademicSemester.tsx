import { Button } from "antd";
import { PHForm, PHInput } from "../../../../components/form";

const CreateAcademicSemester = () => {
  const onSubmit = async (values: unknown) => {
    console.log("Received values of form: ", values);
  };
  return (
    <PHForm
      onSubmit={onSubmit}
      // defaultValues={{ id: "A-0001", password: "admin12" }}
    >
      <PHInput
        type="text"
        name="id"
        label="User ID"
        // prefix={<UserOutlined />}
        validationRules={{
          required: "Username is required",
          minLength: { value: 4, message: "Must be at least 4 characters" },
        }}
      />
      <Button block type="primary" htmlType="submit">
        Submit
      </Button>
      {/* {error && (
        <Flex justify="center" style={{ color: "red", marginTop: "10px" }}>
          {(error as { data: { message: string } })?.data.message}
        </Flex>
      )} */}
    </PHForm>
  );
};

export default CreateAcademicSemester;
