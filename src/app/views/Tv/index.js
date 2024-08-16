import styled from "styled-components";
import Banner from "@/app/Components/Banner";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCardSlider";
import PosterCard from "@/app/Components/PosterCard";
import BannerMovie from "@/app/Components/BannerMovie";
import { releases, cardData } from "../utils/data";
import { useState } from "react";
import Progress from "@/app/Components/Progress";
import useQueryApi from "@/app/Hooks/useQueryApi";
import { urlObj } from "@/app/utils/url";

const starPlus = "/assets/images/star-plus.webp";
const starTelugu = "/assets/images/star-telugu.webp";
const starTamil = "/assets/images/star-tamil.webp";
const starBangal = "/assets/images/star-bangal.webp";
const starPrabah = "/assets/images/star-prabah.webp";
const starBharat = "/assets/images/star-bharat.webp";
const hotstarSpecial = "/assets/images/hostar-special.webp";
const asiaNet = "/assets/images/asiaNet.webp";
const starWorld = "/assets/images/star-world.webp";
const starUtsav = "/assets/images/star-utsav.webp";
function TvPage() {
  const channels = [
    {
      id: 1,
      image: starPlus,
    },
    {
      id: 2,
      image: starTelugu,
    },
    {
      id: 3,
      image: starTamil,
    },
    {
      id: 4,
      image: starBangal,
    },
    {
      id: 5,
      image: starPrabah,
    },
    {
      id: 6,
      image: starBharat,
    },
    {
      id: 7,
      image: hotstarSpecial,
    },
    {
      id: 8,
      image: asiaNet,
    },
    {
      id: 9,
      image: starWorld,
    },
    {
      id: 10,
      image: starUtsav,
    },
    {
      id: 11,
      image: starUtsav,
    },
  ];
  const { data: videoData, refetch } = useQueryApi({
    url: `${urlObj.video}?category=Kids Shows`,
    queryKey: `Kids Shows`,
  });
  return (
    <Wrapper>
      {videoData?.response && videoData?.response?.length ? (
        <>
          <Contentwrapper>
            <Banner />
          </Contentwrapper>
          <BannerMovie releases={videoData?.response} />
          <ProductionWrapper>
            <SliderComponent title="StarPlus Shows" data={releases} />
            <HorizontalCard title="Thriller Shows" data={cardData} />
            <SliderComponent title="Comedy Shows" data={releases} />
            <SliderComponent title="Popular Shows" data={releases} />
            <PosterCard data={channels} title="Popular Channels" />
            <SliderComponent title="Kids Shows" data={releases} />
            <SliderComponent title="Action Shows" data={releases} />
            <SliderComponent title="Hotstar Specials" data={releases} />
            <SliderComponent title="Quix Shows" data={releases} />
          </ProductionWrapper>
        </>
      ) : (
        <ProgressWrapper>
          <Progress />
        </ProgressWrapper>
      )}
    </Wrapper>
  );
}

export default TvPage;

const ProgressWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Contentwrapper = styled.div`
  padding-right: 6rem;
  margin-left: 6rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 1rem;
    margin: 0;
  }
`;
const ProductionWrapper = styled.div`
  padding-left: 6rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 1rem;
    padding-bottom: 2rem;
  }
`;
