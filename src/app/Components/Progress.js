import { Flex, Progress } from "antd";
import React from "react";

export default function ProgressBar() {
  return <Loader showInfo={false} />;
}

const Loader = styled(Progress)`
  color: ${(props) => props.theme.darkMode.accentBgColor700} !important;
`;