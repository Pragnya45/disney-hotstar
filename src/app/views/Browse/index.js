import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import Card from "@/app/Components/Card";
import { releases, cardData } from "../utils/data";
import Sportscard from "@/app/Components/Sportscard";
import WatchListCard from "@/app/Components/WatchListCard";
export default function Browse() {
  const searchParams = useSearchParams();
  const title = searchParams.get("type");
  return (
    <Wrapper>
      <Heading>{title}</Heading>
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
  padding-right: 5rem;
  gap: 2rem;
  align-items: center;
`;
const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 700;
  font-size: 2.5rem;
  color: var(--text-color900);
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CardWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: ${(props) =>
    props.istrue
      ? "repeat(5, minmax(91px, 1fr))"
      : "repeat(7, minmax(91px, 1fr))"};
  row-gap: 1rem;
  margin-top: 1rem;
  width: 100%;
`;
