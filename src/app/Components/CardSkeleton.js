import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <SkeletonWrapper key={index}>
        <StyledSkeleton />
      </SkeletonWrapper>
    ));
}

const SkeletonWrapper = styled.div`
  border-radius: 6px;
  margin: 10px 0;
  width: 13rem !important;
  height: 16rem !important;
  z-index: 20;
  @media (max-width: 600px) {
    overflow: hidden;
    width: 8rem !important;
    height: 8rem !important;
  }
`;
const StyledSkeleton = styled(Skeleton)`
  width: 13rem !important;
  height: 16rem !important;
  @media (max-width: 600px) {
    width: 8rem !important;
    height: 8rem !important;
  }
`;
