import React from "react";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { releases, cardData } from "../utils/data";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCardSlider";
import DetailedView from "@/app/Components/DetailedView";

export default function Moviedetails() {
  const searchParams = useSearchParams();
  const releaseId = searchParams.get("releaseId");
  const details = releases.find((release) => release.id === releaseId);

  return (
    <Wrapper>
      <DetailedView details={details} />
      <SliderCardWrapper>
        <SliderComponent title="More Like This" data={releases} />
        <HorizontalCard title="Thriller Shows" data={cardData} />
      </SliderCardWrapper>
    </Wrapper>
  );
}
const SliderCardWrapper = styled.div`
  padding-left: 6rem;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
