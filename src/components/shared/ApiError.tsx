import { Flex } from "antd";
import { Typography } from "antd";
import { TCustomError, TResponseError } from "../../types/Global.Types";

const { Text } = Typography;

const isCustomError = (error: any): error is TCustomError =>
  error?.data?.message;

const ApiError = ({ error }: TResponseError) => {
  if (!error) return null;
  // console.log(error);

  let errorMessage = "An unknown error occurred.";

  if (isCustomError(error)) errorMessage = error.data.message;

  // else if ((error as SerializedError).message) {
  //   errorMessage = (error as SerializedError).message || errorMessage;
  // }

  return (
    <Flex justify="center" style={{ marginTop: "10px" }}>
      <Text type="danger">{errorMessage}</Text>
    </Flex>
  );
};

export default ApiError;
