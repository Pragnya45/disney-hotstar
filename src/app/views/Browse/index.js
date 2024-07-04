import styled from "styled-components";
import { useSearchParams, useRouter } from "next/navigation";
import Card from "@/app/Components/Card";
import { releases, cardData } from "../utils/data";
import Sportscard from "@/app/Components/Sportscard";
import WatchListCard from "@/app/Components/WatchListCard";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { urlObj } from "@/app/utils/url";
import useQueryApi from "@/app/Hooks/useQueryApi";
import Progress from "@/app/Components/Progress";

export default function Browse() {
  const searchParams = useSearchParams();
  const title = searchParams.get("type");
  const router = useRouter();
  const { data: videoData, refetch } = useQueryApi({
    url: `${urlObj.video}?category=${title}`,
    queryKey: `${title}`,
  });

  return (
    <Wrapper>
      <HeadingWrapper>
        <StyledLeft size={22} color="#e1e6f0" onClick={() => router.back()} />
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <CardWrapper istrue={title.includes("Sports") || title.includes("Watch")}>
        {videoData?.response && videoData?.response?.length ? (
          title && title.includes("Sports") ? (
            videoData?.response?.map((release, index) => (
              <Sportscard key={index} release={release} />
            ))
          ) : title && title.includes("Watch") ? (
            videoData?.response?.map((release, index) => (
              <WatchListCard key={index} release={release} />
            ))
          ) : (
            videoData?.response?.map((release, index) => (
              <Card key={index} release={release} />
            ))
          )
        ) : (
          <ProgressWrapper>
            <Progress />
          </ProgressWrapper>
        )}
      </CardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 6rem;
  padding-top: 3rem;
  padding-right: 3rem;
  gap: 2rem;
  align-items: center;
  @media (max-width: 600px) {
    padding: 1rem;
    align-items: start;
    gap: 1rem;
  }
`;
const ProgressWrapper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 700;
  font-size: 2.5rem;
  color: var(--text-color900);
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;
const CardWrapper = styled.div`
  gap: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  @media (max-width: 600px) {
    margin-top: 0rem;
    row-gap: 0.3rem;
    gap: 0.3rem;
  }
`;
const HeadingWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const StyledLeft = styled(HiArrowSmallLeft)`
  display: none;
  @media (max-width: 600px) {
    display: block;
    cursor: pointer;
  }
`;
