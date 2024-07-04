import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

export default function Progress() {
  return <Loader />;
}
export function BtnLoader() {
  return <LoadingOutlined />;
}

const Loader = styled(CircularProgress)`
  color: white !important;
`;
