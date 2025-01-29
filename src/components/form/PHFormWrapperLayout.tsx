import React from "react";
import { Col, Flex } from "antd";

const PHFormWrapperLayout = ({
  children,
  style = { height: "100%" },
}: {
  children: React.ReactNode;
  style?: Record<string, string>;
}) => {
  return (
    <Flex align="center" justify="center" style={style}>
      <Col span={6}>{children}</Col>
    </Flex>
  );
};

export default PHFormWrapperLayout;
