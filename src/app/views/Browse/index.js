import styled from "styled-components";
import { useSearchParams, useRouter } from "next/navigation";
import Card from "@/app/Components/Card";
import { releases, cardData } from "../utils/data";
import Sportscard from "@/app/Components/Sportscard";
import WatchListCard from "@/app/Components/WatchListCard";
import { HiArrowSmallLeft } from "react-icons/hi2";
export default function Browse() {
  const searchParams = useSearchParams();
  const title = searchParams.get("type");
  const router = useRouter();

  return (
    <Wrapper>
      <HeadingWrapper>
        <StyledLeft size={22} color="#e1e6f0" onClick={() => router.back()} />
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <CardWrapper istrue={title.includes("Sports") || title.includes("Watch")}>
        {title && title.includes("Sports")
          ? cardData.map((release, index) => (
              <Sportscard key={index} release={release} />
            ))
          : title && title.includes("Watch")
          ? cardData.map((release, index) => (
              <WatchListCard key={index} release={release} />
            ))
          : releases.map((release, index) => (
              <Card key={index} release={release} />
            ))}
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
