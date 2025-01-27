import { Flex } from "antd";
import { Typography } from "antd";
import { SerializedError } from "@reduxjs/toolkit";
import { DefinitionType } from "@reduxjs/toolkit/query";

const { Text } = Typography;

type TCustomError = {
  data: {
    message: string;
    success: boolean;
    stack?: string;
  };
  status: number;
};

interface ApiErrorProps {
  error: DefinitionType | SerializedError | TCustomError | undefined;
}

const isCustomError = (error: any): error is TCustomError =>
  error?.data?.message && typeof error.status === "number";

const ApiError = ({ error }: ApiErrorProps) => {
  if (!error) return null;
  // console.log(error);

  let errorMessage = "An unknown error occurred.";

  if (isCustomError(error)) {
    errorMessage = error.data.message;
  } else if ((error as SerializedError).message) {
    errorMessage = (error as SerializedError).message || errorMessage;
  }

  return (
    <Flex justify="center" style={{ marginTop: "10px" }}>
      <Text type="danger">{errorMessage}</Text>
    </Flex>
  );
};

export default ApiError;
