import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

export default function BannnerSkeleton() {
  return (
    <SkeletonWrapper>
      <StyledSkeleton />
    </SkeletonWrapper>
  );
}

const SkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;
